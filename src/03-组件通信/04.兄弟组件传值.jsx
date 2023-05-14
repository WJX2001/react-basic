
import React from "react";

// 目标： B组件中的数据传给A
// 技术方案： 
// 1. 先把B中的数据通过子传父   传给App
// 2. 再把App接收到的Son中的数据 通过父传子 传给A

function SonA(props){
    return (
        <div>this is A {props.sendAMsg}</div>
    )
}
function SonB(props){
    const bMsg = '这里是来自于B组件中的数据'
    return (
        <div>this is B <button onClick={()=> props.getBmsg(bMsg)}>发送数据</button></div>
    )
}


class App extends React.Component{
    state = {
        sendAMsg:'测试一下父传子初始值'
    }
    // 声明一个B组件传给app的方法
    getBmsg = (msg) => {
        console.log(msg)
        // 把msg数据交给sendA
        this.setState({
            sendAMsg: msg
        })
    }
    render() {
        return (
            <div>
                <SonA sendAMsg ={this.state.sendAMsg} />
                <SonB getBmsg={this.getBmsg} />
            </div>
        )
    }
}

export default App