import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

type PropTypes={
  oneName:string 
  twoName:string 
  currentLevel:number
  toggle:()=>void
  openModal:boolean
  setNextLevel: React.Dispatch<React.SetStateAction<number>>
  setOneName_: React.Dispatch<React.SetStateAction<string>>
  setTwoName_: React.Dispatch<React.SetStateAction<string>>

}

const ModalComp = ({oneName,toggle,twoName,openModal,setOneName_,setTwoName_,setNextLevel,currentLevel}:PropTypes) => {

    const handleChange=(e:React.FormEvent<HTMLInputElement>)=>{
        setOneName_((e.target as HTMLInputElement).value)
    }

    function proceed(){
      if(oneName.length===0 || twoName.length===0){
        return toast('Enter both players name to continue')
      }
      setNextLevel(currentLevel+1)
    }

  return (
    <>
      <Modal isOpen={openModal} toggle={toggle} 
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <ModalHeader>Enter Players Namae</ModalHeader>
          <ModalBody>
            <p>Player 1</p>
            <input type="text" onChange={handleChange} />
            <br></br>
            <p>Player 2</p>
            <input type="text" onChange={(e)=>setTwoName_(e.target.value)}/></ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={proceed}>Do Something</Button>{' '}
          </ModalFooter>
        </Modal>
    </>
  );
};

export default ModalComp