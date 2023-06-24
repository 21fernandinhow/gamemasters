import Aos from 'aos/dist/aos.js';
import 'aos/dist/aos.css';
import './css/style.css'
import { useEffect } from 'react';
import Header from './components/header';
import Games from './components/games';
import Footer from './components/footer';

function App() {

  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[]);

  return (
    <>
      <Header/>
      <Games/>
      <Footer/>
    </>
  );
};

export default App;
