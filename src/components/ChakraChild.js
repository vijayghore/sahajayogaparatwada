import React from 'react'
import { Col, Row, Table } from 'react-bootstrap';

const ChakraChild = (props) => {

  return (
    <>
      <h1 className='text-center fw-bold'>{props.title}</h1>
      <Row>
        <Col lg={7} className='order-last order-lg-first'>

          <Table className='fs-5' hover striped>
            <tbody>
              <tr>
                <td className='fw-bold'>देवता</td>
                <td>{props.desc[0]}</td>
              </tr>

              <tr>
                <td className='fw-bold'>स्थान</td>
                <td>{props.desc[1]}</td>
              </tr>

              <tr>
                <td className='fw-bold'>हातावरील स्थान</td>
                <td>{props.desc[2]}</td>
              </tr>

              <tr>
                <td className='fw-bold'>कार्य</td>
                <td>{props.desc[3]}</td>
              </tr>
              <tr>
                <td className='fw-bold'>गुण</td>
                <td>{props.desc[4]}</td>
              </tr>
              <tr>
                <td className='fw-bold'>पाकळ्या</td>
                <td>{props.desc[5]}</td>
              </tr>
              <tr>
                <td className='fw-bold'>दिवस</td>
                <td>{props.desc[6]}</td>
              </tr>
              <tr>
                <td className='fw-bold'>रंग</td>
                <td>{props.desc[7]}</td>
              </tr>
              <tr>
                <td className='fw-bold'>ग्रह</td>
                <td>{props.desc[8]}</td>
              </tr>
              <tr>
                <td className='fw-bold'>तत्त्व</td>
                <td>{props.desc[9]}</td>
              </tr>
              <tr>
                <td className='fw-bold'>चक्रातील दोषांची कारणे</td>
                <td>{props.desc[10]}</td>
              </tr>

              <tr>
                <td className='fw-bold'>दोष निवारणाचे उपाय</td>
                <td>{props.desc[11]}</td>
              </tr>

            </tbody>
          </Table>
          
        </Col>

        <Col lg={5} className='order-first order-lg-last text-center my-3'>
          <img src={props.img} alt={props.title} />
        </Col>
      </Row>

    </>
  )
}

export default ChakraChild