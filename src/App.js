import "./App.css";
import Ama from "./Components/Ama";
import BuySubscription from "./Components/BuySubscription";
import BookTicket from "./Components/BookTicket";
import Shopping from "./Components/Shopping";
import Home from "./Components/Home";

import { Routes, Route } from "react-router-dom";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
