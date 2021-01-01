import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Tabcss from "./Tab.css";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    //设置状态，数据
    this.state = { c2: "", c1: "" };
  }
  clickEvent(e) {
    console.log("clickEvent");
    console.log(e.target);
    let index = e.target.dataset.index;
    if (index) {
      this.setState({
        c1: "content active",
        c2: "content",
      });
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>内容一</button>
        <button onClick={this.clickEvent}>内容二</button>
        <div className="content" active>
          <h1>内容1</h1>
        </div>
        <div className="content">
          <h1>内容2</h1>
        </div>
      </div>
    );
  }
}

export default Tab;
ReactDOM.render(<Tab />, document.getElementById("root"));
// If yReact.ou want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or se
//设置状态，数据nd to an analy <div>

reportWebVitals();
