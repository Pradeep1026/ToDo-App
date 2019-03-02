import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import ContactUs from './components/pages/contact/ContactUs';
// import uuid from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    todo: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todo: res.data}));
  }

  //Mark Toggle Complete
  markComplete = (id) => {
    this.setState({ todo: this.state.todo.map(currentToDo => {
      if(currentToDo.id === id) {
        currentToDo.completed = !currentToDo.completed
      }
      return currentToDo;
    }) });
}

//Delete Todo list
delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todo: [...this.state.todo.filter(currentToDo => currentToDo.id !== id
      )] }));
}

//Adding todo item
addTodo = title => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
  .then(res => this.setState({todo: [...this.state.todo, res.data]}));
}
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path = "/" render = {props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                <Todo todo = {this.state.todo}
                markComplete = {this.markComplete}
                delTodo = {this.delTodo}
                />
              </React.Fragment>
            )}/>
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {ContactUs} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
