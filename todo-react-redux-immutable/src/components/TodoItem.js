import React, {Component} from 'react';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

export default class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }
 componentWillReceiveProps(nextProps) {
  console.log('componentWillReceiveProps', nextProps);
    if(nextProps.todo.get('title') !== this.state.title) {
      this.setState({
        title: nextProps.todo.get('title')
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.todo !== this.props.todo ||
      nextProps.editing !== this.props.editing ||
      nextState.title !== this.state.title
    );
  } 
  handleSubmit(e) {
    let value = e.target.value;
    let todo = this.props.todo;
    this.props.onSave(todo, value);
  }
  onChange(e) {
    console.log(e.target.value)
    this.setState({
      title: e.target.value
    });
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
    const styles = (this.props.todo.get('completed') ? 'completed ' : '') + (this.props.editing ? 'editing' : '');
    console.log(styles)
    return (
      <li className={styles}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.todo.get('completed')}
              onChange={this.props.onToggle}
            />
            <label onDoubleClick={this.props.onEdit}>
              {this.props.todo.get('title')}
            </label>
            <button className="destroy" onClick={this.props.onDestroy} />
          </div>
          <input
            ref="editField"
            className="edit"
            value={this.state.title}
            onChange={this.onChange.bind(this)}
            onBlur={this.handleSubmit.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
          />
      </li>
    )
  }
}