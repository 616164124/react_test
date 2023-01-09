import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./01props.css";
class PerentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form action="http://www.baidu.com">
          <div className="child">
            <h1>hello</h1>
            <button onClick={this.parentEvent}>提交</button>
          </div>
        </form>
        {/**使用箭头函数传递多个参数的方式*/}
        <button
          onClick={(e) => {
            this.parentEvent1("msg:hello", e);
          }}
        >
          提交
        </button>
        {/**不使用es6箭头函数传递多个参数的方式,需要使用bind进行绑定*/}
        <button
          onClick={function (e) {
            this.parentEvent1("msg:hello", e);
          }.bind(this)}
        >
          提交
        </button>
      </div>
    );
  }
  parentEvent = (e) => {
    e.preventDefault();
    console.log(e);
  };
  parentEvent1 = (msg, e) => {
    console.log(msg);
  };
}

export default PerentCom;
ReactDOM.render(<PerentCom />, document.getElementById("root"));
// If yReact.ou want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or se
reportWebVitals();
