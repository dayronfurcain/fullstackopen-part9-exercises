import { NonSensitiveDiaryEntry } from '../types'
import NonSensitiveEntry from './NonSensitiveEntry'

interface Props {
  nonSensitiveDiaryEntries: NonSensitiveDiaryEntry[]
}

function DiaryEntry({ nonSensitiveDiaryEntries }: Props) {
  return (
    <div>
      <h2>Diary Entry</h2>
      {nonSensitiveDiaryEntries.map((nonSensitiveDiaryEntry) => (
        <NonSensitiveEntry
          nonSensitiveDiaryEntry={nonSensitiveDiaryEntry}
          key={nonSensitiveDiaryEntry.id}
        />
      ))}
    </div>
  )
}

export default DiaryEntry
