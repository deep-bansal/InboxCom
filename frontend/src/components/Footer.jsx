import React, { useState } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//bootstrap
import { Container, Row, Col, Button } from "react-bootstrap";
import ComposeMessageModal from "./ComposeMessageModal";

const Footer = () => {
  // for the compose Modal
  const [showCompose, setShowCompose] = useState(false);
  const toggleCompose = () => setShowCompose(!showCompose);

  const { userInfo } = useSelector((state) => state.userLogin);

  const renderShowComposeButton = () => {
    return (
      <Button
        className="position-absolute bottom-15 end-15"
        variant="dark"
        onClick={() => {
          toggleCompose();
        }}
      >
        Compose <FontAwesomeIcon icon={faEnvelope} />
      </Button>
    );
  };

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; {new Date().getFullYear()} SPE Project
          </Col>
        </Row>
      </Container>
      <ComposeMessageModal show={showCompose} toggleCompose={toggleCompose} />
      {userInfo && renderShowComposeButton()}
    </footer>
  );
};

export default Footer;
