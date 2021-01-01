import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./01props.css";
//列表渲染
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { title: "第一节课", content: "数学" },
        { title: "第二节课", content: "语文" },
        { title: "第三节课", content: "体育" },
      ],
    };
  }
  clickEvent = (index, title, e) => {
    alert(index + 1 + "---" + title);
  };
  render() {
    let strArr = this.state.list.map((item, index) => {
      return (
        <li
          key={index}
          onClick={(e) => {
            this.clickEvent(index, item.content, e);
          }}
        >
          <ul>
            {index}:{item.title}
          </ul>
          <ul>{item.content}</ul>
        </li>
      );
    });
    return (
      <div>
        <h1>近期课程安排</h1>
        {strArr}
      </div>
    );
  }
}

export default Welcome;
ReactDOM.render(<Welcome />, document.getElementById("root"));
// If yReact.ou want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or se
reportWebVitals();
