import React from 'react'
import  { Box, Text} from "@chakra-ui/react"
import {graphql} from 'gatsby'
import NavBar from '../../components/navBar'


 export default function Component(props) {
   const {name} = props.data.contentfulLocations
   const {description} = props.data.contentfulLocationsDescriptionTextNode
  return (
   
      <>
      <NavBar />
         
      <Box p={8} bg='#f3df4d' mx={50}>
      
      <Text fontSize="3xl" color="Purple">{name}</
      Text>
 
          <p>{description}</p>
          </Box>
   </>
  );
};

export const query = graphql `
  query($id: String!) {
    contentfulLocations(id: { eq: $id })
       {
          name
          slug
          id
       }
       contentfulLocationsDescriptionTextNode {
    description
  }
  }
`


