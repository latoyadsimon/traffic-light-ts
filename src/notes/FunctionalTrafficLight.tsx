import { useState } from "react";


export const FunctionalTrafficLight = () => {

  const [lightColor, setLightColor] = useState("green");


  // Refactor to use Switch Statement
  // https://www.w3schools.com/js/js_switch.asp

//   const lightChange = () => {
//     if(lightColor === "green") {
//         setLightColor("yellow");
//     } else if (lightColor === "yellow") {
//         setLightColor("red");
//     } else if(lightColor === "red") {
//         setLightColor("green");
//     }
//     }


    const lightChange = () => {
           switch(lightColor) {
    case "green":
        setLightColor("yellow");
        break;
    case "yellow":
        setLightColor("red");
        break;
    case "red":
        setLightColor("green");
        break;
    default:
        console.log("Good job, you broke a stop light. -slow clap-");
        break;
    }
    }


  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle + ${lightColor === "red" ? "red" : "black"}`}></div> 
        <div className={`circle + ${lightColor === "yellow" ? "yellow" : "black"}`}></div>
        <div className={`circle + ${lightColor=== "green" ? "green" : "black"}`}></div>
      </div>
      <button className="next-state-button" onClick={lightChange}>Next State</button>
    </div>
  );
};



