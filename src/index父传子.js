import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./01props.css";
class ParentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
    this.changeShow = this.changeShow.bind(this);
  }
  render() {
    return (
      <div>
        <button onClick={this.changeShow}>控制子元素的显示</button>
        <ChildCom isActive={this.state.isActive} />
      </div>
    );
  }
  changeShow() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }
}
class ChildCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let el = null;
    if (this.props.isActive) {
      el = " active";
    } else {
      el = "";
    }
    return (
      <div className={"content" + el}>
        <h1>我是子元素</h1>
      </div>
    );
  }
}

ReactDOM.render(<ParentCom />, document.getElementById("root"));
// If yReact.ou want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or se
reportWebVitals();
