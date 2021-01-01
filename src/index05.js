import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    //构造函数中初始化，将需要改变的数据初始化到state中
    this.state = { time: new Date().toLocaleString() };
  }
  render() {
    return (
      <div>
        <h1>当前时间为{this.state.time}</h1>
      </div>
    );
  }
  //生命周期函数，组件渲染完成时的函数
  componentDidMount() {
    setInterval(() => {
      //切勿直接修改state数据，直接state重新渲染数据
      //通过this.setState修改完数据后，并不会立即修改dom里面的内容，react会在
      //这个函数内容所有设置状态改变后，统一对比虚拟dom对象，然后在统一修改，提升性能
      //小程序也是借鉴react状态管理操作
      this.setState({
        time: new Date().toLocaleString(),
      });
    }, 1000);
  }
}

export default Clock;
ReactDOM.render(<Clock />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analy <div>

reportWebVitals();
