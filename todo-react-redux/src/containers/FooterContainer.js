import {connect} from 'react-redux';
import {setVisibilityFilter, ClearCompleted} from '../actions';
import Footer from '../components/Footer';

const getCount = todos => {
  return todos?todos.length : 0;
}
const getCompletedCount = todos => {
  return todos.filter(todo => todo.completed).length;
}

const mapStateToProps = (state, ownProps) => ({
  count: getCount(state.todos),
  completedCount: getCompletedCount(state.todos),
  nowShowing: state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClearCompleted:() => dispatch({type: ClearCompleted.CLEAR_COMPLETED}),
  select: filter => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)