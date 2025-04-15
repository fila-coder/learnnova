
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/programs/Programs';
import Title from './components/title/Title';
import About from './components/about/About'
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/content/Contact';
import Footer from './components/footer/Footer';
import VideoPlay from './components/videoPlay/VideoPlay';
import { useState } from 'react';
function App() {

  const [playState, setPlayState] = useState(false);


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='container' >
        <Title subTitle='OUR PROGRAM' title ='what we offer' />
       <Programs />
       <About setPlayState={setPlayState}/>
       <Title subTitle='Gallery' title ='Campus Photos' />
       <Campus />
       <Title subTitle='TESTIMONIALS' title ='What Student Says?' />
       <Testimonials />
       <Title subTitle='CONTACT US' title ='Get in Touch' />
       <Contact />
       <Footer/>
      </div>
      <VideoPlay playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
