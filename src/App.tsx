import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Game from './Game';
import StartScreen from './StartScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
const boardArray=new Array(9).fill("empty")

function App() {

  const [step,setStep]=useState(0)
  const [player1Name,setPlayer1Name]=useState("")
  const [player2Name,setPlayer2Name]=useState("")

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
      <StartScreen oneName_={player1Name} twoName_={player2Name} setOneName={setPlayer1Name} setTwoName={setPlayer2Name} currLevel={step} nextLevel={setStep}/>
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
      <Game setPlayer1={setPlayer1Name} setPlayer2={setPlayer2Name} player1={player1Name} player2={player2Name} setLevel={setStep}/>
    </>
  }

export default App;
