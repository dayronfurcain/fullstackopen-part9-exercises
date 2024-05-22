/* eslint-disable @typescript-eslint/semi */
import { Diagnosis, Entry } from '../../types'
import { assertNever } from '../../utils'
import HealthCheckEntry from './HealthCheckEntry'
import HospitalEntry from './HospitalEntry'
import OccupationalHealthCareEntry from './OccupationalHealthCareEntry'

interface Props {
  entry: Entry
  findDiagnosisName: (diagnosisCode: Diagnosis['code']) => string | undefined
}

function EntryDetails({ entry, findDiagnosisName }: Props) {
  switch (entry.type) {
    case 'Hospital':
      return (
        <HospitalEntry entry={entry} findDiagnosisName={findDiagnosisName} />
      )
    case 'HealthCheck':
      return (
        <HealthCheckEntry entry={entry} findDiagnosisName={findDiagnosisName} />
      )
    case 'OccupationalHealthcare':
      return (
        <OccupationalHealthCareEntry
          entry={entry}
          findDiagnosisName={findDiagnosisName}
        />
      )
    default:
      assertNever(entry)
      break
  }
}

export default EntryDetails
