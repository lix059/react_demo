import React, { Component } from 'react';
import 'todomvc-app-css/index.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import {getId} from './utils';
import Immutable from 'seamless-immutable'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: Immutable([]),
      editing: null
    }
  }

  addTodo(val) {
    const newTodo = {
      id: getId(),
      title: val,
      completed: false
    }
    this.setState({
      todos: Immutable([...this.state.todos, newTodo])
    });
  }
  toggle(todoToggle) {
    this.setState({
      todos: this.state.todos.map(todo => 
        todo.id === todoToggle.id ? todo.set('completed', !todo.completed) : todo
      )
    })
  }
  destroy(todo) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== todo.id)
    });
  }
  edit(todo) {
    this.setState({
      editing: todo.id
    })
  }
  save(todo, title) {
    this.setState({
      todos: this.state.todos.map(item => item.id === todo.id ? item.set('title', title) :  item),
      editing: null
    })
  }
  cancel() {
    this.setState({
      editing: null
    })
  }
  toggleAll() {
    let activeTodoCount = this.state.todos.reduce(function (accum, todo) {
        return todo.completed ? accum : accum + 1;
      }, 0);
    let val = false;
    if(activeTodoCount > 0) {
      val = true;
    } 
    this.setState({
      todos: this.state.todos.map(todo => todo.completed === val ? todo : todo.set('completed', val))
    })
  }
  onClearCompleted() {
    const newTodos = this.state.todos.filter(item => item.completed === false);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    const shownTodos = this.state.todos.filter(function (todo) {
      switch (this.props.location.pathname) {
        case '/active':
          return !todo.completed;
        case '/complete':
          return todo.completed;
        default:
          return true;
        }
    }, this);
    const activeTodoCount = this.state.todos.reduce(function (accum, todo) {
        return todo.completed ? accum : accum + 1;
      }, 0);

    const completedCount = this.state.todos.length - activeTodoCount;
    return (
        <section className="todoapp">
          <div>
            <TodoInput addTodo={this.addTodo.bind(this)}/>
            <TodoList shownTodos={shownTodos}
                toggle = {this.toggle.bind(this)}
                destroy = {this.destroy.bind(this)}
                edit = {this.edit.bind(this)}
                save = {this.save.bind(this)}
                cancel = {this.cancel.bind(this)}
                toggleAll = {this.toggleAll.bind(this)}
                activeTodoCount = {activeTodoCount}
                editing = {this.state.editing}
            />
            <Footer count={activeTodoCount}
                completedCount={completedCount}
                onClearCompleted={this.onClearCompleted.bind(this)}
                nowShowing={this.props.location.pathname}
            />
          </div>
        </section>
    );
  }
}

export default App;



