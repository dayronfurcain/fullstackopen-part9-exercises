import { NonSensitiveDiaryEntry } from '../types'

interface Props {
  nonSensitiveDiaryEntry: NonSensitiveDiaryEntry
}

function NonSensitiveEntry({ nonSensitiveDiaryEntry }: Props) {
  return (
    <div>
      <h3>{nonSensitiveDiaryEntry.date}</h3>
      <div>visibility: {nonSensitiveDiaryEntry.visibility}</div>
      <div>weather: {nonSensitiveDiaryEntry.weather}</div>
    </div>
  )
}

export default NonSensitiveEntry
