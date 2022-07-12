import { useState } from 'react';
import Cross from './assets/Cross.png'
import Circle from './assets/Circle.png'
import logo from './assets/logo.png'
import DemoCross from './assets/DemoCross.png'
import DemoCircle from './assets/DemoCircle.png'
import { toast } from 'react-toastify';

const boardArray=new Array(9).fill("empty")

function Game({player1,player2,setPlayer1,setPlayer2,setLevel}) {
  const [playerOneChance,setPlayerOneChance]=useState(true)
  const [currentCharacter, setCurrentCharacter] = useState(true)
  const [winMessage, setWinMessage] = useState("")
  const mapping={
    true:player1,
    false:player2
  }
  // console.log(mapping.true)
  function reloadGame(){
    setCurrentCharacter(true)
    setWinMessage("")
    setLevel(0)
    setPlayer1("")
    setPlayer2("")
    boardArray.fill("empty",0,9);
  }
  function checkWinner(){

    //Horizontal checking
    if(boardArray[0]===boardArray[1] && boardArray[1]===boardArray[2] && boardArray[0]!=='empty'){
     setWinMessage(currentCharacter+" is the winner")
     return true;
    }
    else if(boardArray[3]===boardArray[4] && boardArray[4]===boardArray[5] && boardArray[3]!=='empty'){
     setWinMessage(currentCharacter+" is the winner")
     return true
      
    }
    else if(boardArray[6]===boardArray[7] && boardArray[7]===boardArray[8] && boardArray[6]!=='empty'){
     setWinMessage(currentCharacter+" is the winner")
     return true

    }

    //vertical checking
    else if(boardArray[0]===boardArray[3] && boardArray[3]===boardArray[6] && boardArray[0]!=='empty'){
     setWinMessage(currentCharacter+" is the winner")
     return true
    }
    else if(boardArray[1]===boardArray[4] && boardArray[4]===boardArray[7] && boardArray[1]!=='empty'){
     setWinMessage(currentCharacter+" is the winner")
     return true
      
    }
    else if(boardArray[2]===boardArray[5] && boardArray[5]===boardArray[8] && boardArray[2]!=='empty'){
     setWinMessage(currentCharacter+" is the winner")
     return true
    }
    else if(boardArray[0]===boardArray[4] && boardArray[4]===boardArray[8] && boardArray[0]!=='empty'){
     setWinMessage(currentCharacter+" is the winner")
     return true
    }
    else if(boardArray[2]===boardArray[4] && boardArray[4]===boardArray[6] && boardArray[2]!=='empty'){
     setWinMessage(currentCharacter+" is the winner")
     return true
    }
  }
  function changeItem(idx){
    if(winMessage.length>0)
    return;
    if(boardArray[idx]==='empty'){
      boardArray[idx]=currentCharacter;
      setCurrentCharacter(!currentCharacter)
    }
    if(checkWinner())
    toast(`${mapping[currentCharacter]} won`)
  }
  return (
    <div className="App">
      
      {(winMessage!=="")?<p>{winMessage}</p>:""}
      {(winMessage!=="")?<button onClick={reloadGame}>Reload</button>:""}
      <img src={logo} className='logo-img' alt="logo" />

    <div className='gameComponent d-flex align-items-center justify-content-around'>
      {/* Left player deck */}
      <div className={`${currentCharacter===true?"active":""} player d-flex justify-content-center align-items-center text-white`}>
        <i className="userIcon fas fa-user-circle"></i>        
        <h4>Player 1</h4>
        <h2 className='fw-bolder'>{player1}</h2>
        <img src={Cross} className='demo' alt='demo '/>
      </div>

      {/* Centre game board */}
      <div className='row row-cols-3 outer-box'>
        {
          boardArray.map((item,idx)=>{

            if(item===true)
            return <img src={Cross} alt="cross pic" />;
            else if(item===false)
            return <img src={Circle} alt="circle pic" />;
            return <div key={idx} className='col box' onClick={()=>changeItem(idx)}>{``}</div>;
        })
        }
        </div>
      
      {/* Right game board */}
      <div className={`${currentCharacter===false?"active":""} player d-flex justify-content-center align-items-center text-white`}>
        <i className="userIcon fas fa-user-circle"></i>
        <h4>Player 2</h4>
        <h2 className='fw-bolder'>{player2}</h2>
        <img src={Circle} className='demo' alt='demo '/>
      </div>
    </div>
  </div>
  );
}

export default Game;
