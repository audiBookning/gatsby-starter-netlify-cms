import { Link } from "gatsby";
import React, { useContext } from "react";
import amazingview from "../img/amazingview.svg";
import { FontContext } from "./fontContext";

const Navbar = (props) => {
  /* constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  } */
  const { textFont, setTextFont } = useContext(FontContext);

  const plusFontSize = () => {
    setTextFont(textFont + 2);
  };
  const minusFontSize = () => {
    setTextFont(textFont - 2);
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container" style={{ flex: 1, display: "flex" }}>
        <div className="navbar-brand" style={{ flex: 1 }}>
          <Link
            to="/"
            className="navbar-item"
            title="Logo"
            style={{ alignSelf: "flex-start" }}
          >
            <img
              src={amazingview}
              alt="AmazingView"
              style={{ width: "150px", maxHeight: "3rem" }}
            />
          </Link>
        </div>
        <div>
          <div
            style={{
              fontSize: "36px",
              width: "40px",
              height: "40px",
              marginRight: "4px",
              border: "1px solid",
              textAlign: "center",
              lineHeight: "40px",
              float: "left",
              cursor: "pointer",
            }}
            onClick={plusFontSize}
          >
            <span>A</span>
          </div>
          <div
            style={{
              fontSize: "20px",
              width: "40px",
              height: "40px",
              marginRight: "4px",
              border: "1px solid",
              textAlign: "center",
              lineHeight: "40px",
              float: "left",
              cursor: "pointer",
            }}
            onClick={minusFontSize}
          >
            <span>A</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
