import logo from '../../assets/logo.png';
import { AccessKey } from '../Svg';
import './style.css';

const Navbar = () => {
  return  (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <a href="/" className="nav__logo-link">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </a>
        </div>
        <ul className="links">
          <li className="links__item">
            <a href="/" className="links__link">Home</a>
          </li>
          <li className="links__item">
            <a href="/" className="links__link">Services</a>
          </li>
          <li className="links__item">
            <a href="/" className="links__link">About us</a>
          </li>
        </ul>
        <ul className="buttons">
          <li className="button__item">
            <a href="/#" className="btn__link btn__primary">
              <span>
                <AccessKey fillColor="#fff" />
              </span>
              <span>Login</span>
            </a>
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
