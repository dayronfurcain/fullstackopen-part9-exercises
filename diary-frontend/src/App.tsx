import { useEffect, useState } from 'react'
import { NonSensitiveDiaryEntry } from './types'
import { getNonSensitiveEntries, create } from './services/diaries'
import DiaryEntry from './components/DiaryEntry'
import DiaryForm from './components/DiaryForm'
import toNewDiaryEntry from './utils'

function App() {
  const [nonSensitiveDiaryEntries, setNonSensitiveDiaryEntries] = useState<
    NonSensitiveDiaryEntry[]
  >([])
  const [notification, setNotificacion] = useState<string | null>()
  const [error, setError] = useState(false)

  useEffect(() => {
    getNonSensitiveEntries().then((data) => {
      setNonSensitiveDiaryEntries(data)
    })
  }, [])

  const createEntry = async (object: unknown) => {
    try {
      const newDiaryEntry = toNewDiaryEntry(object)
      const savedDiaryEntry = await create(newDiaryEntry)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { comment, ...rest } = savedDiaryEntry
      setNonSensitiveDiaryEntries(nonSensitiveDiaryEntries.concat(rest))
    } catch (error) {
      if (error instanceof Error) {
        setError(true)
        setNotificacion(error.message)

        setTimeout(() => {
          setError(false)
          setNotificacion(null)
        }, 5000)
      }
    }
  }

  return (
    <div>
      {error && <div>{notification}</div>}
      <DiaryForm createEntry={createEntry} />
      <DiaryEntry nonSensitiveDiaryEntries={nonSensitiveDiaryEntries} />
    </div>
  )
}

export default App
