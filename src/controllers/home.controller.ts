import { Request, Response } from 'express'
import { prisma, redis } from '../app'
import { generateKey, validateKey, validateUrl } from '../services/url.service'

type RouteParams = (req: Request, res: Response) => any

export class HomeController {
  create: RouteParams = async (req, res) => {
    const original = req.body.url

    if (!original) {
      return res.status(406).json({ message: 'url is required' })
    }
    if (!validateUrl(original)) {
      return res.status(400).json({ message: 'invalid url' })
    }

    // neat part..
    try {
      let key = await redis.get(original)
      if (key) {
        // hey, we have our stuff in Redis
        return res.status(200).json({ url: key })
      }

      // or not...
      key = generateKey()
      await prisma.url.create({ data: { original, key } })
      await redis.set(original, key)

      res.status(201).json({ url: key })
    } catch (err) {
      console.log(err)
      res.status(500).json('Server Error')
    }
  }

  read: RouteParams = async (req, res) => {
    const key = req.params.key

    if (!key) {
      return res.status(406).json({ message: 'key is required' })
    }

    if (!validateKey(key)) {
      return res.status(400).json({ message: 'invalid key' })
    }

    try {
      const original = await redis.get(key)
      if (original) {
        // hey, we once again, got our stuff in Redis
        return res.redirect(original)
      }

      // and guess what now...
      const urlObj = await prisma.url.findUnique({ where: { key } })
      if (!urlObj) {
        return res.status(404).json({ message: 'url not found' })
      }

      await redis.set(key, urlObj.original)
      res.redirect(urlObj.original)
    } catch (err) {
      console.log(err)
      res.status(500).json('Server Error')
    }
  }
}

export default new HomeController()
