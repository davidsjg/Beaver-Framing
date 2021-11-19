import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Image from "../../images/frames1.jpeg";
import styled from "styled-components";

function Home() {
  //   let tempBack = "frame1";

  const [tempBack, setTempBack] = useState("frame1");

  useEffect(() => {
    timerBounce();
  }, []);

  const timerBounce = (backgroundImage) => {
    const timer = setTimeout(() => {
      setTempBack("frame1");
      timerBounce2();
    }, 10000);
  };
  const timerBounce2 = (backgroundImage) => {
    const timer2 = setTimeout(() => {
      setTempBack("frame2");
      timerBounce3();
    }, 10000);
  };
  const timerBounce3 = (backgroundImage) => {
    const timer2 = setTimeout(() => {
      setTempBack("frame3");
      timerBounce4();
    }, 10000);
  };
  const timerBounce4 = (backgroundImage) => {
    const timer2 = setTimeout(() => {
      setTempBack("frame4");
      timerBounce();
    }, 10000);
  };

  return (
    <div>
      <div className={styles[`${tempBack}`]}></div>
      {/* <Container></Container> */}
    </div>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 120px);
  background-image: url("/images/frames1.jpeg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;
