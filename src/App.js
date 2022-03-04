import "./App.css";
import Ama from "./Components/Ama";
import BuySubscription from "./Components/BuySubscription";
import BookTicket from "./Components/BookTicket";
import Shopping from "./Components/Shopping";
import Home from "./Components/Home";

import { Routes, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Recipe from "./Components/Recipe";

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
          <Route path={"/chat"} element={<Chat />} />
          <Route path={"/recipe"} element={<Recipe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
