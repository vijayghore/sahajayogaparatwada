import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GoForward = (props) => {
    return (
        <Container className='text-center my-4'>
            <Link className="btn btn-outline-danger" to={props.page} onClick={() => window.scrollTo(0, 0)}> {props.title} <i className="fa-solid fa-circle-right"></i></Link>
        </Container>
    )
}

export default GoForward
