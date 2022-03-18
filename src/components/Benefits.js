import React from 'react'
import { Container } from 'react-bootstrap'
import benefits from '../images/Benefits_Of_Sahajyoga.jpg'
import GoForward from './GoForward'

const Benefits = () => {
    
    return (
        <Container>
            <img src={benefits} alt="" className='img-fluid border border-danger' />
            <h1 className='text-danger my-3 fw-bold'>नियमित सहजयोगाचे फायदे :-</h1>

            <Container fluid className="lead" style={{textAlign: "justify"}}>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> मानसिक तनाव कमी प्रमाणात जाणवतो.
                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> संतुलन व मनःशांति यांचा लाभ होतो.
                </p>

                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> व्यक्तिगत नतेसंबंधात सुधारणा.

                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> शारीरिक आरोग्यत सुधारणा.

                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> व्यसन व इतर अयोग्य सवयी यांच्यातून मुक्तता.

                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> कृषी क्षेत्रात चैतन्य-लहरी वाटे प्रगती.

                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> मन अणि चित्ताची एकाग्रता झाल्याने अभ्यासात प्रगती.

                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> स्मृति व आकलन शक्ति यांच्यात सुधारणा.

                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> आपल्या हतावरच्या ईश्वरी चैतन्याच्या लहिरींमुळे आपण स्वतःला मार्गदर्शन करू शकतो.
                </p>
            </Container>

            <GoForward page="/subtlesystem" title="जनून घ्या आपले सुक्ष्म शरीर" />
        </Container>
    )
}
export default Benefits




