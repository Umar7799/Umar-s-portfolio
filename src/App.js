import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Work from './components/Work';
import { InfoProvider } from './Contexts/Context';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



function App() {

  const [entering, setEntering] = useState(true)
  useEffect(() => {
    let timer = setTimeout(() => {
      setEntering(false);
    }, 1500);
    return () => clearTimeout(timer)
  }, []);


  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => {
      setHiding(true);
    }, 1800);
    return () => clearTimeout(timer)
  }, []);



  const [entering2, setEntering2] = useState(true)
  useEffect(() => {
    let timer = setTimeout(() => {
      setEntering2(false);
    }, 400);
    return () => clearTimeout(timer)
  }, []);



  const [movingToTop, setMovingToTop] = useState(true)
  useEffect(() => {
    let timer = setTimeout(() => {
      setMovingToTop(false);
    }, 800);
    return () => clearTimeout(timer)
  }, []);






  return (
    <div>

      <div className={hiding ? 'hidden' : ''}>
        <div className={entering ? 'bg-[#405855] absolute w-full h-full z-[101] flex justify-center items-center opacity-[1]' : 'bg-[#405855] absolute w-full h-full z-[101] flex justify-center items-center opacity-0 duration-[1.2s]'}>
          {/* TOP */}
          <div class={movingToTop ? "hexagonDelayingMoving bg-white opacity-0" : "hexagonDelayingMoving bg-white opacity-1 duration-[0.8s]"}>
            <div class="inner-contentDelayingMoving bg-[#405855]">
              <h1 className='text-2xl text-white font-semibold'>U</h1>
            </div>
          </div>

          <div class={entering2 ? "hexagonDelaying bg-white mb-8" : "hexagonDelaying bg-black opacity-0 duration-500 mb-8"}>
            <div class="inner-contentDelaying bg-[#405855]">
              <h1 className='text-3xl text-white font-semibold pt-[10px]'>U</h1>
            </div>
          </div>
        </div>
      </div>



      <InfoProvider>
        <div className={entering ? 'hidden' : 'bg-[#405855] overflow-hidden'}>
          <Navbar />
          <Main />
          <About />
          <Work />
          <Projects />
          <Contact />
        </div>
      </InfoProvider>
    </div>
  );
}

export default App;
