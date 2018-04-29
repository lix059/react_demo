import React, { Component } from 'react';
import 'todomvc-app-css/index.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import {getId} from './utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      nowShowing: 'ALL_TODOS',
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
      todos: [...this.state.todos, newTodo]
    });
  }
  toggle(todo) {
    console.log('toggle')
    let arr = [];
    for(let i=0; i<this.state.todos.length; i++) {
      if(this.state.todos[i].id !== todo.id) {
        arr.push(this.state.todos[i])
      } else {
        arr.push({
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        });
      }
    }
    this.setState({
      todos: arr
    })
  }
  destroy(todo) {
    const newTodos = this.state.todos.filter(item => item.id !== todo.id);
    this.setState({
      todos: newTodos
    });
  }
  edit(todo) {
    this.setState({
      editing: todo.id
    })
  }
  save(todo, title) {
    let arr = [];
    for(let i=0; i<this.state.todos.length; i++) {
      if(this.state.todos[i].id !== todo.id) {
        arr.push(this.state.todos[i])
      } else {
        todo.title = title;
        arr.push({
          id: todo.id,
          title: title,
          completed: todo.completed
        });
      }
    }
    this.setState({
      todos: arr,
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
    let arr = [];
    for(let i=0; i<this.state.todos.length; i++) {
      this.state.todos[i].completed = val;
      arr.push({
        id: this.state.todos[i].id,
        title: this.state.todos[i].title,
        completed: val
      })
    }
    this.setState({
      todos: arr
    })
  }
  selectShow(val) {
    this.setState({
      nowShowing: val
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
      switch (this.state.nowShowing) {
        case 'ACTIVE_TODOS':
          return !todo.completed;
        case 'COMPLETED_TODOS':
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
            nowShowing={this.state.nowShowing}
            selectShow={this.selectShow.bind(this)}
        />
      </div>
      </section>
    );
  }
}

export default App;



