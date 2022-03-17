import React from 'react'
import { Container } from 'react-bootstrap'
import meditation from '../images/meditation.jpg'
import GoForward from './GoForward'

const Sahajyoga = () => {

    return (
        <Container className='' >
            <img src={meditation} alt="" className='img-fluid border border-danger' width="100%" />
            <h1 className='text-danger text-center my-4 fw-bold'>'सहजयोग' म्हणजे काय ?</h1>
            <Container fluid className="lead" style={{ textAlign: "justify" }}>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> सहज याचा अर्थ आहे, "आपल्या बरोबर जन्मलेला स्वाभाविक नासायास घटित होणारा" आणि 'योग' म्हणजे परमेश्वरी शक्तिशी संलग्नता. प्रत्येक माणसाच्या शरीरात जन्मतःच एक सूक्ष्म यंत्रणा असते. ती नसांची यंत्रणा असून तिच्या जागृतीने सहज योगाचा लाभ होतो. म्हणजेच ईश्वरी शक्तिशी विनासायास संलग्नता मिळते. या अनुभवास आत्मसाक्षात्कार असे म्हणतात.
                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> सहज योगाचे वेगळेपण असे की, यात आत्मसाक्षात्कार दूरचे ध्येय नसून आपल्या अध्यात्मिक उन्नतीचा आरंभ आहे. ह्याच्यासाठी आपल्यातील सूक्ष्म कुंडलिनी शक्तिच्या जागृतीसाठी आपल्याला सत्य जाणून घेण्याची हृदयापासून इच्छा असावी व ज्याची कुण्डलिनी शक्ति जागृत आहे अशी व्यक्ति उपस्थित असावी लागते.
                </p>

                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> जागृती झाल्यावर कुंडलिनी शक्ति, चित्रात दर्शविलेल्या, पवित्र अस्थीच्या (माकड हाड) बाहेर येऊन सुषुम्ना मार्गातून उत्थापित होते आणि षट्चक्रांचे म्हणजे सूक्ष्म शक्ति केंद्राचे भेदन करून त्यांचे पोषण व प्रकाशन करते. या शक्तिने कपाळाच्या मागे असलेले आज्ञा चक्र छेदल्यावर साधकाला जाणीवेच्या निर्विचार स्थितीचा अनुभव येतो. ही खऱ्या ध्यानाची पहिली अवस्था होय.
                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> प्रत्येक दिवशी काही क्षण जरी आपल्याला ही अवस्था प्राप्त झाली तर त्यामुळे आपल्या जीवनात शारीरिक, बौद्धिक, भावनिक व अध्यात्मीक परिवर्तन होऊ शकेल. सभोवतालच्या जगाशी आपले सौहार्द व सद्भावनेचे संबंध होतील. त्याच प्रमाणे रोजच्या जीवनातील चढ उतारांचा मानसिक त्रास कमी प्रमाणावर जाणवेल.
                </p>
                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> मस्तकांच्या टाळूच्या भागातील एक हजार पाकळ्याच्या सहस्त्रार चक्राचे भेदन झाल्यावर कुंडलिनी शक्ति परम चैतन्याशी अर्थात परमेश्वराच्या सर्वव्यापी प्रेम शक्तिशी संलग्न होते. यावेळी टाळूवर आणि तळ हातांवर थंड वाऱ्याच्या संवेदना आपल्याला जाणवितात. शरीर, मन, भावना आणि अहंकार यांच्याशी असलेली तन्मयता जाऊन खऱ्या स्वरूपाची आत्मतत्वाची आपल्याला अनुभूति मिळते. ही आत्मसाक्षात्काराची अवस्था आपल्याला आंतरिक सौंदर्याचा व मुक्ततेचा अनुभव देते.
                </p>

                <p className='my-2'>
                    <i className="fa-solid fa-circle-chevron-right text-danger"></i> एकशे वीसहून अधिक देशात ध्यान केंद्रे असलेल्या सहज योगात प्रत्येक दिवशी हजारो लोक आत्मसाक्षात्काराचा अनुभव घेऊन जाणीवेच्या उच्च स्थितीत उन्नत होत आहेत आणि खरे सुख आणि स्वातंत्र्य मिळाल्याने कृतार्थ होत आहेत.
                </p>
            </Container>

            <GoForward page="/benefits" title="सहजयोगाचे फायदे जाणून घेण्यासाठी येथे क्लिक करा" />

            {/* Using /benefits will load the localhost/benefits 
            and using only benefits will load localhost/sahajyoga/benefits */}
        </Container >
    )
}

export default Sahajyoga