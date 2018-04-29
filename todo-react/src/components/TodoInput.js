import React, {Component} from 'react';
const ENTER_KEY = 13;

export default class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleChange(event) {
    this.setState({newTodo: event.target.value});
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    let val = this.state.newTodo.trim();
    if (val) {
      this.props.addTodo(val);
      this.setState({newTodo: ''});
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.newTodo}
          onKeyDown={this.handleNewTodoKeyDown.bind(this)}
          onChange={this.handleChange.bind(this)}
          autoFocus={true}
        />
      </header>
    );
  }
}