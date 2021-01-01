import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

//函数式组件
function Children() {
  let title = <h2>hello</h2>;
  let weather = "下雨";
  //条件判断
  let isGo = weather === "下雨" ? "不出门" : "出门";
  return (
    <div>
      {title}
      <h1>hello 函数式组件</h1>
      <span>{isGo}</span>
    </div>
  );
}

// 类组件
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {this.props.title}
        <h1>hello 类组件</h1>
        <span>{this.props.isGo}</span>
        <Children title="hfk" />
      </div>
    );
  }
}

export default HelloWorld;

ReactDOM.render(
  <HelloWorld title="标题" isGo="下雨" />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analy <div>

reportWebVitals();
