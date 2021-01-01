import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./01props.css";
// If yReact.ou want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or se

class PerentCom extends Component {
  constructor(props) {
    super(props);
    this.state = { meg: "hello" };
    console.log("constructor构造函数");
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log("componentWillMount组件将要渲染");
  }
  componentDidMount() {
    console.log("componentDidMount组件渲染完毕");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps组件将要接收新的state和props");
  }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate() {
    console.log("componentWillUpdate组件将要更新");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate组件更新完毕");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount移除");
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default PerentCom;
ReactDOM.render(<PerentCom />, document.getElementById("root"));
reportWebVitals();
