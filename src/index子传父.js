import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./01props.css";

//子传父
class PertenCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childrenData: "",
    };
  }
  render() {
    return (
      <div>
        <h1>子元素传给父的数据:{this.state.childrenData}</h1>
        <ChildCom setChildData={this.setChildData} />
      </div>
    );
  }
  setChildData = (data) => {
    console.log(data);
    this.setState({
      childrenData: data,
    });
  };
}
export default PertenCom;

class ChildCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "hello" };
  }
  render() {
    return (
      <div>
        {/**方式一*/}
        <button onClick={this.sendData}>传递hello给父元素</button>
        {/**方式二 */}
        <button
          onClick={() => {
            this.props.setChildData("直接返回给父元素的内容");
          }}
        >
          直接返回给父元素的内容
        </button>
      </div>
    );
  }
  //箭头函数就不需要bind进行绑定了
  //箭头函数为es6特性
  sendData = () => {
    //将元素传递给到父元素，实际就是调用父元素传递进来的父元素函数
    // console.log(this.state.msg);
    this.props.setChildData(this.state.msg);
  };
}

ReactDOM.render(<PertenCom />, document.getElementById("root"));
// If yReact.ou want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or se
reportWebVitals();
