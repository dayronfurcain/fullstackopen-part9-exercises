/* eslint-disable @typescript-eslint/semi */
import { Diagnosis, HospitalEntry as HospitalType } from '../../types'
import { Favorite } from '@mui/icons-material'

interface Props {
  entry: HospitalType
  findDiagnosisName: (diagnosisCode: Diagnosis['code']) => string | undefined
}

function HospitalEntry({ entry, findDiagnosisName }: Props) {
  return (
    <div style={{ border: '1px solid black' }}>
      {entry.date} {entry.description}
      <ul>
        {entry.diagnosisCodes?.map((diagnosisCode, index) => {
          return (
            <li key={index}>
              {diagnosisCode} {findDiagnosisName(diagnosisCode)}
            </li>
          )
        })}
      </ul>
      <Favorite style={{ color: 'yellow' }} />
      <div> diagnose by {entry.specialist}</div>
    </div>
  )
}

export default HospitalEntry
