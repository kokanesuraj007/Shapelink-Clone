import React from 'react'
import { Container,Box, Image,Button, Flex, Heading, Spacer } from "@chakra-ui/react"

const Navbar = () => {


  return (
    <Container>
      <Box size="sm">
        <Image 
        src="https://www.shapelink.com/images/startpage.jpg" 
        alt="Segun Adebayo"
        size="50px"
        width="100%"
         zIndex="1"
        
         objectFit="cover"
         background=" #000 " 
        //  no-repeat= "center center"
          background-size= "cover"
          background-attachment= "fixed"
          padding= "75px 0px 50px "
            // z-index: 1;
        />
        <Flex className='fx' py="0.5" my={-1180} padding="50px" bg="null" >
        <Heading>
        <Image src='https://kcdn.twiikapp.com/images/logo.png' height="40px" paddingLeft="-100px"/>
        
        </Heading>
        <Spacer />
        <Button  mx={25} border="none" bg="">Get the app</Button>
        <Button  mx={25} border="none" bg="">Contact</Button>
        <Button  mx={25} border="none" bg="">LOGIN</Button>
        <Button  mx={25} border="none" bg="">Create account</Button>
      </Flex>
      </Box>


    </Container>



    
  )
}

export default Navbar