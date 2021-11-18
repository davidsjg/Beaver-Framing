import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./Header2.module.css";

import { useSelector } from "react-redux";

function Header2() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <div className={styles["leftHeader"]}>
        <img src="/images/beaver.jpeg" alt="" />
      </div>
      <div className={styles["centerHeader"]}>
        <h2>Beaver Framing</h2>
      </div>
      <div className={styles["rightHeader"]}>
        <NavMenu>
          <a>
            <span>Home</span>
          </a>
        </NavMenu>
        <NavMenu>
          <a>
            <span>Log In</span>
          </a>
        </NavMenu>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </div>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
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
    </Container>

    // <Container>
    //   <div className={styles["leftHeader"]}>
    //     <img src="/images/beaver.jpeg" alt="" />
    //   </div>

    //   <div className={styles["centerHeader"]}>BEAVER FRAMING</div>

    //   <div className={styles["rightHeader"]}>
    //     <NavMenu>
    //       <a>
    //         <span>Home</span> <span>Log In</span>
    //       </a>
    //     </NavMenu>
    //     <CustomMenu onClick={() => setBurgerStatus(true)} />
    //   </div>

    //   <BurgerNav show={burgerStatus}>
    //     <CloseWrapper>
    //       <CustomClose onClick={() => setBurgerStatus(false)} />
    //     </CloseWrapper>
    //     <li>
    //       <a>Frame It</a>
    //     </li>
    //     <li>
    //       <a>Upload Image</a>
    //     </li>
    //     <li>
    //       <a>How It Works</a>
    //     </li>
    //     <li>
    //       <a>Testimonials</a>
    //     </li>
    //   </BurgerNav>
    // </Container>
  );
}

export default Header2;

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const HeaderSection = styled.div``;

const NavMenu = styled.div`
  display: flex;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
      padding-right: 5px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: black;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

// const Container = styled.div`
//   min-height: 60px;
//   position: fixed;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 20px;
//   top: 0;
//   left 0;
//   right: 0;
// z-index: 1;
// `;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
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

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
