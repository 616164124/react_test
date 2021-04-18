import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

//函数式组件
function Children() {
//样式
let color = {
  backgroundColor: "#5D90AB",
  borderRadius: "5px",
  display: "inline-block",
  width: "140px",
  height: "50px",
  color: "#fff",
  border: "1px #666 solid",
};
  let title = <h2>hello</h2>;
  let weather = "下雨";
  //条件判断
  let isGo = weather === "下雨" ? "不出门" : "出门";
  return (
    <div style={color}>
      {title}
      <h1>hello 函数式组件</h1>
      <span>{isGo}</span>
    </div>
  );
}

// 类组件
class HelloWorld extends React.Component {
  //将css写入组件中
  render() {
    // let style = {
    //   backgroundColor: "#5D90AB",
    //   borderRadius: "5px",
    //   display: "inline-block",
    //   width: "140px",
    //   height: "50px",
    //   color:  "#",
    //   border: "1px #666 solid",
    // };
    return (
      <div >
        {this.props.title}
        <h1>hello 类组件</h1>
        <span>{this.props.isGo}</span>
        <Children title="hfk" />
        {/* <style>{ style}</style> */}
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
