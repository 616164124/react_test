import React,{Component} from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route} from "react-router-dom";
//重定向未完成
function Logininfo(props) {
   console.log(props.loginState);
  return (
  
<h1>11</h1>
);
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>
        <Route path="/" exact component={() => { <h1>首页</h1> }}></Route>
        <Route path="/form" exact component={() => { <h1>表单验证</h1> }}></Route>
        <Route path="/login" exact component={()=>{<h1>登录</h1>}}></Route>
      </Router>
     );
  }
}
 
export default App;



ReactDOM.render(<Logininfo/>,document.getElementById("root"))



reportWebVitals()