import React from 'react'
import { Container } from 'react-bootstrap'
import GoForward from './GoForward'

import kundalini from '../images/kundalini.png'

const Kundalini = () => {
  return (
    <Container className='lead' style={{ textAlign: 'justify' }}>
      <h1 className='text-center text-danger fw-bold'>
        कुण्डलिनी म्हणजे काय?
      </h1>

      <img src={kundalini} alt="सूक्ष्म शरीर" loading='lazy' className='img-fluid rounded float-start p-3' />
      <p className='px-3'>

        &emsp; &emsp; कुंडलिनी ही मातृशक्ती आहे जी मणक्याच्या तळाशी सेक्रम हाडात सुप्त पडून असते. ही ऊर्जा आत्म-साक्षात्कार  नावाच्या प्रक्रियेद्वारे जागृत होते जी आपल्याला दैवीशी जोडते आणि आपल्या चक्रांना बरे करण्याचे आणि संतुलित करण्याचे कार्य सुरू करते.
      </p>
      <p className='px-3'>
        &emsp; &emsp; कुंडलिनी सुप्त आहे, परंतु परिस्थिती योग्य असताना लहान बीजाप्रमाणे, जागृत होऊ शकते आणि एक शक्तिशाली वृक्ष बनू शकते. ज्या प्रकारे विद्युत केबल संगणकाला मेनशी जोडते, त्याच प्रकारे जागृत कुंडलिनी मानवी जागृतीला दैवी प्रेमाच्या सर्वव्यापी शक्तीशी जोडते.

      </p>

      <p className='px-3'>
        &emsp; &emsp; जुन्या काळी, या प्रबोधनाला अनेक वर्षे वेगवेगळ्या ऊर्जा केंद्रांची साफसफाई व्हायची आणि शेवटी 'गुरु' काही निवडक व्यक्तींना प्रबोधन करण्याचे ठरवायचे. योगींसाठी हा अत्यंत कठीण प्रवास असायचा, जो आधुनिक काळात घेण्याची गरज नाही. सहज योगाच्या संस्थापक प.पू. श्री माताजी निर्मला देवी यांनी मोठ्या प्रमाणावर 'आत्मसाक्षात्कार' देण्यासाठी एक पद्धत तयार केली ज्याद्वारे कुंडलिनी विविध चक्र/ऊर्जा केंद्रे सहजतेने स्वच्छ करण्याचे काम करतात. सहज योग हा या अर्थाने अद्वितीय आहे की त्याची सुरुवात प्रथम कुंडलिनी जागृतीने होते आणि नंतर योगी त्यांच्या आध्यात्मिक आरोहणासाठी त्यांचे चक्र शुद्ध करण्यासाठी त्यांची समज विकसित करतात.

      </p>

      <p className='px-3'>
        &emsp; &emsp; कुंडलिनी एक हजार स्ट्रँड असलेली दोरी मानली जाऊ शकते; जेव्हा आपण प्रथम आत्म-साक्षात्कार प्राप्त करतो, तेव्हा केवळ एक किंवा दोन स्ट्रेंड चक्रांमधून मार्ग शोधतात आणि सहस्रार (शीर्ष चक्र) पर्यंत पोहोचतात. तथापि, नियमित ध्यान केल्याने, हळूहळू कुंडलिनीच्या अधिक पट्ट्या वाढतात आणि आपल्याला दैवी शक्तीशी जोडतात. ध्यानाचा अनुभव कालांतराने अधिक गहन आणि आनंददायी बनतो. आदि शंकराचार्य (c 600 ad), कबीर (c 1500 ad) आणि ज्ञानदेव (c 1200 ad) यांसारख्या भारतीय संतांनी कुंडलिनीचे वर्णन केले आहे.
      </p>

      <p className='px-3'>
        &emsp; &emsp; आज जगात योगाचे अनेक प्रकार आहेत. हे स्ट्रेचिंग योग, व्यायाम योग, प्रसवपूर्व योग आणि हसणे योग आहेत. असे दिसते की जीवनाच्या प्रत्येक वाटचालीसाठी योगाचा एक प्रकार आहे. बहुतेक लोक योगास स्ट्रेचिंग समजतात किंवा ते व्यायाम म्हणून पाहतात. योग हा खरे तर एक प्राचीन संस्कृत शब्द आहे ज्याचा अर्थ एक होणे किंवा एकत्र येणे होय.
      </p>


      <GoForward page="/chakras/mooladhar" title="आपल्या 7 चक्रांची माहिती जाणून घ्या" />
    </Container>

  )
}

export default Kundalini
