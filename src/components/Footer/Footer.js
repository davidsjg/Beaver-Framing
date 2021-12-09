import React from "react";
import styled from "styled-components";
import styles from "./Footer.module.css";
import beaver from "../../images/beaver.jpeg";

function Footer() {
  return (
    <div>
      <Container>
        <Item1>
          <p>Frame it UP</p>
          <p>How it Works</p>
          <p>Upload Image</p>
          <p>Store</p>
          <p>Contact Us</p>
        </Item1>
        <Item2>
          <img src="/images/beaver.jpeg" alt="" />
          <span>
            <i className="fab fa-instagram fa-2x"></i>
            <i className="fab fa-facebook fa-2x"></i>
            <i className="fab fa-linkedin-in fa-2x"></i>
          </span>
        </Item2>
        <Item3>
          <h3>Want News?</h3>
          <p>Join the newsletter. We don't spam.</p>
          <span>
            <input className="email" placeholder="email@email.com"></input>
            <button>Frame me up!</button>
          </span>
        </Item3>
        <Item>Sup</Item>
        <Item>Sup</Item>
        <Item>Sup</Item>
      </Container>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  margin-top: 15px;
  min-height: 100px;
  display: grid;
  grid-row-gap: 5px;
  background-color: cornflowerblue;
  grid-template-columns: [first] 1fr [line2] 1fr [line3] 1fr;
  grid-template-rows: [row1-start] 80% [row1-end row2-start] 20% [row2-end];
`;

const Item1 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;

  font-weight: 900;
  padding: 5px 0;
  position: relative;
  background-color: white;
  letter-spacing: 1.02px;

  p {
    text-align: center;
    margin: 10px;
  }
`;

const Item2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  span {
    display: flex;

    i {
      margin: 0 10px;
      margin-bottom: 15px;
    }
  }

  img {
    height: 180px;
    width: 140px;
  }
`;

const Item3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  h3 {
    margin: 0;
  }
  p {
    margin-top: 5px;
  }

  span {
    display: flex;
    flex-direction: column;
    // border: 3px solid black;

    input {
      border: 1px solid cornflowerblue;
      broder: 0px;
      text-align: center;

      height: 30px;
    }

    button {
      border: 1px solid cornflowerblue;
      background-color: cornflowerblue;
      height: 40px;
      width: 200px;
    }
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  span {
    display: flex;
  }
`;
