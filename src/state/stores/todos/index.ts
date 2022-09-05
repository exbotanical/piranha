import type { Todo, UUID } from '@/types'
import type { MutableTodo } from '@/types/models'
import { defineStore } from 'pinia'
import { TodoStoreState } from './types'
import { v4 } from 'uuid'

export const useTodoStore = defineStore('todo', {
  state: (): TodoStoreState => ({
    todos: [],
  }),

  actions: {
    setTodos(todos: Todo[]) {
      this.todos = todos
    },

    removeTodo(targetId: UUID) {
      const idx = this.todos.findIndex(({ id }) => id === targetId)
      if (idx === -1) {
        // @todo
        return
      }

      this.todos.splice(idx, 1)
    },

    addTodo(todo: MutableTodo) {
      const createdAt = Date.now()

      this.todos.push({
        id: v4(),
        body: todo.body,
        createdAt,
        updatedAt: createdAt,
        completed: false,
      })
    },

    updateTodo(targetId: UUID, updatedTodo: Todo) {
      const idx = this.todos.findIndex(({ id }) => id === targetId)
      if (idx === -1) {
        // @todo
        return
      }

      Object.assign(this.todos[idx], updatedTodo)
    },
  },
})

// function updateTodo(
//   this: ReturnType<typeof useTodoStore>,
//   targetId: UUID,
//   {},
// ) {}
