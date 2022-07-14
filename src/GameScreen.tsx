import React,{ useEffect, useState } from 'react';
import Cross from './assets/Cross.png'
import Circle from './assets/Circle.png'
import logo from './assets/logo.png'
import { toast } from 'react-toastify';
import Leaderboard from './Leaderboard';

const boardArray=new Array(9).fill("empty")

type PropTypes={
  player1:string 
  player2:string 
  setLevel: React.Dispatch<React.SetStateAction<number>>
  setPlayer1: React.Dispatch<React.SetStateAction<string>>
  setPlayer2: React.Dispatch<React.SetStateAction<string>>
}

function Game({player1,player2,setPlayer1,setPlayer2,setLevel}:PropTypes) {
  const [currentCharacter, setCurrentCharacter] = useState(0)
  const [winMessage, setWinMessage] = useState("")

  const mapping=[player1,player2]
  
  // console.log(mapping.true)

  useEffect(() => {
    if(winMessage!=="")
    {
      let record:{player1:string,player2:string,result:string}=
        {player1:player1,player2:player2,result:winMessage}

      var xx=localStorage.getItem("records")
      if(xx){
        let res=JSON.parse(xx)
        res.push(record)
        localStorage.setItem("records",JSON.stringify(res))
      }
      else{
        const arrayRec=[record]
        localStorage.setItem("records",JSON.stringify(arrayRec))

      }
    }
  }, [winMessage])
  
  function reloadGame(){
    setCurrentCharacter(0)
    setWinMessage("")
    setLevel(0)
    setPlayer1("")
    setPlayer2("")
    boardArray.fill("empty",0,9);
  }
  function rematchGame(){
    setCurrentCharacter(0)
    setWinMessage("")
    // setLevel(0)
    boardArray.fill("empty",0,9);
  }
  useEffect(() => {
    if(winMessage!=="")
    {
      setCurrentCharacter(1-currentCharacter)
      toast(`${winMessage}`)
    }
  }, [winMessage])
  
  function checkWinner(){
    
    //Horizontal checking
    if(boardArray[0]===boardArray[1] && boardArray[1]===boardArray[2] && boardArray[0]!=='empty'){
     setWinMessage(mapping[currentCharacter]+" is the winner")
     return true;
    }
    else if(boardArray[3]===boardArray[4] && boardArray[4]===boardArray[5] && boardArray[3]!=='empty'){
      setWinMessage(mapping[currentCharacter]+" is the winner")
      return true
      
    }
    else if(boardArray[6]===boardArray[7] && boardArray[7]===boardArray[8] && boardArray[6]!=='empty'){
      setWinMessage(mapping[currentCharacter]+" is the winner")
      return true
      
    }
    
    //vertical checking
    else if(boardArray[0]===boardArray[3] && boardArray[3]===boardArray[6] && boardArray[0]!=='empty'){
      setWinMessage(mapping[currentCharacter]+" is the winner")
      return true
    }
    else if(boardArray[1]===boardArray[4] && boardArray[4]===boardArray[7] && boardArray[1]!=='empty'){
      setWinMessage(mapping[currentCharacter]+" is the winner")
      return true
      
    }
    else if(boardArray[2]===boardArray[5] && boardArray[5]===boardArray[8] && boardArray[2]!=='empty'){
      setWinMessage(mapping[currentCharacter]+" is the winner")
      return true
    }
    else if(boardArray[0]===boardArray[4] && boardArray[4]===boardArray[8] && boardArray[0]!=='empty'){
      setWinMessage(mapping[currentCharacter]+" is the winner")
      return true
    }
    else if(boardArray[2]===boardArray[4] && boardArray[4]===boardArray[6] && boardArray[2]!=='empty'){
     setWinMessage(mapping[currentCharacter]+" is the winner")
     return true
    }

    let emptySpots=0;
    for(var i=0;i<9;i++){
      if(boardArray[i]==="empty")
      emptySpots++;
    }

    if(emptySpots===0){
      setWinMessage("Match tied");
      return true;
    }

    return false;
  }
  function changeItem(idx:number){
    if(winMessage.length>0)
    return;
    if(boardArray[idx]==='empty'){
      boardArray[idx]=currentCharacter;
      setCurrentCharacter(1-currentCharacter)
    }
    if(checkWinner())
    return;
    // if(winMessage.length===0)
  }
  return (
    <div className="App">
      <img src={logo} className='logo-img game-btn' alt="logo" />
      {
        //SHOW reload and rematch buttons
        winMessage.length>0 &&
        (
          <div className='game-buttons'>
            <button onClick={rematchGame} className='btn btn-start'>Rematch</button>
            <button onClick={reloadGame} className='btn btn-start'>Reload</button>
          </div>
        )
      }
      
      <div className='gameComponent'>
        {/* Left player deck */}
        <div className={`${currentCharacter===0?"active":""} player d-flex justify-content-center align-items-center text-white`}>
          <i className="userIcon fas fa-user-circle"></i>        
          <h4>Player 1</h4>
          <h2 className='fw-bolder'>{player1}</h2>
          <img src={Cross} className='demo' alt='demo '/>
        </div>

        {/* Centre game board */}
        <div className='row row-cols-3 outer-box'>
          {
            boardArray.map((item,idx)=>{

              if(item===0)
              return <img key={idx} src={Cross} alt="cross pic" />;
              else if(item===1)
              return <img key={idx} src={Circle} alt="circle pic" />;
              return <div key={idx} className='col box' onClick={()=>changeItem(idx)}>{``}</div>;
            })
          }
        </div>
      
        {/* Right game board */}
        <div className={`${currentCharacter===1?"active":""} player d-flex justify-content-center align-items-center text-white`}>
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
