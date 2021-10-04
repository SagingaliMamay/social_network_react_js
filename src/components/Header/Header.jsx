import React from "react";
import style from "./Header.module.css";

//component is the function who return the jsx
const Header = () => {
  return (
    <header className={style.head}>
      
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySqSjkuHOm1R4Mi8aXrxp7ziUgPJThkM7VA&usqp=CAU"
          alt=""
        />
      
    </header>
  );
};
export default Header;
