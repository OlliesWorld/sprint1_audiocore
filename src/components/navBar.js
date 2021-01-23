import React from 'react'
import {Link, Image, Box,  Spacer} from "@chakra-ui/react"



function NavBar() {
    return (
        <Box p={4} display={{ md: "flex" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 20, base: 20 }}
    objectFit="cover" src="https://cdn.pixabay.com/photo/2016/11/19/00/12/wave-1837426_960_720.png" alt="Pixabay GDJ Image" />
    </Box>
    <Spacer />
        <Link href='/' fontSize={{ base: "32px", md: "48px", lg: "60px" }} fontWeight="bold" color="Purple" >AudioCORE</Link>
        <Spacer />
        <Link  href='/about' fontSize={{ base: "24px", md: "40px", lg: "56px" }} color="Purple">About</Link>
        <Spacer />
        <Link href='/locations' fontSize={{ base: "24px", md: "40px", lg: "56px" }} color="Purple">Locations </Link>
        <Spacer />
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ md: 20, base: 0 }}
    objectFit="cover" src="https://cdn.pixabay.com/photo/2016/11/19/00/12/wave-1837426_960_720.png" alt="Pixabay GDJ Image" />
    </Box>
        
        </Box>
    )
}
export default NavBar