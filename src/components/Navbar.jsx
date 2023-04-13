import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login, Logout, refreshLogin } from '../api/firebase';
import { BsFillPencilFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import User from './User';

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLogin = () => {
    Login().then(setUser);
  };
  const handleLogout = () => {
    Logout().then(setUser);
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
      <div className="flex p-2 font-semibold ">
        <p
          onClick={() => navigate('/category/fashion')}
          className="m-3 cursor-pointer hover:opacity-30 duration-300"
        >
          Fashion
        </p>
        <p
          onClick={() => navigate('/category/life')}
          className="m-3 cursor-pointer hover:opacity-30 duration-300"
        >
          Event
        </p>
        <p
          onClick={() => navigate('/category/interior')}
          className="m-3 cursor-pointer hover:opacity-30 duration-300"
        >
          Interior
        </p>
      </div>
      <div className="flex items-center">
        {user && (
          <BsFillPencilFill
            className="text-xl mr-4 cursor-pointer"
            onClick={() => navigate('/new')}
          />
        )}
        {user && <User user={user} />}
        {!user && (
          <p
            className="p-2 sm-3 mr-5 cursor-pointer font-semibold hover:opacity-30 duration-300"
            onClick={handleLogin}
          >
            Login
          </p>
        )}
        {user && (
          <p
            className="p-2 sm-3 mr-5 cursor-pointer font-semibold hover:opacity-30 duration-300"
            onClick={handleLogout}
          >
            Logout
          </p>
        )}
        <p
          className="p-2 sm-3 mr-5 cursor-pointer font-semibold hover:opacity-30 duration-300"
          onClick={() => navigate('/about')}
        >
          About us
        </p>
        <button className="block md:hidden">
          <FaBars />
        </button>
      </div>
    </header>
  );
}
