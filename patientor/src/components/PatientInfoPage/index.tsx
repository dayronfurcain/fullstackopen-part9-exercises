/* eslint-disable @typescript-eslint/semi */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Female, Male } from '@mui/icons-material'
import patientService from '../../services/patients'
import diagnosisService from '../../services/diagnoses'
import { Diagnosis, Patient } from '../../types'
import EntryDetails from './EntryDetails'

const PatientInfoPage = () => {
  const [patient, setPatient] = useState<Patient | null>()
  const [diagnoses, setDiagnoses] = useState<Diagnosis[] | null>()

  const id = useParams().id as string

  useEffect(() => {
    const fetchPatientInfo = async () => {
      const patient = await patientService.getById(id)
      setPatient(patient)
    }
    void fetchPatientInfo()

    const fetchDiagnoses = async () => {
      const diagnoses = await diagnosisService.getAll()
      setDiagnoses(diagnoses)
    }

    void fetchDiagnoses()
  }, [id])

  const findDiagnosisName = (diagnosisCode: Diagnosis['code']) => {
    const diagnosis = diagnoses?.find(
      (diagnosis) => diagnosis.code === diagnosisCode
    )
    return diagnosis?.name
  }

  return (
    <div>
      <h2>
        {patient?.name} {patient?.gender === 'female' ? <Female /> : <Male />}
      </h2>
      <div>ssh: {patient?.ssn}</div>
      <div>occupation: {patient?.occupation}</div>
      <h3>entries</h3>
      <div>
        {patient?.entries.map((entry, index) => {
          return (
            <EntryDetails
              key={index}
              entry={entry}
              findDiagnosisName={findDiagnosisName}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PatientInfoPage
