import React from "react";

class SearchCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      seach: "",
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.changEvent}
          onKeyDown={this.searchEven}
          value={this.state.value}
        />
        <div>
          <h1>结果：</h1>
          {this.state.seach}
        </div>
      </div>
    );
  }
  changEvent = (e) => {
    // console.log(e.target.value); //获取输入框中的值
    //console.log(this.props.dataJson);
    this.setState({
      value: e.target.value,
    });
  };
  searchEven = (e) => {
    if (e.keyCode === 13) {
      console.log("13");
      console.log(this.state.value);
      console.log(this.props.dataJson);
      // eslint-disable-next-line array-callback-return
      let seach = this.props.dataJson.map((item, key) => {
        //  console.log(" -----" + (item.name + "").indexof(this.state.value + "")); //错误写法
        //类似like的用法必须下面这样写  
        let name = item.name + "";
        let newvalue = this.state.value + "";
        let result = name.indexOf(newvalue);
        if (result >= 0) {
          return (
            <ul>
              <h1>{key}</h1>
              <li>ProID:{item.ProID}</li>
              <li>name：{item.name}</li>
              <li>ProSort：{item.ProSort}</li>
              <li>ProRemark：{item.ProRemark}</li>
            </ul>
          );
        } else {
          if (item.ProID === 34 && result > 0) {
            return <h2>没有找到！！！</h2>;
          }
        }
      });
      this.setState({
        seach: seach,
      });
    }
  };
}

export default SearchCom;
