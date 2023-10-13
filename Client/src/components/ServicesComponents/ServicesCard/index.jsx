import React from "react";

export default function ServicesCard({ service }) {
  return <div>{service.name}{service.discription}{service.price_range}</div>;
}
