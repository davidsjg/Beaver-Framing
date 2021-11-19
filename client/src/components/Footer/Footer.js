import React from "react";
import styled from "styled-components";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <Container>
        <Item>Sup</Item>
        <Item>Sup</Item>
        <Item>Sup</Item>
        <Item>Sup</Item>
        <Item>Sup</Item>
        <Item>Sup</Item>
      </Container>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  min-height: 100px;
  display: grid;
  grid-template-columns: [first] 1fr [line2] 1fr [line3] 1fr;
  grid-template-rows: [row1-start] 80% [row1-end row2-start] 20% [row2-end];
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
`;
