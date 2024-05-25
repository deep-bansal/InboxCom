import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//bootstrap
import { ListGroup, Badge } from "react-bootstrap";
import { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";

//actions
import { getMessages } from "../actions/messagesActions";

const InboxScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { messages: loadedMessages } = useSelector((state) => state.messages);

  useEffect(() => {
    if (userInfo) {
      dispatch(getMessages(userInfo._id));
    } else if (!userInfo) {
      navigate("/");
    }
  }, []);

  const messages = loadedMessages ? loadedMessages.messages : [];

  // change the date format
  const changeDateFormat = (date) => {
    const newDate = new Date(date);
    const today = new Date();

    const timeDiff = Math.abs(today.getTime() - newDate.getTime());

    const diffMinutes = Math.ceil(timeDiff / (1000 * 60));
    const diffHours = Math.ceil(timeDiff / (1000 * 3600));
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffMinutes < 60) {
      return `${diffMinutes} minutes ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return `${newDate.toLocaleDateString("en-Gb", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}`;
    }
  };

  return (
    <>
      <h1 className="pb-3">Messages</h1>

      <ListGroup>
        {messages.length > 0 ? (
          messages.map((message) => {
            return (
              <LinkContainer key={message._id} to={`/messages/${message._id}`}>
                <ListGroup.Item action>
                  <div className="d-flex w-100 justify-content-between">
                    <h4 className="mb-1">{message.subject}</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="me-2 text-muted">
                        {changeDateFormat(message.createdAt)}
                      </small>
                      {!message.isRead ? (
                        <Badge className="h-100" bg="danger" pill>
                          {" "}
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                  <p className="mb-1">
                    {message?.content.substring(0, 50)} . . .
                  </p>
                </ListGroup.Item>
              </LinkContainer>
            );
          })
        ) : (
          <h3 className="p-3 text-white">No messages</h3>
        )}
      </ListGroup>
    </>
  );
};

export default InboxScreen;
