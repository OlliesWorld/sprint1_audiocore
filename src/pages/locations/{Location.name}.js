import * as React from 'react'
import Nav from '../components/nav'
import {Link, graphql} from 'gatsby'

const pageStyles = {
    backgroundColor: '#f3df4d',
    width: '80%',
    margin: '50px auto',
    padding: '15px 35px',
  }

const locationPage = ({data}) => {
    return(
        <>
        <Nav />
        <main style={pageStyles}>
            <h1>{data.contentfulLocations.name}</h1>
            <p>We are here for the taking!</p>
                
           
        </main>
        </>
    )
}

export const query = graphql`
  query($id: String) {
    contentfulLocations(id: { eq: $id }) {
      slug
      id
      name
    }
  }
`



export default locationPage