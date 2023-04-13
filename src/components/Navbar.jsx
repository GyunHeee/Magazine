import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login, Logout, refreshLogin } from '../api/firebase';
import { FaBars } from 'react-icons/fa';
import User from './User';
import styles from './Navbar.module.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    Login().then(setUser);
  };
  const handleLogout = () => {
    Logout().then(setUser);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    refreshLogin(setUser);
  }, []);

  return (
    <header className="flex justify-between items-center p-2 bg-zinc-900 text-gray-50 fixed w-full z-50">
      <h1
        onClick={() => navigate('/')}
        className="text-3xl font-bold m-2 mx-4 font cursor-pointer"
      >
        Dailymag
      </h1>
      <div>
        <div className={styles.nav__menu}>
          <p
            onClick={() => navigate('/category/fashion')}
            className={open ? styles['nav__item--open'] : styles.nav__item}
          >
            Fashion
          </p>
          <p
            onClick={() => navigate('/category/life')}
            className={open ? styles['nav__item--open'] : styles.nav__item}
          >
            Event
          </p>
          <p
            onClick={() => navigate('/category/interior')}
            className={open ? styles['nav__item--open'] : styles.nav__item}
          >
            Interior
          </p>
          <p
            className={open ? styles['nav__item--open'] : styles.nav__item}
            onClick={() => navigate('/about')}
          >
            About us
          </p>
        </div>
      </div>
      <div className="flex items-center">
        {user && (
          <button
            onClick={() => navigate('/new')}
            className={open ? styles['nav__item--open'] : styles.nav__item}
          >
            <User user={user} />
          </button>
        )}
        {!user && (
          <p
            className={open ? styles['nav__item--open'] : styles.nav__item}
            onClick={handleLogin}
          >
            Login
          </p>
        )}
        {user && (
          <p
            className={open ? styles['nav__item--open'] : styles.nav__item}
            onClick={handleLogout}
          >
            Logout
          </p>
        )}
        <button className="block md:hidden" onClick={handleClick}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
