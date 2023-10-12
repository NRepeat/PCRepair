import React from "react";
import { useNavigate } from "react-router-dom";
export default function SubCard({ header, paragraph, link }) {
  let history = useNavigate();

  const handleClick = () => {
    history(link);
  };
  return (
    <div>
      <div onClick={handleClick}>
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
