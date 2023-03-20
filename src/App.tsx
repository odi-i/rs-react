import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Cards from './Routes/Cards/Cards';
import Layout from './Routes/Layout/Layout';
import ErrorPage from './Routes/ErrorPage/ErrorPage';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Cards />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
