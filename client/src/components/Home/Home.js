import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Image from "../../images/frames1.jpeg";
import styled from "styled-components";

function Home() {
  //   let tempBack = "frame1";

  const [tempBack, setTempBack] = useState("frames1.jpeg");

  useEffect(() => {}, []);

  return (
    <div>
      {/* <div className={styles[`${tempBack}`]}></div> */}
      <Container bgImage={tempBack}>
        <div className={styles["myWrap"]}>
          <p>Frame it UP</p>
        </div>
        <div className={styles["myWrap"]}>
          <p>How it Works</p>
        </div>
        <div className={styles["myWrap"]}>
          <p>Upload Image</p>
        </div>
        <div className={styles["myWrap"]}>
          <p>Custom Frames</p>
        </div>
        <div className={styles["myWrap"]}>
          <p>Gift Ideas</p>
        </div>
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
  align-items: center;
  grid-gap: 25px;
`;
