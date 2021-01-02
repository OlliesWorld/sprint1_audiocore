import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';

const navStyles = {
  backgroundColor: '#f3df4d',
  width: '100%',
  margin: '10 auto',
  padding: '5px 15px',
}
const listStyles = {
  marginBottom: 56,
  paddingLeft: 80,
  backgroundColor: '#f3df4d',
}


const linkStyle = {
  color: '#96999b',
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
  paddingLeft: 50,
  fontSize: 50,
}

const Header = ({ siteTitle }) => (
  <header>
    
      <title>{siteTitle}</title>
      <nav style={navStyles}>
        <ul style={listStyles}>
      <Link to='/' style={linkStyle}>
      Home
      </Link>
      <Link to='/about' style={linkStyle}>
      About Us
      </Link>
      <Link to='/locations' style={linkStyle}>
      Locations
      </Link>
      </ul>
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