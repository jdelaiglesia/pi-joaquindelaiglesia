import "../styles/home.css";

import Navbar from "../components/Navbar";

const Error404 = () => {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <Navbar />
      </div>
      <div className="errorBody">
        <img src="/404.png" alt="Error 404" srcSet="" />
      </div>
    </div>
  );
};
export default Error404;
