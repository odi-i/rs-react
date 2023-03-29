import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Cards from './Routes/Cards/Cards';
import Layout from './Routes/Layout/Layout';
import AboutUs from './Routes/AboutUs/AboutUs';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import { generateCards } from './utils/generateCards';
import Forms from './Routes/Forms/Forms';

class App extends Component {
  cards = generateCards(20);

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Cards {...this.cards} />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="forms" element={<Forms />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
