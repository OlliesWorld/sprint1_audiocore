import * as React from 'react';

import {  Link } from 'gatsby';
import Headphones from '../images/headphones.png'

const navStyles = {
  backgroundColor: '#96999b',
  width: '100%',
  margin: '0',
  padding: '5px 0px',
  display: 'flex',
}
// const titleStyles = {
//   fontSize: 65,
//   color: '#f3df4d',
//   paddingLeft: 15,
//   margin: 0,
// }

const listStyles = {
  marginBottom: 5,
  marginTop: 10,
  paddingLeft: 400,
  display: 'flex',
  textDecoratin: 'none',
}

const linkStyles = {
  color: '#f3df4d',
  fontWeight: "bold",
  listStyleType: 'none',
  
  paddingLeft: 40,
  fontSize: 30,
}
const headStyles = {
  width: 70,
  height: 70,
  paddingLeft: 25,
}


const NavBar = () => {
  return (
  <nav style={navStyles}>
     
      <ul style={listStyles}>
      <img src={Headphones} alt="" style={headStyles} />
          <li><Link style={linkStyles}  to='/'>Home</Link></li>
          <li><Link style={linkStyles} to='/about'>About</Link></li>
          <li><Link style={linkStyles} to='/locations'>Locations </Link></li>
        
      <img src={Headphones} alt="" style={headStyles} />
      </ul>
  </nav>
  )

}


export default NavBar