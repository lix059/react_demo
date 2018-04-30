
const editingTodo = (state = null, action) => {
  switch (action.type) {
    case 'SET_EDITING_TODO':
      return action.id
    default:
      return state
  }
}

export default editingTodo
