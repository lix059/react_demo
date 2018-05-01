import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import editingTodo from './editing'

export default combineReducers({
  todos,
  visibilityFilter,
  editingTodo
})
