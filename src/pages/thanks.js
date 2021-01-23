import React from 'react'

import NavBar from '../components/navBar'
import  { Box} from "@chakra-ui/react"

export default function ThankYou() {
    return (
        <>
        <NavBar />
        <Box p={8} bg='#f3df4d' mx={50}>
            <div>Thank you! Your response has been recorded.</div>
            </Box>
            </>
    )
  }