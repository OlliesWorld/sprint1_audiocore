import * as React from 'react'
import Nav from '../components/nav'
import {Link, graphql} from 'gatsby'

const pageStyles = {
    backgroundColor: '#fff',
    width: '80%',
    margin: '50px auto',
    padding: '15px 35px',
  }

  const linkStyles = {
    display: 'inline-block',
    textTransform: 'uppercase',
    listStyleType: 'none',
  }

  const locationStyles = {
    color: '#f3df4d',
    textDecorationColor: '#96999b',
    fontSize: 40,
    padding: 40,

  }

const locationsPage = ({data}) => {
    return(
        <>
      <Nav />
        <main style={pageStyles}>
            <h1>Locations:</h1>
            <ul>
                {data.allContentfulLocations.nodes.map((location) => {
                    return (
                        <li style={linkStyles} id={location.id}>
                            <Link style={locationStyles} to={`/locations/${location.slug}`}>{location.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </main>
       </>
    )
}

export const query = graphql `
    query LocationsPagesQuery {
        allContentfulLocations {
            nodes{
                name
                slug
                id
            }
        }
    }
`


export default locationsPage