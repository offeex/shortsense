import { Request, Response } from 'express'
import homeController, { HomeController } from '../controllers/home.controller'

describe('controllers', () => {
  // let homeController: HomeController
  //
  // beforeAll(() => {
  //   homeController = new HomeController()
  // })

  it('create operation', async () => {
    // const url = 'https://www.google.com'
    // const req = {
    //   body: { url },
    //   baseUrl: 'http://localhost:3000',
    // }
    // const res = new Response()
    //
    // // well, that's typescript moment
    // homeController.create(req as Request, res as unknown as Response)
    //
    // expect(res.ok).toBeTruthy()
    // expect(res.json).toHaveProperty('url')
    // expect((res.json as any).url).toMatch('.*[^a-zA-Z0-9_].*')
  })

  it('read operation', async () => {
    // const key = 'EGeIThnd'
    //
    // const req = { params: { key } }
    // const res = new Response()
    //
    // homeController.read(req as unknown as Request, res as unknown as Response)
    //
    // expect(res.redirected).toBeTruthy()
  })
})
