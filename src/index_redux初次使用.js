import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {createStore} from 'redux'

//reducer 1:初始化数据  2.
const reducer = function (state = {num: 0}, action) {
    console.log(action);
    switch (action.type) {
        case "add":
            state.num++;
            break;
        case "decrement":
            state.num--;
            break;
        default:
            break;
    }
    return {...state} //相当于对象的copy
}
//创建仓库
const store = createStore(reducer);

function add() {
    store.dispatch({type: "add"})
}

function decrement() {
    store.dispatch({type: "decrement"})
}

//组件Count
function Count(props) {
    return (<div>
        <h1>结果为：{store.getState().num}</h1>
        <button onClick={add}>add+1</button>
        <button onClick={decrement}>dec-1</button>
    </div>)
}

//获取数据
let state = store.getState()
//修改数据（通过action来修改）
//通过仓库的store的dispatch来进行修改数据
store.dispatch({type: "add", content: {id: 1, msg: ""}});
//修改视图（监听数据的变化，重新渲染内容）
store.subscribe(() => {
    ReactDOM.render(<Count/>, document.getElementById("root"))
})
ReactDOM.render(<Count/>, document.getElementById("root"))
export default Count
reportWebVitals()
