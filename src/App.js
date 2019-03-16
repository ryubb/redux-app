import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToDo, removeToDo } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li key={todo}>
                <span>{todo}</span>
                <button onClick={() => this.props.onRemoveToDo(todo)}>削除</button>
              </li>
            )
          })}
        </ul>
        <input type="text" onChange={e => this.setState({input: e.target.value})} />
        <button onClick={() => this.props.onAddToDo(this.state.input)}>
          追加
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToDo(todo) {
      dispatch(addToDo(todo))
    },
    onRemoveToDo(todo) {
      dispatch(removeToDo(todo))
    }
  }
};

// これを記述することで、this.props.dispatchが使える？
const mapStateToProps = state => {
  return {
    todos: state.todos.list
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
