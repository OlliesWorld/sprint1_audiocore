import * as React from 'react'
import Nav from '../components/nav'
import {graphql} from 'gatsby'


const containerStyles = {
    backgroundColor: '#f3df4d',
    width: '80%',
    margin: '50px auto',
    padding: '15px 35px',
  }

  const textStyles = {
   color: '#96999b',
   fontSize: '2rem'
  }


  const AboutPage = ({
    data: {
        contentfulAbout: {
            title
        }
    }
}) => {
    return (
            <>
            <Nav />
            <div style={containerStyles}>
        
            <h1 style={textStyles}>{title}</h1>
     
            </div>
            </>
    )
}
export default AboutPage
export const query = graphql`
  query {
    contentfulAbout(title: { eq: "About" }) {
          title
          slug
          
       }
       
    }
`