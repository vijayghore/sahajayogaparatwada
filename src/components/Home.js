import React from 'react'
import { Container } from 'react-bootstrap'
import Benefits from './Benefits'
import CarouselHome from './CarouselHome'
import WhatItIs from './WhatItIs'

const Home = () => {

    return (
        <Container className='my-3'>
            <CarouselHome />
            <hr className='text-danger w-2' />
            <WhatItIs />
            <hr className='text-danger w-2' />
            <Benefits />
        </Container>
    )
}

export default Home
