import React from 'react'
import {NavLink} from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

const Navbar = () =>
    <div>
        <NavLink
            to="/"
            exact /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            style={link} /* add styling to Navlink */
            activeStyle={{
            background: 'darkblue' /* add prop for activeStyle */
            }}
        >Home</NavLink>
        <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
            background: 'darkblue'
            }}
        >About</NavLink>
        <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
            background: 'darkblue'
            }}
        >Login</NavLink>
    </div>;

export default Navbar