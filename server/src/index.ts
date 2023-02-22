import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
const app = express()

app.use(express.json())

import Deck from './models/Deck'

const PORT = 5000

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

mongoose
  .connect(
    'mongodb+srv://anselmo72:ar15095333@cluster0.8qz81.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log(`listening on port ${PORT}`)
    app.listen(PORT)
  })