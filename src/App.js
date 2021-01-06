import React from 'react';
import './App.css';
import AppRouter from './config/router'


class App extends React.Component{

  render(){
    return(
      <div>
        <h1 className='App'>ChatApp</h1>
        <AppRouter/>
      </div>
    );
  }

}
export default App;
