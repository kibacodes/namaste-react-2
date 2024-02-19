import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head" tabIndex="1">
      Namaste React from JSX 🚀
    </h1>
  );
  
  const HeadingComponent = () => {
    return (
      <div className="container">
        {/* <Title />
        <Title></Title>
        {Title()} */}
        <img className="sigil" src="https://www.symbols.com/images/symbol/2206_house-stark.png" alt="stark sigil" />
        <input type="text" className="search-bar"/>
        <img className="user-icon" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="user icon" />
      </div>
    );
  };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
