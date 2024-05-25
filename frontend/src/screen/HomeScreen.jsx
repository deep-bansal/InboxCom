import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//bootstrap
import { Button, Image } from "react-bootstrap";

import laptopImage from "../assets/laptop.png";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
import { getMessages } from "../actions/messagesActions";

const HomeScreen = () => {
  // state for the TWo modals components
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [isShown, setIsShown] = useState(true);

  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleRegister = () => setShowRegister(!showRegister);

  // user info and the messages he has received
  const { userInfo } = useSelector((state) => state.userLogin);
  const { messages } = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      setIsShown(false);
      setShowLogin(false);
      setShowRegister(false);
      if (!messages) {
        dispatch(getMessages(userInfo._id));
      }
    } else {
      setIsShown(true);
    }
  }, [userInfo, messages, dispatch]);

  // setting the messages counts
  const totalMessages = messages ? messages.messages.length : 0;
  const totalUnreadMessages = messages
    ? messages.messages.filter((message) => !message.isRead).length
    : 0;

  return (
    <>
      <div
        className={`d-flex justify-content-between align-items-center flex-wrap h-100 ${
          isShown ? "" : "d-none"
        }`}
      >
        <LoginModal show={showLogin} toggleLogin={toggleLogin} />
        <RegisterModal show={showRegister} toggleLogin={toggleRegister} />
        <div>
          <h1>Welcome to InboxCOM!</h1>
          <h2>Sign In to get started</h2>
          <div className="d-flex flex-row pt-2">
            <Button
              variant="primary me-2"
              onClick={() => {
                toggleLogin();
              }}
            >
              Sign In
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => {
                toggleRegister();
              }}
            >
              Register
            </Button>
          </div>
        </div>
        <Image src={laptopImage} fluid />
      </div>
      <div
        className={`d-flex flex-column justify-content-between align-items-center flex-wrap h-100 ${
          isShown ? "d-none" : ""
        }`}
      >
        <h1 className="text-center w-100 py-3">
          Welcome {userInfo?.name.split(" ")[0]}!
        </h1>
        <h3 className="text-center w-100 py-3">
          You have <span className="fw-bold">{totalUnreadMessages}</span> unread
          messages out of <span className="fw-bold">{totalMessages}</span> total
        </h3>
        <Link to="/inbox">
          <Button className="my-3" variant="primary" size="lg">
            View your messages
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HomeScreen;
