import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AccessKey } from '../Svg';
import './style.css';

const Navbar = () => {
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
        <ul className="buttons">
          <li className="button__item">
            <Link to="login" className="btn__link btn__primary">
              <span>
                <AccessKey fillColor="#fff" />
              </span>
              <span>Login</span>
            </Link>
          </li>
          <li className="button__item">
            <a href="/#" className="btn__link btn__outline">
              <span>
                <AccessKey fillColor="#3D55DF" />
              </span>
              <span>Register</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
