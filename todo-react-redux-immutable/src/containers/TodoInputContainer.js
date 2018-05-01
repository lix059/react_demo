import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import TodoInput from '../components/TodoInput';
const ENTER_KEY = 13;
const inputElement = React.createRef();
const mapStateToProps = state => ({
  inputRef: inputElement
})
const mapDispatchToProps = (dispatch) => ({
  handleNewTodoKeyDown: (event) => {
    let newTodo = event.target.value;
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    let val = newTodo.trim();
    if (val) {
      dispatch(addTodo(val));
      inputElement.current.value = '';
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput)