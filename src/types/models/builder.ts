import { Todo } from '../entities'

export type MutableTodo = Pick<Todo, 'body'>
