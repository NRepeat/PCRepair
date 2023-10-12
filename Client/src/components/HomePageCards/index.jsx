import React from "react";
import MainCard from "./MainCard";
import SubCard from "./SubCard";

export default function HomePageCards() {
  return (
    <div>
      <MainCard />
      <SubCard  header={"Hardware problems?"} paragraph={"Lorem"}  link={'services'}/>
    </div>
  );
}
