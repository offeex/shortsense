/**
 * The following lines intialize dotenv,
 * so that env vars from the .env file are present in process.env
 */
import * as dotenv from 'dotenv'
import * as express from 'express'
import serverConfig from './config/server.config'
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';
import homeRouter from './routes/home.router'
dotenv.config();

const app = express()
export const prisma = new PrismaClient()
export const redis = new Redis()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(homeRouter)

app.listen(serverConfig.port, () => {
    console.log(`Server is listening on port ${serverConfig.port}`)
  }
)