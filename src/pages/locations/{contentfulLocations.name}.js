import React from 'react'
import Nav from '../../components/nav'
import {graphql} from 'gatsby'

const pageStyles = {
    backgroundColor: '#f3df4d',
    width: '80%',
    margin: '50px auto',
    padding: '15px 35px',
  }

 const cityStyles = {
   color: '#000'
 }

 export default function Component(props) {
   const {name} = props.data.contentfulLocations
  return (
   
      <>
      <Nav />
          <main style={pageStyles}>
          
            <h1 style={cityStyles}>{name}</h1>
            
        
          <p>It's a place, and we're there!{name}</p>
          </main>
   </>
  );
};

export const query = graphql `
  query($id: String!) {
    contentfulLocations(id: { eq: $id }) {
              name
              slug
      }
  }
`


