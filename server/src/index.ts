import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'
const app = express()

config()

app.use(cors({ origin: '*' }))
app.use(express.json())

import Deck from './models/Deck'

const PORT = 5000

app.get('/decks', async (req: Request, res: Response) => {
  const decks = await Deck.find()
  res.json(decks)
})

app.get('/', (req: Request, res: Response) => {
  res.send('gg')
})

app.post('/decks', async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  })
  const createdDeck = await newDeck.save()
  res.json(createdDeck)
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`)
  app.listen(PORT)
})
