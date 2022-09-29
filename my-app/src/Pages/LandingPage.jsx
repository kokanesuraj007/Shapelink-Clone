import React from 'react'
import { Container, Grid,GridItem } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const LandingPage = () => {
    return (
        <Container>
            <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                <GridItem
                />
                <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
            </Grid>

        </Container>
    )
}

export default LandingPage