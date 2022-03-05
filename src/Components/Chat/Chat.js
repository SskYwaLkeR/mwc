import React, { useState } from "react";
import "./Chat.css";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className={"chat-container"}>
      <img className={"chat-bubble"} src="/chat-bubble.png" alt="" />
      <div className={"msg-container"}>
        {messages.map((msg) => (
          <div className={"msg"} key={msg}>
            <div className={"chat-header"}>
              <img className={"avatar"} src="/avatar.png" alt="" />
              <h3 className={"user"}>You</h3>
            </div>
            <p className={"chat"}>{msg}</p>
          </div>
        ))}

        <div className={"footer"}>
          <textarea
            className={"input"}
            placeholder={"Write your comment..."}
            value={input}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
          <div
            style={{ backgroundImage: `url('/send.svg')` }}
            className={"send"}
            onClick={handleSend}
          ></div>
        </div>
      </div>
    </div>
  );
};
