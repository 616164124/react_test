import React, { Component } from "react";
import "./day12.css";

class Day12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hua1",
    };
  }

  render() {
    return (
      <div>
        {this.state.name}
        <p onClick={this.click}>hell111o</p>
      </div>
    );
  }

  click = () => {
    console.log("ooooooooo");
  };
}

export default Day12;
