import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./01props.css";
import dataJson from "./data/shengfen.json"; //导入省份数据
import SearchCom from "./component/searchCom";
class PerentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson: dataJson,
      ProID: null,
    };
  }
  render() {
    console.log(this.state.dataJson);
    let arr = this.state.dataJson.map((item, key) => {
      return (
        <div>
          <ul>
            <h1>{key}</h1>
            <li>ProID:{item.ProID}</li>
            <li>name：{item.name}</li>
            <li>ProSort：{item.ProSort}</li>
            <li>ProRemark：{item.ProRemark}</li>
          </ul>
        </div>
      );
    });
    console.log(arr);
    return (
      <div>
        <div className="" key="">
          <h2>搜索栏</h2>
          <SearchCom dataJson={this.state.dataJson}></SearchCom>
          <span>=============分割线============</span>
        </div>
        <div>{arr}</div>
      </div>
    );
  }
}

export default PerentCom;
ReactDOM.render(<PerentCom />, document.getElementById("root"));
reportWebVitals();
