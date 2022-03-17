import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import landingpic from '../images/landing_page.png'
import coverhead from '../images/CoverHead.png'
import GoForward from './GoForward'

const LandingPage = () => {

    return (
        <Container>
            <Container className='text-center border border-danger'>
                <img src={coverhead} alt="" className='img-fluid' width="75%" />
            </Container>
            <Row>

                <Col sm={12} md={6} lg={6} className='align-self-center'>
                    <figure>
                        <blockquote className="blockquote p-3" style={{ textAlign: "justify" }}>
                            <p>तुम्हाला निर्माण करणाऱ्या शक्तिशी जोडले जाईपर्यंत तुम्हाला जीवनाचा अर्थ समजणार नाही.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer text-danger">
                            <cite title="Source Title">H. H. Shree Mataji Nirmaladevi</cite>
                        </figcaption>
                    </figure>
                </Col>

                <Col sm={12} md={6} lg={6} className=''>
                    <img src={landingpic} alt="" className='img-fluid text-center' />
                </Col>
            </Row>

            <Container fluid className='mt-5 py-3 text-center border border-danger'>
                <h2>
                    परमेश्वराच्या सर्वव्यापी शक्तीशी जोडला जाणारा एकमेव सहज व सुलभ मार्ग, <b>सहजयोग</b>.
                </h2>

                <p className='py-3 lead'>
                    जगातील १२० पेक्षा जास्त देशांमध्ये नियमित सहजयोग केला जातो आणि सहजयोग पूर्णतः निःशुल्क आहे.
                </p>

                <GoForward page="/sahajyoga" title="सहजयोगाच्या माहितीसाठी येथे क्लिक करा" />

            </Container>
        </Container>
    )
}

export default LandingPage
