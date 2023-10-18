import React, { useEffect, useState } from "react";
import ServicesCard from "../../components/ServicesComponents/ServicesCard";
import Banner from "../../components/ServicesComponents/ServicesBanner";
import "./style.css";
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
    <div style={{overflow:'hidden'}}>
      <div>
        <Banner />
				<div className="servicesCardContainer">
				<div className="servicesCardWrapper">
          {services &&
            services.data.map((service, i) => (
              <ServicesCard service={service} key={i} />
            ))}
        </div>

				</div>
      
      </div>
    </div>
  );
}
