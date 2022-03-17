import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

const Contact = () => {

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   let email = document.getElementById('email').value;
  //   let mobNo = document.getElementById('mobNo').value;
  //   let desc = document.getElementById('desc').value;

  //   console.log("The button is clicked");
  //   console.log(email, mobNo, desc)
  // }
  return (
    <Container>
        <h1 className='text-center text-danger fw-bold'>आमच्याशी संपर्क साधा</h1>
        <hr className='text-danger'/>

      {/* <Container className='col-lg-6 col-md-9 col-sm-12 p-3 border border-danger'>

        {/* <Form onSubmit={handleSubmitForm}> */}

        {/* <Form>
          <Form.Group className="mb-3 text-danger" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="mobNo">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" max="10" placeholder="Enter mobile" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Description..." />
          </Form.Group>

          <div className="d-grid">
            <Button variant='danger' type='submit' className="text-center">Submit</Button>
          </div>

        </Form>
      </Container> */}

      <Container>
        {/* <hr className='text-danger' /> */}

        <Row className='text-center pb-2'>
          <Col sm={12} md={6} lg={6} className='py-2'>
            <Card border='danger' className='text-center'>
              <Card.Header><Card.Title className='text-danger'>Contact us</Card.Title></Card.Header>
              <Card.Body>
                <Card.Text className='lead'>
                  Toll Free: <b> 1800 30 700 800 </b> <br />
                  Email: <b>syparatwada@gmail.com</b><br />
                  Join Us on Social Media <br />
                  <b>Instagram Facebook and Twitter</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={6} lg={6} className='py-2'>
            <Card border='danger' className='text-center'>
              <Card.Header><Card.Title className='text-danger'>Our Address</Card.Title></Card.Header>
              <Card.Body>
                <Card.Text className='lead'>
                  Near Hotel Kailash<br />
                  In front of Fatima High School, <br />
                  Paratwada, Achalpur, Amravati <br />
                  Maharashtra - 444805
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Card className='text-center' border='danger'>
          <Card.Header><Card.Title className='text-danger'>Find us on Map</Card.Title></Card.Header>
          <Card.Body>
            <Card.Text>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.9357758641476!2d77.52476418305086!3d21.267770126945585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6f30cfef6e545%3A0xc46a6fce3e790cf!2s65%2C%20MH%20MSH%206%2C%20Vidarbha%20Housing%20Board%20Colony%2C%20Paratwada%2C%20Maharashtra%20444806!5e1!3m2!1sen!2sin!4v1647279959691!5m2!1sen!2sin" style={{ 'width': '100%', 'height': '320px' }} allowFullScreen loading="lazy" className='embed-responsive-item' title='locationMap'></iframe>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  )
}

export default Contact
