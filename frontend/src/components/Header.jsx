import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { USER_CREATE_RESET, USER_LOGOUT } from "../constants/userConstants";

//bootstrap
import { Container, Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//components
import LoginModal from "./LoginModal";

//dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInbox, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { MESSAGES_USER_RESET } from "../constants/messagesConstants";
import { getMessages } from "../actions/messagesActions";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { messages } = useSelector((state) => state.messages);
  const totalUnreadMessages = messages
    ? messages.messages.filter((message) => !message.isRead).length
    : 0;

  useEffect(() => {
    if (userInfo) {
      setShowLogin(false);
    }
    getMessages(userInfo?._id);
    // check for new messages every 30 seconds
    const interval = setInterval(() => {
      dispatch(getMessages(userInfo?._id));
    }, 1000 * 30);
    return () => clearInterval(interval);
  }, [userInfo, dispatch]);

  const logoutHandler = () => {
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_CREATE_RESET });
    dispatch({ type: MESSAGES_USER_RESET });
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <header>
      <LoginModal show={showLogin} toggleLogin={toggleLogin} />
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>InboxCOM</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <FontAwesomeIcon icon={faHome} /> Home
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <LinkContainer to="/inbox">
                  <Nav.Link>
                    <FontAwesomeIcon icon={faInbox} /> Inbox
                    {totalUnreadMessages ? (
                      <Badge pill bg="danger" className="ms-1">
                        {totalUnreadMessages}
                      </Badge>
                    ) : null}
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <></>
              )}
              {!userInfo ? (
                <Nav.Link
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLogin();
                  }}
                >
                  <FontAwesomeIcon icon={faUser} /> Sign In
                </Nav.Link>
              ) : (
                <>
                  <NavDropdown title={` ${userInfo.name}`}>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
