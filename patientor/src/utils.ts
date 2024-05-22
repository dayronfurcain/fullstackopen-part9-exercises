/* eslint-disable @typescript-eslint/semi */
export const assertNever = (value: never) => {
  throw Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`)
}
