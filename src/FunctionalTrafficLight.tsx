import { useState } from "react";


export const FunctionalTrafficLight = () => {
    type trafficLight = "red" | "yellow" | "green";

  const [lightColor, setLightColor] = useState<trafficLight>("green");
  
  const lightChange = () => {
    switch(lightColor) {
        case "green":
            setLightColor("yellow");
           return;
        case "yellow":
            setLightColor("red");
           return;
        case "red":
            setLightColor("green");
           return;
        default:
            console.log("Good job, you broke a stop light. -slow clap-");
           return;
        }
    }
    
    return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${lightColor === "red" ? "red" : "black"}`}></div> 
        <div className={`circle ${lightColor === "yellow" ? "yellow" : "black"}`}></div>
        <div className={`circle ${lightColor=== "green" ? "green" : "black"}`}></div>
      </div>
      <button className="next-state-button" onClick={lightChange}>Next State</button>
    </div>
  );
};



