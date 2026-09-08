import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Todo from './Todo'

describe('Todo component', () => {
  it('renders pending todo correctly', () => {
    const todo = {
      text: 'Learn container orchestration',
      done: false
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={() => {}}
        completeTodo={() => {}}
      />
    )

    expect(screen.getByText('Learn container orchestration')).toBeDefined()
    expect(screen.getByText('This todo is not done')).toBeDefined()
    expect(screen.getByText('Set as done')).toBeDefined()
  })

  it('renders completed todo correctly', () => {
    const todo = {
      text: 'Complete all Docker exercises',
      done: true
    }

    render(
      <Todo
        todo={todo}
        deleteTodo={() => {}}
        completeTodo={() => {}}
      />
    )

    expect(screen.getByText('Complete all Docker exercises')).toBeDefined()
    expect(screen.getByText('This todo is done')).toBeDefined()
  })
})
