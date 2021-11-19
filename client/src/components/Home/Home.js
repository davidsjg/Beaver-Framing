import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Home() {
  const [tempBack, setTempBack] = useState("frames.jpeg");

  useEffect(() => {}, []);

  const mouseEnter1 = () => {
    setTempBack("frames1.jpeg");
  };

  const mouseLeave1 = () => {
    setTempBack("frames.jpeg");
  };
  const mouseEnter2 = () => {
    setTempBack("frames2.jpeg");
  };

  const mouseLeave2 = () => {
    setTempBack("frames.jpeg");
  };
  const mouseEnter3 = () => {
    setTempBack("frames8.jpeg");
  };

  const mouseLeave3 = () => {
    setTempBack("frames.jpeg");
  };
  const mouseEnter4 = () => {
    setTempBack("frames9.jpeg");
  };

  const mouseLeave4 = () => {
    setTempBack("frames.jpeg");
  };
  const mouseEnter5 = () => {
    setTempBack("frames4.jpeg");
  };

  const mouseLeave5 = () => {
    setTempBack("frames.jpeg");
  };

  return (
    <div>
      {/* <div className={styles[`${tempBack}`]}></div> */}
      <Container bgImage={tempBack}>
        <Fade side>
          {/* <div className={`${styles["myWrap"]} ${styles["frame1"]}`}> */}
          <Wrap onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}>
            <p>Frame it UP</p>
          </Wrap>
          {/* </div> */}
          {/* <div className={styles["myWrap"]}> */}
          <Wrap onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}>
            <p>How it Works</p>
          </Wrap>
          {/* </div> */}
          {/* <div className={styles["myWrap"]}> */}
          <Wrap onMouseEnter={mouseEnter3} onMouseLeave={mouseLeave3}>
            <p>Upload Image</p>
          </Wrap>
          {/* </div> */}
          {/* <div className={styles["myWrap"]}> */}
          <Wrap onMouseEnter={mouseEnter4} onMouseLeave={mouseLeave4}>
            <p>Custom Frames</p>
          </Wrap>
          {/* </div> */}
          {/* <div className={styles["myWrap"]}> */}
          <Wrap onMouseEnter={mouseEnter5} onMouseLeave={mouseLeave5}>
            <p>Gift Ideas</p>
          </Wrap>
          {/* </div> */}
        </Fade>
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 120px);
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template: repeat(5, minmax(0, 1fr));
  display: flex;
  justify-content: center;
  align-items: baseline;
  grid-gap: 45px;
  transition: 250ms;
`;

const Wrap = styled.div`
  margin-top: 200px;
  border: 3px solid lightsteelblue;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-weight: 900;
    padding: 0 20px;
    color: black;
    // background-color: white;
    background-size: contain;
    border-radius: 2px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
      rgb(0 0 0 / 72%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: midnightblue;
    background-color: oldlace;
  }
`;
