import React from 'react'
import { Container } from 'react-bootstrap'

const Error = () => {
  return (
    <Container style={{ minHeight: "68vh" }} className='text-danger d-flex align-items-center justify-content-center'>
          <h1 className=''>404 | Page Not Found.</h1>
    </Container>
  )
}
// style={{minHeight:"29rem"}}
export default Error
