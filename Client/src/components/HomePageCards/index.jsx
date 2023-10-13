import React from "react";
import MainCard from "./MainCard";
import SubCard from "./SubCard";

export default function HomePageCards() {
  return (
    <div>
      <MainCard />
      <SubCard
        header={"Hardware problems?"}
        paragraph={"Lorem"}
        link={"services"}
      />
      <SubCard
        header={"Software problems?"}
        paragraph={"Lorem"}
        link={"services"}
      />
      <SubCard header={"PC tune up?"} paragraph={"Lorem"} link={"services"} />
    </div>
  );
}
