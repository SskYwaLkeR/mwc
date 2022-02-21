import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1 className={"title"}>Welcome to home page</h1>
      <h3 className={"subtitle"}>Navigate to :</h3>
      <ul className={"list"}>
        <li>
          <Link to="/ama">AMA</Link>
        </li>
        <li>
          <Link to="/shopping">Shopping</Link>
        </li>
        <li>
          <Link to="/buy-subscription">Buy Subscription</Link>
        </li>
        <li>
          <Link to="/book-ticket">Book Ticket</Link>
        </li>
      </ul>
    </div>
  );
};
