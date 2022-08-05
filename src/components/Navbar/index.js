import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AccessKey } from '../Svg';
import './style.css';
import { AuthContext } from '../../context/Auth';


const Navbar = () => {
  const { user, onUpdateUser } = React.useContext(AuthContext);
  return  (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/" className="nav__logo-link">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </Link>
        </div>
        <ul className="links">
          <li className="links__item">
            <Link to="/" className="links__link">Home</Link>
          </li>
          <li className="links__item">
            <Link to="/#" className="links__link">Services</Link>
          </li>
          <li className="links__item">
            <Link to="/#" className="links__link">About us</Link>
          </li>
        </ul>
        {user && (
          <ul className="buttons">
            <li className="button__item">
              <button className="btn__link btn__primary" onClick={async () => {
                await signOut(auth);
                onUpdateUser(null);
              }}>
                <span>Log out</span>
              </button>
            </li>
          </ul>
        )}
        {!user && (
          <ul className="buttons">
            <li className="button__item">
              <Link to="/auth/login" className="btn__link btn__primary">
                <span>
                  <AccessKey fillColor="#fff" />
                </span>
                <span>Login</span>
              </Link>
            </li>
            <li className="button__item">
              <a href="/auth/register" className="btn__link btn__outline">
                <span>
                  <AccessKey fillColor="#3D55DF" />
                </span>
                <span>Register</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
