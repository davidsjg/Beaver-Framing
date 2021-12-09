import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./Header.module.css";

import { useSelector } from "react-redux";

function Header2() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className={styles["mainContain"]}>
      <div className={styles["leftHeader"]}>
        <img src="/images/beaver.jpeg" alt="" />
      </div>

      <div className={styles["centerHeader"]}>
        <h2>Beaver Framing</h2>
      </div>

      <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
          <a>
            <span style={{ marginRight: -9 }}>Home</span>
          </a>
        </div>
        <div className={styles["navMenu"]}>
          <a>
            <span
            // style={{ paddingRight: 15 }}
            >
              Log In
            </span>
          </a>
        </div>
        <div
          className={styles["customMenu"]}
          onClick={() => setBurgerStatus(true)}
        >
          <MenuIcon />
        </div>
      </div>

      <BurgerNav show={burgerStatus}>
        {/* <CloseWrapper></CloseWrapper> */}
        <div className={styles["closeWrapper"]}>
          {" "}
          <div
            className={styles["customClose"]}
            onClick={() => setBurgerStatus(false)}
          >
            <CloseIcon />
          </div>
        </div>
        <li>
          <a>Frame It</a>
        </li>
        <li>
          <a>Upload Image</a>
        </li>
        <li>
          <a>How It Works</a>
        </li>
        <li>
          <a>Testimonials</a>
        </li>
      </BurgerNav>
    </div>
  );
}

export default Header2;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 200px;
  z-index: 15;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
