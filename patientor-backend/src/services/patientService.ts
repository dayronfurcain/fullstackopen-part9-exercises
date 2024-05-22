import patients from '../../data/patients'
import { NewPatient, NonSensitivePatient, Patient } from '../types'
import { randomUUID } from 'node:crypto'

export const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, dateOfBirth, gender, name, occupation }) => ({
    id,
    dateOfBirth,
    gender,
    name,
    occupation
  }))
}

export const getPatientById = (id: string): Patient | undefined => {
  return patients.find((patient) => patient.id === id)
}

export const addDiary = (entry: NewPatient): Patient => {
  const newPatient = {
    id: randomUUID(),
    ...entry
  }

  patients.push(newPatient)
  return newPatient
}
