import Main from './components/welcomePage';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import React, { Component } from 'react';
import NotFound from './components/notFound';


class APP extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<Navigate to='/not-found' />} />
          <Route path='/not-found' element={<NotFound />} />
        </Routes>


      </BrowserRouter>

    );
  }
}

export default APP;


