import React from 'react'

import {graphql} from 'gatsby'
import NavBar from '../components/navBar'
import  { Box, Link, Text } from "@chakra-ui/react"


const locationsPage = ({data}) => {
    return(
        <>
      <NavBar />
        <main >
        <Box p={8} bg='#f3df4d' mx={50}>
     
            <Text fontSize="3xl" color="Purple">Locations:</Text>
            <ul>
                {data.allContentfulLocations.nodes.map((location) => {
                    return (
                        <Box p={4} display={{ md: "flex" }}>
                            
                        
                                <Link key={location.id} href={`/locations/${location.slug}`}fontSize={{ base: "20px", md: "48px", lg: "60px" }}  bg="Purple" p={5} mx={50} borderRadius={{base: "0.25rem"}} boxShadow="dark-lg"  > {location.name}</Link>
                        
                           
                        </Box>
                    )
                })}
            </ul>
            
            </Box>
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