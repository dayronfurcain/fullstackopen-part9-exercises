/* eslint-disable @typescript-eslint/semi */

import {
  Diagnosis,
  OccupationalHealthCareEntry as OccupationalHealthType
} from '../../types'

interface Props {
  entry: OccupationalHealthType
  findDiagnosisName: (diagnosisCode: Diagnosis['code']) => string | undefined
}

function OccupationalHealthCareEntry({ entry, findDiagnosisName }: Props) {
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
      <div> diagnose by {entry.specialist}</div>
    </div>
  )
}

export default OccupationalHealthCareEntry
