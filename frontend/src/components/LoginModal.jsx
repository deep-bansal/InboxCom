import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomModal from "./CustomModal";
import Message from "./Message";

import { Form, Spinner } from "react-bootstrap";
import { useEffect } from "react";

//actions
import { userLogin } from "../actions/userActions";

const LoginModal = (props) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.userLogin);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const toggleShow = () => {
    setShow(!show);
    props.toggleLogin();
  };

  const handleLogin = () => {
    dispatch(userLogin(email, password));
  };

  return (
    <>
      <CustomModal
        title="Log In"
        action="Log Me In"
        show={show}
        toggleShow={toggleShow}
        handleSubmit={handleLogin}
      >
        <h6>Login: </h6>
        <Form>
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

export default LoginModal;
