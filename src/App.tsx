import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Game from './GameScreen';
import StartScreen from './screens/StartScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactAudioPlayer from 'react-audio-player';
import Leaderboard from './Leaderboard';


function App() {
  const song=require('./assets/song.mp3')
  const music=require('./assets/music.mp3')
  const [step,setStep]=useState(0)
  const [player1Name,setPlayer1Name]=useState("Sandeep ")
  const [player2Name,setPlayer2Name]=useState("Sakshi")

    if(step==0)
    return <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <StartScreen firstName={player1Name} secondName={player2Name} setFirstName={setPlayer1Name} setSecondName={setPlayer2Name} currLevel={step} setCurrLevel={setStep}/>
    </>
    return <>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <audio
        src={music}
        autoPlay={true}
        loop={true}
        controls={false}
      />
      <Game setPlayer1={setPlayer1Name} setPlayer2={setPlayer2Name} player1={player1Name} player2={player2Name} setLevel={setStep}/>
    </>
  }

export default App;
