import React, { useEffect, useState } from "react";
import ServicesCard from "../../components/ServicesComponents/ServicesCard";
import ServicesDescription from "../../components/ServicesComponents/ServicesDescription";
import Banner from "../../components/ServicesComponents/ServicesBanner";
import { PCrepairApi } from "../../api";

export default function Services() {
  const [services, setServices] = useState();
  useEffect(() => {
    PCrepairApi.getAllServices()
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <Banner />
        {services &&
          services.data.map((service, i) => (
            <ServicesCard service={service} key={i} />
          ))}
        <ServicesDescription />
      </div>
    </div>
  );
}
