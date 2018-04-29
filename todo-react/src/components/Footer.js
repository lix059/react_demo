import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    const activeTodoWord = this.props.count > 1 ? 'items' : 'item';
    let clearButton = null;
    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}>
          Clear completed
        </button>
      );
    }
    const nowShowing = this.props.nowShowing;
    return (
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.props.count}</strong> {activeTodoWord} left
          </span>
          <ul className="filters">
            <li>
              <a
                onClick = {() =>  this.props.selectShow('ALL_TODOS')}
                className={nowShowing === 'ALL_TODOS' ? 'selected' : ''}>
                  All
              </a>
            </li>
            {' '}
            <li>
              <a
                onClick = {() => this.props.selectShow('ACTIVE_TODOS')}
                className={nowShowing === 'ACTIVE_TODOS'  ? 'selected' : ''}>
                  Active
              </a>
            </li>
            {' '}
            <li>
              <a
                onClick = {() => this.props.selectShow('COMPLETED_TODOS')}
                className={nowShowing === 'COMPLETED_TODOS' ? 'selected' : ''}>
                  Completed
              </a>
            </li>
          </ul>
          {clearButton}
        </footer>
    );
  }
}