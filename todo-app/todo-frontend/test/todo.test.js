import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

test('Todo.jsx exists and has single todo component', () => {
  const todoPath = path.resolve('src/Todos/Todo.jsx');
  assert.ok(fs.existsSync(todoPath), 'Todo.jsx must exist');
  
  const content = fs.readFileSync(todoPath, 'utf8');
  assert.ok(content.includes('Todo'), 'Todo component should be defined');
  assert.ok(content.includes('todo.done'), 'Todo component should inspect done status');
});

test('TodoList imports and uses Todo component', () => {
  const listPath = path.resolve('src/Todos/List.jsx');
  const content = fs.readFileSync(listPath, 'utf8');
  assert.ok(content.includes("import Todo from './Todo'"), 'TodoList should import Todo');
  assert.ok(content.includes('<Todo'), 'TodoList should render Todo component');
});
