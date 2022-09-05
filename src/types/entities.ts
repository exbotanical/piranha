import type { UUID, UNIXTimestamp } from './scalar'

export interface Todo {
  id: UUID
  createdAt: UNIXTimestamp
  updatedAt: UNIXTimestamp
  body: string
  completed: boolean
}
