import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function ServicesCard({ service }) {
	const history = useNavigate();
	const handleClick = () => {
		history('/сontacts');
  };
  return (
    <div onClick={handleClick} className="servicesCard">
      <h1>{service.name}</h1>
      <p>{service.discription}</p>
      <p>{service.price_range}</p>
    </div>
  );
}
