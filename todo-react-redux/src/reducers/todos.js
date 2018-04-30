const todos = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.text,
          completed: false
        }
      ]
    case 'DEL_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'EDIT_TODO':
      return state.map(todo => (todo.id === action.id)?{...todo, title:action.text}: todo)
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'TOGGLE_ALL':
      let tmp = state.filter(todo => !todo.completed);
      console.log(tmp)
      if(tmp.length > 0) {
        return state.map(todo => todo.completed?todo: {...todo, completed:true})
      } else {
        return state.map(todo => ({...todo, completed:false}))
      }
    case  'CLEAR_COMPLETED':
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

export default todos
