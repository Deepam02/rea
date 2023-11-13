import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  
  return (
    <section className="h-wrapper">
      <div class="flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={()=> {
          setmenuOpened(false); 
        }}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#res">Residencies</a>
            <a href="#value">our values</a>
            <a href="#contact">contact us</a>
            <a href="#get">get started</a>
            <button className="button">
              <a href="">contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setmenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};
export default Header;