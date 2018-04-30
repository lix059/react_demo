import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const todoItems = this.props.shownTodos.map(function (todo) {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => this.props.toggle(todo.id)}
          onDestroy={() => this.props.destroy(todo.id)}
          onEdit={() => this.props.edit(todo.id)}
          editing={this.props.editing === todo.id}
          onSave={this.props.save}
          onCancel={this.props.cancel}
        />
      );
    }, this);
    if(this.props.shownTodos.length > 0) {
      return (
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
          />
          <label onClick={this.props.toggleAll}></label>
          <ul className="todo-list">
            {todoItems}
          </ul>
        </section>
      );
    } else {
      return null
    }
  }
}