import React, { Component } from 'react';
import 'todomvc-app-css/index.css';
import Footer from './containers/FooterContainer'
import TodoInput from './containers/TodoInputContainer'
import TodoList from './containers/TodoListContainer'

class App extends Component {
  render() {
    return (
        <section className="todoapp">
          <div>
            <TodoInput />
            <TodoList />
            <Footer />
          </div>
        </section>
    );
  }
}

export default App;



