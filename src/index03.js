import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// let h1 = <h1>nihao</h1>;
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//显示当前时间
// function clock() {
//   let time = new Date().toLocaleTimeString();
//   //h1中必须只有一个根元素（当前h1中的根元素为<h1></h1>）
//   let h1 = <h1>当前时间为{time}</h1>;
//   ReactDOM.render(h1, document.getElementById("root"));
// }
// clock();
//父子组件的传值
// //函数组件
function Clocl(props) {
  return (
    <div>
      <h1>当前的时间为{props.date.toLocaleTimeString()}</h1>
    </div>
  );
}
//组件Clocl
function run() {
  ReactDOM.render(<Clocl date={new Date()} />, document.getElementById("root"));
}
setInterval(run, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
