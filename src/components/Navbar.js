import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar({ title = "dhruvrana", about = "clickme", mode, toggleMode, toggletext, myStyle, toggleabout }) {
  // THIS IS THE LATEST WAY OF INTRODUCING PROPS AND DEFAULT PROPS
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <Link className="navbar-brand" to="#">{title}</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="visually-hidden">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{about}</Link>
          </li>
        </ul>

        <div className={`form-check form-switch text-${toggletext} ms-3 me-2`}>
          <input className="form-check-input" type="checkbox" role="switch" onClick={() => {
            toggleMode();
            toggleabout();

          }} id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};


Navbar.defaultProps = {
  title: 'dhruv',
  about: 'clickme'
};