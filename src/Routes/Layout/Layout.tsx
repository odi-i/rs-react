import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import car from '../../assets/images/sportcar.jpeg';

export default class Layout extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <header>
          <div className={styles.menu}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.menu__link)}
              to={'/'}
            >
              Cards
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.menu__link)}
              to={'/forms'}
            >
              Forms
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.menu__link)}
              to={'/about'}
            >
              About us
            </NavLink>
          </div>
          <img src={car} />
        </header>
        <Outlet />
      </div>
    );
  }
}
