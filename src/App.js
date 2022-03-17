import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BottomFooter from './components/BottomFooter';
import TopNavbar from './components/TopNavbar';
import Chakras from './components/Chakras';
import About from './components/About';
import Contact from './components/Contact';
import ChakraChild from './components/ChakraChild';
import LandingPage from './components/LandingPage';
import Sahajyoga from './components/Sahajyoga';
import Error from './components/Error';
import Benefits from './components/Benefits';
import SubtleSystem from './components/SubtleSystem';
import Kundalini from './components/Kundalini';

import imgmooladhar from './images/01_Mooladhar.jpg'
import imgswadhishthan from './images/02_Swadhishthan.jpg'
import imgnabhi from './images/03_Nabhi.jpg';
import imganahat from './images/04_Anahat.jpg';
import imgvishuddhi from './images/05_Vishuddhi.jpg'
import imgaagya from './images/06_Aagya.jpg'
import imgsahastrar from './images/07_Sahastrar.jpg';

import jdata from './data.json';
import IdaNadi from './components/IdaNadi';
import Nadi from './components/Nadi';
import PingalaNadi from './components/PingalaNadi';
import SushumnaNadi from './components/SushumnaNadi';

function App() {

  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route index path='/' element={<LandingPage />} />
          <Route path='/sahajyoga' element={<Sahajyoga />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/subtlesystem' element={<SubtleSystem />} />
          <Route path='/kundalini' element={<Kundalini />} />

          <Route path='chakras/' element={<Chakras />} />

          <Route path='/chakras' element={<Chakras />}>
            <Route path='mooladhar' element={<ChakraChild title="मूलाधार चक्र" img={imgmooladhar} desc={jdata.arrmooladhar} />} />

            <Route path='swadhishthan' element={<ChakraChild title="स्वाधीष्ठान चक्र" img={imgswadhishthan} desc={jdata.arrswadhishthan} />} />

            <Route path='nabhi' element={<ChakraChild title="नाभी चक्र" img={imgnabhi} desc={jdata.arrnabhi} />} />

            <Route path='anahat' element={<ChakraChild title="अनाहत चक्र" img={imganahat} desc={jdata.arranahat} />} />

            <Route path='vishuddhi' element={<ChakraChild title="विशुद्धी चक्र" img={imgvishuddhi} desc={jdata.arrvishuddhi} />} />

            <Route path='aagya' element={<ChakraChild title="आज्ञा चक्र" img={imgaagya} desc={jdata.arraagya} />} />

            <Route path='sahastrar' element={<ChakraChild title="सहस्रार चक्र" img={imgsahastrar} desc={jdata.arrsahastrar} />} />
          </Route>
          <Route path='/nadi' element={<Nadi />}>
            <Route path='ida' element={<IdaNadi />} />
            <Route path='pingala' element={<PingalaNadi />} />
            <Route path='sushumna' element={<SushumnaNadi />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <BottomFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
