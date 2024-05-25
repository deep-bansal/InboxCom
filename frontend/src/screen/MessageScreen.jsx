import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//bootstrap
import { Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//Actions
import { getMessage, getMessages } from "../actions/messagesActions";
import { MESSAGE_GET_RESET } from "../constants/messagesConstants";

const MessageScreen = () => {
  const { id } = useParams();
  const { message: loadedMessage } = useSelector((state) => state.message);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      if (!loadedMessage) {
        dispatch(getMessage(userInfo._id, id));
      }
    }
    return () => {
      // reset the message
      dispatch({ type: MESSAGE_GET_RESET });
    };
  }, [userInfo, dispatch, id]);
  const message = loadedMessage ? loadedMessage : {};
  return (
    <>
      <h1 className="mb-4">Message</h1>
      <Card bg="light" text="dark" className="mb-2">
        <Card.Header>{message?.from}</Card.Header>
        <Card.Body>
          <Card.Title> {message?.subject} </Card.Title>
          <Card.Text>{message?.content}</Card.Text>
        </Card.Body>
      </Card>
      <LinkContainer to="/inbox">
        <Button variant="primary" className="my-2">
          Go Back
        </Button>
      </LinkContainer>
    </>
  );
};

export default MessageScreen;
