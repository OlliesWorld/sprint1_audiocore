import * as React from 'react'
import Nav from '../components/nav'
// import {Link} from 'gatsby'

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
            <h1>Locations:</h1>
            {/* <ul>
                {data.allContentfulLocation.nodes.map((Locations) => {
                    return (
                        <li id={location.id}>
                            <Link to={`/locations/${location.slug}`}>{location.name}</Link>
                        </li>
                    )
                })}
            </ul> */}
        </main>
        </>
    )
}

// export const query = graphql `
//     query LocationPagesQuery {
//         allContentfulLocation {
//             nodes {
//                 name
//                 slug
//                 id
//             }
//         }
//     }
// `


export default locationPage