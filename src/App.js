import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home'

export default class App extends React.Component{
  render() {
    return (
      <div>
        <h1>T-shirt Labemoon</h1>
        <Home/>
      </div>
    );
  }
}