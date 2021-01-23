import React from 'react'

import {graphql} from 'gatsby'
import NavBar from '../components/navBar'
import  { Box, Text} from "@chakra-ui/react"

  export default function Component(props) {
    const {title} = props.data.contentfulAbout
    const {description} = props.data.contentfulAboutDescriptionTextNode
    return (
            <>
            <NavBar />
            <Box p={8} bg='#f3df4d' mx={50}>
      
      <Text fontSize="3xl" color="Purple">{title}</Text>
            <p>{description}</p>
            </Box>
            </>
    )
}

export const query = graphql`
  query {
    contentfulAbout(title: { eq: "About" }) {
          title
          slug
          
       }
       contentfulAboutDescriptionTextNode {
    description
  }
       
    }
`