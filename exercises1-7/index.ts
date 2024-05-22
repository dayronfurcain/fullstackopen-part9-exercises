import express from 'express'
import { bmiCalculator } from './bmiCalculator'
import { calculateExercises } from './calculateExercises'

const app = express()

app.use(express.json())

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!')
})

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query

  if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
    return res.status(400).json({ error: 'malformatted parameters' })
  }

  const bmi = bmiCalculator(Number(height), Number(weight))

  return res.json({ weight: Number(weight), height: Number(height), bmi })
})

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body

  if (!daily_exercises || !target) {
    return res.status(400).json({ error: 'parameters missing' })
  }

  const isPositiveNumber = daily_exercises.every((value: string) => {
    return !isNaN(Number(value)) && Number(value) >= 0
  })

  if (!isPositiveNumber || isNaN(Number(target)) || Number(target) < 0) {
    return res.status(400).json({ error: 'malformatted parameters' })
  }

  const result = calculateExercises(daily_exercises, target)

  return res.json(result)
})

const PORT = 3002

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
