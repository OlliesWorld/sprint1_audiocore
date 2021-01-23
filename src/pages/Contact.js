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
    <Box p={8} bg='#f3df4d' mx={50}>
        <FormiumForm data={data.formiumForm} 
        onSubmit={async (values) => {
            // Send form values to Formium
            await formium.submitForm('sprint2gatsby', values);
            navigate('/thank-you');}}/>
        </Box>
        </>
  )
}
export const query = graphql`
 query {
  
    formiumForm(slug: { eq: "sprint2gatsby" }) {
      id
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