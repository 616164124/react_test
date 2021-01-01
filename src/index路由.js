import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

//route 开发
function Home() {
  return (
    <div><h1>首页</h1></div>
  );
}

function Produce() {
  return (
    <div>
      <h1>Produce</h1>
    </div>
  );
}

function Me(props) {
  console.log(props);
  return (
    <div>
      <h1>Me</h1>
    </div>
  );
}

function News(props) {
  console.log(props);
  return (
    <div>
      <h1>news:{props.match.params.id }</h1>
    </div>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div>
        {/*  basename为路径默认的根添加一个admin*/}
        <Router basename="/admin">
          <div>
            {/* link中还有其他的属性 如 replace */}
            <Link to="/">Home</Link>
            <Link to="/produce">Produce</Link>
            <Link to="/me">个人中心</Link>
            {/* 将234524传入 News组将中的props中 */}
            <Link to="/new/234524">新闻</Link>
          </div>
          {/* route显示对应link中组件内容 */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/produce" exact component={Produce}></Route>
          <Route path="/me" exact component={Me}></Route>
          <Route path="/new/:id" exact component={News}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App/>,document.getElementById("root"))
reportWebVitals();
