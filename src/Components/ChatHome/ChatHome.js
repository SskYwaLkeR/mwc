import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatHome.css";

export const ChatHome = () => {
  const navigate = useNavigate();
  const handleStartChat = () => {
    navigate("/chat-room");
  };
  return (
    <div className={"chat-home-container"}>
      <img className={"chat-glance-logo"} src="/glance-logo.png" alt="" />
      <img className={"chat-hero"} src="/tv-home.png" alt="" />
      <div
        style={{ backgroundImage: `url('cta.png')` }}
        className={"chat-button"}
        onClick={handleStartChat}
      ></div>
    </div>
  );
};
