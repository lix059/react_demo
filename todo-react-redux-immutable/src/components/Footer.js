import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { VisibilityFilters } from '../actions'

export default class Footer extends Component {
  render() {
    const {count, completedCount, onClearCompleted, nowShowing, select} = this.props;
    const activeTodoWord = count > 1 ? 'items' : 'item';
    let clearButton = null;
    if (completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={onClearCompleted}>
          Clear completed
        </button>
      );
    }
    return (
        <footer className="footer">
          <span className="todo-count">
            <strong>{count}</strong> {activeTodoWord} left
          </span>
          <ul className="filters">
            <li>
              <a onClick={() => select(VisibilityFilters.SHOW_ALL)} className={nowShowing === VisibilityFilters.SHOW_ALL ? 'selected' : ''}>
                All
              </a>
            </li>
            {' '}
            <li>
              <a onClick={() => select(VisibilityFilters.SHOW_ACTIVE)} 
               className={nowShowing === VisibilityFilters.SHOW_ACTIVE  ? 'selected' : ''}>
                    Active
              </a>
            </li>
            {' '}
            <li>
              <a onClick={() => select(VisibilityFilters.SHOW_COMPLETED)}  className={nowShowing === VisibilityFilters.SHOW_COMPLETED ? 'selected' : ''}>
                    Completed
              </a>
            </li>
          </ul>
          {clearButton}
        </footer>
    );
  }
}