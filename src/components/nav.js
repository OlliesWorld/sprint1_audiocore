import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
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
  paddingLeft: 10,
  margin: 0,
}

const listStyles = {
  marginBottom: 5,
  marginTop: 0,
  paddingLeft: 380,

}

const linkStyle = {
  color: '#f3df4d',
  fontWeight: "bold",
  verticalAlign: "5%",
  paddingLeft: 40,
  fontSize: 40,
}
const headStyles = {
  color: '#f3df4d',
  width: 50,
  height: 50,
  paddingLeft: 25,
}
const Header = ({ siteTitle }) => (
  <header>
     <nav style={navStyles}>
      <h1 style={titleStyles}>{siteTitle}</h1>
      <img src={Headphones} alt="GoodWare Headphones" style={headStyles} />
        <div style={listStyles}>
      <Link to='/' style={linkStyle}>
      Home
      </Link>
      <Link to='/about' style={linkStyle}>
      About Us
      </Link>
      <Link to='/locations' style={linkStyle}>
      Locations
      </Link>
      
      </div>
      <img src={Headphones} alt="GoodWare Headphones" style={headStyles} />
      </nav>

    
  </header>
);

const Nav = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site: site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {console.log(data)}
        
      </>
    )}
  />
);

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;