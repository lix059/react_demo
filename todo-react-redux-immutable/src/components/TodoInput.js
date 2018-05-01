import React, {Component} from 'react';

export default class TodoInput extends Component {
  render() {
    const {handleNewTodoKeyDown, inputRef} = this.props;
    let input;
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyDown={(e) => handleNewTodoKeyDown(e)}
          autoFocus={true}
          ref={inputRef}
        />
      </header>
    );
  }
}