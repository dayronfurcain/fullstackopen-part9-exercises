import React, { useState } from 'react'
import { Weather, Visibility } from '../types'

interface Props {
  createEntry: (object: unknown) => void
}

function DiaryForm({ createEntry }: Props) {
  const [date, setDate] = useState('')
  const [visibility, setVisibility] = useState('')
  const [weather, setWeather] = useState('')
  const [comment, setComment] = useState('')

  const addEntry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const entry = {
      date,
      visibility,
      weather,
      comment
    }

    createEntry(entry)
  }

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const handleWeather = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeather(event.target.value)
  }

  const handleVisibility = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisibility(event.target.value)
  }

  const handleComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  }

  return (
    <div>
      <h2>DiaryForm</h2>
      <form onSubmit={addEntry}>
        <div>
          date <input type='date' value={date} onChange={handleDate} />
        </div>
        <div>
          visibility:
          {Object.values(Visibility).map((v) => {
            return (
              <span key={v}>
                {v}
                <input
                  type='radio'
                  name='visibility'
                  value={v}
                  onChange={handleVisibility}
                />
              </span>
            )
          })}
        </div>
        <div>
          weather:
          {Object.values(Weather).map((v) => {
            return (
              <span key={v}>
                {v}
                <input
                  type='radio'
                  name='weather'
                  value={v}
                  onChange={handleWeather}
                />
              </span>
            )
          })}
        </div>

        <div>
          comment <input type='text' value={comment} onChange={handleComment} />
        </div>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default DiaryForm
