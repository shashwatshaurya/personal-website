import React from "react";
import Hobbies from "./hobbies";
import FirstBoxComponent from "./firstBoxComponent";
import SecondBoxComponent from "./secondBoxComponent";
import FourthBoxComponent from "./fourthBoxComponent";

const Home = () => {
  return (
    <>
      <FirstBoxComponent />
      <SecondBoxComponent />
      <Hobbies />
      <FourthBoxComponent />
    </>
  );
};

export default Home;
