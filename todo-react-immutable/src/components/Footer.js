import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'

export default class Footer extends PureComponent {

  render() {
    console.log('footer render');
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
    console.log(nowShowing);
    return (
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.props.count}</strong> {activeTodoWord} left
          </span>
          <ul className="filters">
            <li>
              <Link to="/" className={nowShowing === '/' ? 'selected' : ''}>
                All
              </Link>
            </li>
            {' '}
            <li>
              <Link to="/active"  className={nowShowing === '/active'  ? 'selected' : ''}>
                    Active
              </Link>
            </li>
            {' '}
            <li>
              <Link to="/complete" className={nowShowing === '/complete' ? 'selected' : ''}>
                    Completed
              </Link>
            </li>
          </ul>
          {clearButton}
        </footer>
    );
  }
}