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
const titleStyles = {
  fontSize: 65,
  color: '#f3df4d',
  paddingLeft: 45,
  margin: 0,
}

const listStyles = {
  marginBottom: 5,
  marginTop: 10,
  paddingLeft: 150,
  display: 'flex',
  
  
}

const linkStyles = {
  color: '#f3df4d',
  fontWeight: "bold",
  textTransform: 'Uppercase',
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
     <h1 style={titleStyles}>AudioCORE</h1>
      <div style={listStyles}>
        <img src={Headphones} alt="" style={headStyles} />
        <h2><Link style={linkStyles}  to='/'>Home</Link></h2>
        <h2><Link style={linkStyles} to='/about'>About</Link></h2>
        <h2><Link style={linkStyles} to='/locations'>Locations </Link></h2>
        
        <img src={Headphones} alt="" style={headStyles} />
      </div>
  </nav>
  )

}


export default NavBar