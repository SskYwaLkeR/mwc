import "./App.css";
import Ama from "./Components/Ama";
import BuySubscription from "./Components/BuySubscription";
import BookTicket from "./Components/BookTicket";
import Shopping from "./Components/Shopping";
import Home from "./Components/Home";

import { Routes, Route } from "react-router-dom";
import Recipe from "./Components/Recipe";
import ChatHome from "./Components/ChatHome";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/ama"} element={<Ama />} />
          <Route path={"/shopping"} element={<Shopping />} />
          <Route path={"/book-ticket"} element={<BookTicket />} />
          <Route path={"/buy-subscription"} element={<BuySubscription />} />
          <Route path={"/chat"} element={<ChatHome />} />
          <Route path={"/recipe"} element={<Recipe />} />
          <Route path={"/chat-room"} element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
