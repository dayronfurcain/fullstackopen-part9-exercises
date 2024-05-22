import express from 'express'
import {
  getNonSensitivePatients,
  getPatientById,
  addDiary
} from '../services/patientService'
import { toNewPatient } from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  res.json(getNonSensitivePatients())
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const patient = getPatientById(id)
  if (!patient) {
    return res.status(404).json({ patient: 'Not found' })
  }
  return res.json(patient)
})

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body)
    const addedEntry = addDiary(newPatient)
    res.json(addedEntry)
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message
    }
    res.status(400).send(errorMessage)
  }
})

export default router
