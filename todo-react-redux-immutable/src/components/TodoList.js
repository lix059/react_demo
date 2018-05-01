import React, {Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    console.log(this.props.shownTodos)
    const todoItems = this.props.shownTodos.map(function (todo) {
      console.log(todo.get('id'))
      return (
        <TodoItem
          key={todo.get('id')}
          todo={todo}
          onToggle={() => this.props.toggle(todo.get('id'))}
          onDestroy={() => this.props.destroy(todo.get('id'))}
          onEdit={() => this.props.edit(todo.get('id'))}
          editing={this.props.editing === todo.get('id')}
          onSave={this.props.save}
          onCancel={this.props.cancel}
        />
      );
    }, this);
    console.log(todoItems)
    if(this.props.shownTodos.size > 0) {
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