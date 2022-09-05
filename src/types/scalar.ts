export type UUID = string

export type UNIXTimestamp = number

export type ValidationRule<T> = (
  value: T,
) => Promise<boolean | string> | boolean | string
