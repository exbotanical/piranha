<script lang="ts" setup>
import SvgLoader from '../components/common/SvgLoader.vue'
import { useTodoStore } from '@/state'
import type { Todo } from '@/types'

import { mockTodos } from '@/state/stores/todos/mock'

const todoStore = useTodoStore()

todoStore.setTodos(mockTodos)

const nextTodo = ref('')

function toggleCompleted(todo: Todo) {
  todoStore.updateTodo(todo.id, {
    ...todo,
    completed: !todo.completed,
  })
}

function addtodo() {
  console.log({
    adding: nextTodo.value,
  })
  todoStore.addTodo({
    body: nextTodo.value,
  })

  nextTodo.value = ''
}
</script>

<template lang="pug">
div.todo-list
  h1 Todos
  section
    form.todo-list__form(
      @submit.stop.prevent="addtodo"
    )
      label(
        for="todo-form"
      )
      input.todo-list__form__input(
        type="text"
        v-model="nextTodo"
        id="todo-form"
        placeholder="Add a Todo"
      )
      button(
        style="display:none"
        type="submit"
        :disabled="nextTodo.length === 0"
      )

    ul.todo-list
      li.todo-list__list-item(
        v-for="todo in todoStore.todos"
        :id="todo.id"
        :key="todo.id"
        :class="{'todo-list__list-item--completed': todo.completed}"
        draggable="true"
      )
        div
          div.todo-list__list-item__move
          div.todo-list__list-item__checkbox(
            @click="toggleCompleted(todo)"
          )
            SvgLoader(
              name="check"
            )
          span.todo-list__list-item__name
            | {{ todo.body }}
        button.todo-list__list-item__remove(
          @click="todoStore.removeTodo(todo.id)"
        )
          | +

</template>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  &__form {
    display: flex;
    position: relative;
    justify-content: center;

    &__input {
      background-color: var(--bg-secondary);
      border-radius: $rounded-sm;
      border: 1px solid transparent;
      box-shadow: inset 0 2px 4px rgba(var(--bg-secondary), 0.25);
      color: var(--text);
      display: block;
      font-size: $font-size--md;
      height: 100%;
      outline: none;
      padding: 0.8rem 8rem 0.8rem 1rem;
      width: 100%;

      &::placeholder {
        color: var(--color-secondary);
        font-style: italic;
      }
    }
  }

  &__list-item {
    display: flex;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 0.5rem 0;
    }

    & > button {
      margin-right: 0.75rem;
      background: none;
      border: none;
    }

    cursor: pointer;

    &:hover {
      .todo-list__list-item__remove {
        display: block;
      }

      background-color: var(--bg-secondary);
      border-radius: $rounded-sm;
    }

    &--completed {
      .todo-list__list-item__name {
        color: var(--color-negative);
        text-decoration: line-through;
      }

      .todo-list__list-item__checkbox {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-secondary);
        border-color: var(--bg-secondary);

        & > svg {
          display: block;
        }
      }
    }

    &__move {
      background: radial-gradient(var(--text) 25%, transparent 25%) 0 0 / 6px
        6px;
      cursor: move;
      height: 16px;
      margin: 0 1rem;
      width: 0.8rem;
    }

    &__checkbox {
      background: none;
      border: 1px solid var(--border-secondary);
      border-radius: $rounded-xs;
      cursor: pointer;
      height: 20px;
      margin-right: 0.75rem;
      width: 20px;
      & > svg {
        display: none;
      }
    }

    &__name {
      line-height: 1;
    }

    &__remove {
      display: none;
      color: var(--text);
      cursor: pointer;
      font-size: $font-size--xl;
      margin-left: auto;
      text-decoration: none !important;
      transform: rotate(45deg);

      &:hover {
        color: var(--color-negative);
      }
    }
  }
}
</style>
