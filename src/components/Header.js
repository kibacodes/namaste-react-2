import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Royal Foods Design" className="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
