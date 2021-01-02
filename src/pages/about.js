import React from 'react'
import Nav from '../components/nav'


const containerStyles = {
    backgroundColor: '#f3df4d',
    width: '80%',
    margin: '50px auto',
    padding: '15px 35px',
  }

  const textStyles = {
   color: '#96999b',
   fontSize: '2rem'
  }


const AboutPage = () => {
    return (
<>
<Nav />
<div style={containerStyles}>
<h1 style={textStyles}>About</h1>
<p style={textStyles}>As you know, AudioC0RE is the leading headphones sharing app in the world! (And by “leading” I mean we’re the only one. And by “world”, I mean 3 cities in California.)</p>

<p style={textStyles}>Our users love us because with AudioC0RE you can pick up a pair of premium AudioC0RE headphones on a city street, pay for a rental through our app, then drop them back on the ground when you’re finished!</p>
</div>
</>
    )
}

export default AboutPage