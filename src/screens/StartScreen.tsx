import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from "react-toastify";

type PropTypes={
  firstName:string 
  secondName:string 
  currLevel:number
  setCurrLevel: React.Dispatch<React.SetStateAction<number>>
  setFirstName: React.Dispatch<React.SetStateAction<string>>
  setSecondName: React.Dispatch<React.SetStateAction<string>>

}

function StartScreen({firstName,secondName,setFirstName,setSecondName,setCurrLevel,currLevel}:PropTypes) {
  const [openModal, setOpenModal] = useState(false)

  function toggle(){
    setOpenModal(!openModal)
  }

  const handleChange=(e:React.FormEvent<HTMLInputElement>)=>{
    setFirstName((e.target as HTMLInputElement).value)
}

function proceed(){
  if(firstName.length===0 || secondName.length===0){
    return toast('Enter both players name to continue')
  }
  setCurrLevel(currLevel+1)
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 test" >
      <Modal isOpen={openModal} toggle={toggle } 
      aria-labelledby="contained-modal-title-vcenter"
      className="custom-modal-style"
      centered>
          <ModalHeader>Enter Players Name</ModalHeader>
          <ModalBody>
            <p>Player 1</p>
            <input type="text" onChange={handleChange} />
            <br></br>
            <p>Player 2</p>
            <input type="text" onChange={(e)=>setSecondName(e.target.value)}/></ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={proceed}>Continue</Button>{' '}
          </ModalFooter>
        </Modal>
      <a
          className="btn btn-start p-4"
          onClick={toggle}
        >
          Start Game
        </a>
      {/* </div> */}
    </div>
  );
}

export default StartScreen;
