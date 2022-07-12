import React, { useEffect, useState } from "react";
import ModalComp from "./ModalComp";
// import Modal from "./ModalComp";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from "react-toastify";


function StartScreen({oneName_,twoName_,setOneName,setTwoName,nextLevel,currLevel}) {
  const [openModal, setOpenModal] = useState(false)

  function toggle(){
    setOpenModal(!openModal)
  }

  const handleChange=(e)=>{
    setOneName(e.target.value)
}

function proceed(){
  if(oneName_.length===0 || twoName_.length===0){
    return toast('Enter both players name to continue')
  }
  nextLevel(currLevel+1)
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 test" >
      <Modal isOpen={openModal} toggle={toggle} 
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <ModalHeader>Enter Players Namae</ModalHeader>
          <ModalBody>
            <p>Player 1</p>
            <input type="text" onChange={handleChange} />
            <br></br>
            <p>Player 2</p>
            <input type="text" onChange={(e)=>setTwoName(e.target.value)}/></ModalBody>
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
