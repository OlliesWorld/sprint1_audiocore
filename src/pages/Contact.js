import React from 'react'
import { graphql, navigate } from 'gatsby'
import { FormiumForm } from '@formium/react'
import NavBar from '../components/navBar'
import  { Box} from "@chakra-ui/react"
import { formium } from '../lib/formium'


export default function FeedbackForm({ data }) {
  return (
      <>
    <NavBar />
    <Box p={8} border="2px" borderColor='#f3df4d' display={{ md: "flex" }} width="400px" ml={[50, 50, 500]}>
    
        <Box mx={20}flexShrink={0}>
          <FormiumForm data={data.formiumForm}
        onSubmit={async (values) => {
        // Send form values to Formium
        await formium.submitForm('sprint2gatsby', values);
        navigate('/thanks');}} />
        </Box>
        </Box>
        </>
  )
}
export const query = graphql`
 query {
    formiumForm(slug: { eq: "sprint2gatsby" }) {
      
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  
  }
`