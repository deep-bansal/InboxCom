import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomModal from "./CustomModal";
import Message from "./Message";

import { Form, Spinner } from "react-bootstrap";
import { useEffect } from "react";

//actions
import { MESSAGE_SEND_RESET } from "../constants/messagesConstants";
import { sendMessage } from "../actions/messagesActions";

const ComposeMessageModal = (props) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [errorSend, setErrorSend] = useState("");

  const dispatch = useDispatch();
  const { message, loading, success, error } = useSelector(
    (state) => state.messageSend
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const toggleShow = () => {
    setShow(!show);
    props.toggleCompose();
  };

  const handleSendMessage = () => {
    if (!userInfo) {
      setErrorSend("Please login first");
      return;
    } else if (!email || !subject || !content) {
      setErrorSend("Please fill all the fields");
      return;
    } else {
      setErrorSend("");
      dispatch(sendMessage(email, subject, content));
    }
    if (success) {
      setTimeout(() => {
        setEmail("");
        setSubject("");
        setContent("");
        toggleShow();
        dispatch({ type: MESSAGE_SEND_RESET });
      }, 1000);
    }
  };

  return (
    <>
      <CustomModal
        title="Compose a Message"
        action="Send"
        show={show}
        toggleShow={toggleShow}
        handleSubmit={handleSendMessage}
      >
        <h6>message: </h6>
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
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              name="subject"
              value={subject}
              type="text"
              placeholder="Enter Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTextarea">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              value={content}
              placeholder="Write your content here"
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
        </Form>
        {loading && (
          <Spinner animation="grow" variant="primary" role="status" />
        )}
        {errorSend && <Message variant="danger">{errorSend}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">success</Message>}
      </CustomModal>
    </>
  );
};

export default ComposeMessageModal;
