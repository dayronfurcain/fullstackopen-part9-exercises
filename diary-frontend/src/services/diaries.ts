import axios from 'axios'
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types'

const baseUrl = 'http://localhost:3000/api/diaries'

export const getNonSensitiveEntries = async () => {
  const { data } = await axios.get<NonSensitiveDiaryEntry[]>(baseUrl)
  return data
}

export const create = async (object: NewDiaryEntry) => {
  const { data } = await axios.post<DiaryEntry>(baseUrl, object)
  return data
}
