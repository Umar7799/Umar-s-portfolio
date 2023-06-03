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



  const [height, setHeight] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeight(prevHeight => {
        if (prevHeight >= 192) {
          clearInterval(interval); // Stop the interval when height reaches 150 pixels
          return prevHeight;
        }
        return prevHeight + 10; // Increase the height by 10 pixels
      });
    }, 100); // Interval of 1 second (you can adjust this value as needed)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);



  return (
    <div>

      <div className={hiding ? 'hidden' : ''}>
        <div className={entering ? 'bg-[#405855] absolute w-full h-full z-[101] flex justify-center items-center opacity-[1]' : 'bg-[#405855] absolute w-full h-full z-[101] flex justify-center items-center opacity-0 duration-[1.2s]'}>

          {/* TOP SHADOW */}
          <div className={movingToTop ? 'opacity-0' : 'absolute top-0 w-full duration-[1s] rounded-b-md bg-[#405855] h-[72px] bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg shadow-md z-[100]'}></div>

          {/* TOP LOGO*/}
          <div class={movingToTop ? "hexagonDelayingMoving bg-white opacity-0" : "hexagonDelayingMoving bg-white opacity-1 duration-[0.8s] z-[102]"}>
            <div class="inner-contentDelayingMoving bg-[#405855]">
              <h1 className='text-2xl text-white font-semibold'>U</h1>
            </div>
          </div>

          {/* SIDES */}
          <div className={movingToTop ? 'opacity-0' : 'hidden md:block absolute left-[51px] bottom-0 bg-[#c0bebe] w-[1px] rounded duration-[0.1s]'} style={{ height: `${height}px` }}></div>
          <div className={movingToTop ? 'opacity-0' : 'hidden md:block absolute lg:right-[61px] md:right-[46px] bottom-0 bg-[#c0bebe] w-[1px] duration-[0.3s]'} style={{ height: `${height}px` }}></div>

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
    </div >
  );
}

export default App;
