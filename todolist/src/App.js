import React from 'react';
import './App.css';
import Todo from './TodoComponent';


export default class App extends React.Component{

  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="App">
      <header className="App-header"> 
          <Todo />
      </header>
    </div>
    )
  }
}





