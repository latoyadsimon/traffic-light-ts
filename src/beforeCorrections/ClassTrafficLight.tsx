import { Component } from "react";

export class ClassTrafficLight extends Component {
    
    state = {
        lightColor: "green",
    }
    
    lightChange = () => {
        switch(this.state.lightColor) {
            case "green":
                this.setState({lightColor: "yellow"});
                break;
            case "yellow":
                this.setState({lightColor: "red"});
                break;
            case "red":
                this.setState({lightColor: "green"});
                break;
            default:
                console.log("Good job, you broke a stop light. -slow clap-");
                break;
        }
    }

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
            {/* Background color can be black | yellow | red | green */}
            <div className={`circle ${this.state.lightColor === "red" ? "red" : "black"}`}></div> 
            <div className={`circle ${this.state.lightColor === "yellow" ? "yellow" : "black"}`}></div>
            <div className={`circle ${this.state.lightColor=== "green" ? "green" : "black"}`}></div>
        </div>
        <button className="next-state-button" onClick={this.lightChange}>Next State</button>
      </div>
    );
  }
}
