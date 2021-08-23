let nextTodoId = 0
export const addTodo = (item) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    ...item
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}