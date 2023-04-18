
import React from 'react';

function App() {
  const [mountain1, setMountain1] = React.useState(true)
  const [mountain2, setMountain2] = React.useState(false)
  function handleMountain1(event) {
    setMountain1(true)
    setMountain2(false)
  }
  function handleMountain2(event) {
    setMountain1(false)
    setMountain2(true)
  }
  return (
    <div className="App m-0 p-0 text-sm max-[600px]:text-xs">
      <main>
        <div className="main-page front-page  py-2 max-w-full h-screen bg-center bg-no-repeat">
          <div className='flex justify-between items-center w-11/12 px-16'>
            <img src=".//logo.png" alt="mountain-snapshot" />
            <div className="flex justify-between w-3/12 text-white underline italic uppercase max-[600px]:w-6/12">
              <a href="#history" className='mr-2'>01.History</a>
              <a href="#team">02.Team</a></div>
          </div>
        </div>
      </main>
      <section id="history" className="history-section  max-w-full h-screen">
        <div className="w-screen h-1/12  flex justify-between items-center px-16 py-2 max-[600px]:px-2">
          <div className='flex items-center '><img className='mr-2' src=".//logo.png" alt="mountain-snapshot" />
            <div className='font-bold'><h1>LOSANGELES </h1>
              <h1 className='text-blue-900'>MOUNTAINS</h1></div>
          </div>
          <div className='w-3/12 flex justify-between italic uppercase text-gray-800 underline max-[600px]:w-6/12'> <a className="mr-2" href="#history">01.History</a>
            <a href="#team">02.Team</a></div>
        </div>
        <div className="history-content h-screen flex flex-col justify-between items-center ">
          <div className="top-content px-24 py-12 text-left">
            <div className='flex items-center'>
              <div className='flex items-end'>
                <h1 className=' text-7xl text-gray-300 font-bold '>01</h1>
                <p className='w-11/12 h-2  mb-2 bg-gray-300'>.</p>
              </div>
              <h2 className='font-bold text-xl'>HISTORY</h2></div>
            <p className='ml-8 leading-normal tracking-wide text-gray-700 max-[600px]:ml-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.</p>
          </div>
          <div className="accordian bottom-content flex w-10/12  mb-2 justify-center items-center p-4 bg-gray-800 h-44 opacity-90 max-[600px]:p-2 max-[600px]:w-screen max-[600px]:h-80">
            <div className="tab m-1"><img className="w-full h-full  opacity-400" src=".//pic2.png" alt="touristpicture1" /></div>
            <div className="tab m-1"><img className=" w-full h-full opacity-400" src=".//pic1.png" alt="image2" /></div>
            <div className="tab m-1"><img className=" w-full h-full  opacity-400" src=".//pic2.png" alt="touristpicture1" /></div>
            <div className="tab m-1"><img className="w-full  h-full  opacity-400" src=".//pic1.png" alt="image2" /></div>
          </div>
        </div>
      </section>
      <section id="team" className="climb-section mt-20">
        <div className="head climb px-16 flex w-11/12 text-left justify-center items-center max-[640px]:flex-col max-[640px]:mb-4">
          <div className='flex items-center'>
            <div className='flex items-end'>
              <h1 className=' text-8xl text-gray-300 font-bold '>02</h1>
              <p className='w-11/12 h-2  mb-4 bg-gray-300'>.</p>
            </div>
            <h2 className='font-bold text-gray-600 text-4xl mr-2'>CLIMB</h2></div>
          <p className='text-xs mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='mountain-types flex items-center h-12 p-2 bg-gray-600'>
          <a href="#mountain1" onClick={handleMountain1} className='text-gray-100 m-8 underline leading-loose'>MOUNTAIN 1</a>
          <a href="#mountain2" onClick={handleMountain2} className='text-gray-100 m-8 underline leading-loose'>MOUNTAIN 2</a>
        </div>
        <div className="mountain-info flex w-screen h-screen justify-start items-center ">
          {mountain1 && <div className="mountain mountain-1 bg-gray-200 w-4/12 h-60 ml-40 mb-40 border flex justify-center items-center text-left opacity-80 max-[640px]:w-6/12 max-[640px]:ml-10">
            <div>
              <h1 className='text-2xl font-bolder text-blue-900 mb-4 '>SCHEDULE</h1>
              <ul className='max-[640px]:text-sm'>
                <li className='m-2 text-black font-bold'>25 Nov2016 <span className='ml-2'>Vestibulum vierrer</span></li>
                <li className='m-2 text-black font-bold'>25 Nov2016 <span className='ml-2'>Vestibulum vierrer</span></li>
                <li className='m-2 text-black font-bold'>25 Nov2016 <span className='ml-2'>Vestibulum vierrer</span></li>
                <li className='m-2 text-black font-bold'>25 Nov2016 <span className='ml-2'>Vestibulum vierrer</span></li>
              </ul>
            </div>
          </div>}
          {mountain2 && <div className="mountain mountain-1 bg-gray-200 w-4/12 h-60 ml-40 mb-40 border flex justify-center items-center text-left opacity-80 max-[640px]:w-6/12 max-[640px]:ml-10">
            <div>
              <h1 className='text-2xl font-bolder text-blue-900 mb-4 '>SCHEDULE</h1>
              <ul className='max-[640px]:text-sm'>
                <li className='m-2 text-black font-bold'>25 Nov2016 <span className='ml-2'>V vierrer</span></li>
                <li className='m-2 text-black font-bold'>25 Nov2016 <span className='ml-2'>V vierrer</span></li>
                <li className='m-2 text-black font-bold'>25 Nov2016 <span className='ml-2'>V vierrer</span></li>
                <li className='m-2 text-black font-bold'>25 Nov2016 <span className='ml-2'>V vierrer</span></li>
              </ul>
            </div>
          </div>}
        </div>
      </section>
      <footer>
        <div className="w-screen h-1/12 bg-gray-700 flex justify-around items-center px-16 py-2 max-[600px]:p-6">
          <div className='flex items-center mr-8'><img className='mr-2' src=".//logo.png" alt="mountain-snapshot" />
            <div className='font-bold'><h1>LOSANGELES </h1>
              <h1>MOUNTAINS</h1></div>
          </div>
          <h2 className='text-left'>COPY RIGHT 2016.ALL RIGHTS RESERVED.</h2>
        </div>

      </footer>
    </div>
  );
}

export default App;
