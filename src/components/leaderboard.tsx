import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Leaderboard=({ modalOpen, changeModalState }: PropTypes)=> {
  const [rec, setRec] = useState<any>(() => {
    if (localStorage.getItem("records"))
      return JSON.parse(localStorage.getItem("records") || "");
    return "";
  });

  function toggle() {
    changeModalState(!modalOpen);
  }

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        toggle={toggle}
        centered
        size="lg"
        style={{ maxWidth: "650px", width: "100%" }}
      >
        <ModalHeader toggle={toggle}>
          <h2>Leaderboard</h2>
        </ModalHeader>
        <ModalBody >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Playe-1</th>
                <th scope="col">Player-2</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              {rec === "" ? (
                <div>No matches yet</div>
              ) : (
                rec.map((item: any, idx: number) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{item.player1}</td>
                    <td>{item.player2}</td>
                    <td>{item.result}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
type PropTypes = {
  modalOpen: boolean;
  changeModalState: React.Dispatch<React.SetStateAction<boolean>>;
};
export default Leaderboard;
