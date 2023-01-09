import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import Index from "./day09/index"
// import store from "./day09/store"
// import Index from "./day10/index";
// import Day10 from "./Day10.js";
// import Day11 from "./Day11.js";
// import Day12 from "./Day12";
// import Day13 from "./Day13";
// import Day15 from "./Day15";
// import Day12_1 from "./day12/day12"
class Parent extends Component {
  render() {
    const style1 = {
      wight: "100px",
      height: "10px",
      backgroundColor: "#b12",
    };
    return (
      <div>
        {/*<Provider store={store}>*/}
        <div>
          <Index />
          <div style={style1} />
          <Day10 />
          <div style={style1} />
          <Day11 />
        </div>
        {/*</Provider>*/}
        <div style={style1}></div>
        <h1>day12</h1>
        <Day12 />
        <div style={style1}></div>
        <Day13 />
        <div style={style1}></div>
        <h1>day15</h1>
        <Day15 />
        <div style={style1}></div>
        <h1>day16</h1>
        <div style={style1}></div>
        <h1>Day12_1</h1>
        <Day12_1/>
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));
