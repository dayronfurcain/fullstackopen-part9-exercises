interface Values {
  value1: number[]
  value2: number
}

const parseArguments = (args: string[]): Values => {
  if (args.length < 4) throw new Error('Not enough arguments')

  const firstValues = args.slice(2, args.length - 1)
  const lastValue = args.at(-1)

  const isPositiveNumber = firstValues.every((value) => {
    return !isNaN(Number(value)) && Number(value) >= 0
  })

  if (!isPositiveNumber || isNaN(Number(lastValue)) || Number(lastValue) < 0) {
    throw new Error('Provided values were not numbers!')
  }

  return {
    value1: firstValues.map((value) => Number(value)),
    value2: Number(lastValue)
  }
}

const calculateExercises = (hours: number[], target: number) => {
  const periodLength = hours.length
  const trainingDays = hours.filter((h) => h > 0).length
  const average =
    hours.reduce((acc, curr) => {
      return acc + curr
    }, 0) / periodLength

  let success: boolean

  if (average >= target) {
    success = true
  } else {
    success = false
  }

  let rating: number
  let ratingDescription: string

  if (average / target < 0.5) {
    rating = 1
    ratingDescription = 'you must work harder'
  } else if (average / target >= 0.5 && average / target < 0.8) {
    rating = 2
    ratingDescription = 'not too bad but could be better'
  } else {
    rating = 3
    ratingDescription = 'excellent work'
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}

try {
  const { value1, value2 } = parseArguments(process.argv)

  console.log(calculateExercises(value1, value2))
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message
  }
  console.log(errorMessage)
}
