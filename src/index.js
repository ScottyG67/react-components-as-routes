import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// components
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'



// /* Add basic styling for NavLinks */
// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// /* add the navbar component */
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       exact /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       style={link} /* add styling to Navlink */
//       activeStyle={{
//         background: 'darkblue' /* add prop for activeStyle */
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink>
//   </div>;

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
); 