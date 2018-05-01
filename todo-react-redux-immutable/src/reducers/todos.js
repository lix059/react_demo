import {List, Map} from 'immutable';

const todos = (state = List([]), action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(Map({
          id: action.id,
          title: action.text,
          completed: false
        }))
    case 'DEL_TODO':
      return state.filter(todo => todo.get('id') !== action.id)
    case 'EDIT_TODO':
      return state.map(todo => (todo.get('id') === action.id)? todo.set('title', action.text): todo)
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.get('id') === action.id)
          ? todo.set('completed', !todo.get('completed'))
          : todo
      )
    case 'TOGGLE_ALL':
      let tmp = state.filter(todo => !todo.get('completed'));
      console.log(tmp)
      if(tmp.size > 0) {
        return state.map(todo => todo.get('completed')?todo: todo.set('completed',true))
      } else {
        return state.map(todo => todo.set('completed',false))
      }
    case  'CLEAR_COMPLETED':
      return state.filter(todo => !todo.get('completed'))
    default:
      return state
  }
}

export default todos
