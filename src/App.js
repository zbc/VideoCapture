import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
  }, [])
  function handleClick() {
    const constraints = {
      video: true,
      audio: false
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        console.log(stream)
        const video = document.querySelector('video');
        console.log(video)
        video.srcObject = stream;
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <>
      <video id="video" autoPlay>
      </video>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default App;
