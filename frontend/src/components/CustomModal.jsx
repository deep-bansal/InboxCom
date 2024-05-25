import React from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({
  title,
  children,
  action,
  show,
  toggleShow,
  handleSubmit,
}) => {
  return (
    <>
      <Modal show={show} onHide={toggleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            {action}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;
