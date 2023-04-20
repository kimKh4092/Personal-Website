import Main from './components/welcomePage';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch, Routes } from 'react-router-dom'
import React, { Component } from 'react';


class APP extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default APP;


