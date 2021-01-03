import * as React from 'react'
import Nav from '../components/nav'
import {graphql} from 'gatsby'

const pageStyles = {
    backgroundColor: '#f3df4d',
    width: '80%',
    margin: '50px auto',
    padding: '15px 35px',
  }

 const cityStyles = {
   color: '#000',
 }
const locationPage = ({data}) => {
  return(
      <>
      <Nav />
      <div style={pageStyles}>
           <h2 style={cityStyles}>{data.contentfulLocations.name}</h2>
           </div>        
      </>
  )
}

export const query = graphql `
  query($id: String!) {
    contentfulLocations(id: { eq: $id }) {
              name
      }
  }
`


export default locationPage