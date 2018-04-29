import React, {Component} from 'react';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log('item shouldComponentUpdate');
    console.log((
      nextProps.todo !== this.props.todo ||
      nextProps.todo.editing !== this.props.todo.editing ||
      nextProps.todo.completed !== this.props.todo.completed ||
      nextProps.todo.title !== this.props.todo.title
    ));
    return (
      nextProps.todo !== this.props.todo ||
      nextProps.todo.editing !== this.props.todo.editing ||
      nextProps.todo.completed !== this.props.todo.completed ||
      nextProps.todo.title !== this.props.todo.title
    );
  } 
  handleSubmit(e) {
    let value = e.target.value;
    this.props.onSave(this.props.todo, value);
  }
  onChange(e) {
    console.log(e.target.value)
  }

  handleKeyDown(event) {
    if (event.which === ESCAPE_KEY) {
      this.refs.editField.value = this.props.todo.title;
      this.props.onCancel(event);
    } else if (event.which === ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  render() {
    const styles = (this.props.todo.completed ? 'completed ' : '') + (this.props.todo.editing ? 'editing' : '');
    console.log(styles)
    return (
      <li className={styles}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.todo.completed}
              onChange={this.props.onToggle}
            />
            <label onDoubleClick={this.props.onEdit}>
              {this.props.todo.title}
            </label>
            <button className="destroy" onClick={this.props.onDestroy} />
          </div>
          <input
            ref="editField"
            className="edit"
            value={this.props.todo.title}
            onChange={this.onChange}
            onBlur={this.handleSubmit}
            onKeyDown={this.handleKeyDown}
          />
      </li>
    )
  }
}