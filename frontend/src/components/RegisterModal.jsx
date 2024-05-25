import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Spinner } from "react-bootstrap";
import CustomModal from "./CustomModal";
import Message from "./Message";

import { userCreate } from "../actions/userActions";

const RegisterModal = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.userCreate);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const toggleShow = () => {
    setShow(!show);
    props.toggleLogin();
  };

  const handleRegister = () => {
    dispatch(userCreate({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <CustomModal
        title="Register"
        action="Register Me"
        show={show}
        toggleShow={toggleShow}
        handleSubmit={handleRegister}
      >
        <h6>Register: </h6>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              type="text"
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              type="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        {loading && (
          <Spinner animation="grow" variant="primary" role="status" />
        )}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">success</Message>}
      </CustomModal>
    </>
  );
};

export default RegisterModal;
