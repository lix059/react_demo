import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters, setEditingTodo, delTodo, editTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.get('completed'))
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.get('completed'))
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  shownTodos: getVisibleTodos(state.todos, state.visibilityFilter),
  editing: state.editingTodo
})

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggleTodo(id)),
  edit: id => dispatch(setEditingTodo(id)),
  cancel: () => dispatch(setEditingTodo(null)),
  destroy: id => dispatch(delTodo(id)),
  save: (todo, text) => {
    dispatch(editTodo(todo.get('id'), text));
    dispatch(setEditingTodo(null));
  },
  toggleAll: () => dispatch({type: 'TOGGLE_ALL'})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
