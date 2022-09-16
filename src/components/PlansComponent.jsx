import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./PlansComponent.css";

function PlansComponent() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Basic",
      desc: "720p",
      active: false,
    },
    {
      id: 2,
      name: "Standard",
      desc: "1080p",
      active: false,
    },
    {
      id: 3,
      name: "Premium",
      desc: "4K + HDR",
      active: true,
    },
  ]);
  const [active, setActive] = useState(
    data.findIndex((item) => item.active == true)
  );

  const handleSubs = (index) => {
    const activeIndex = data.findIndex((item) => item.active == true);
    data[activeIndex].active = false;
    data[index].active = true;
    setActive(index);
    console.log(data);
  };

  return (
    <div className="plans">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={item.active ? "plan__selected" : "plans__plan"}
        >
          <div className="plans__info">
            <h5>{item.name}</h5>
            <h6>{item.desc}</h6>
          </div>
          <button
            onClick={() => handleSubs(index)}
            disabled={item.active}
            className={index == active ? "disabled" : "plan__select "}
          >
            {item.active ? "Selected Plan" : "Subscribe"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlansComponent;
