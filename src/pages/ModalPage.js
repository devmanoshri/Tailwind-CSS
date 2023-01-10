import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handelModalShow = () => {
    setShowModal(true);
  };
  const handelClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Button primary onClick={handelModalShow}>
        Open Modal
      </Button>
      {showModal && <Modal onClose={handelClose} />}
    </div>
  );
}

export default ModalPage;
