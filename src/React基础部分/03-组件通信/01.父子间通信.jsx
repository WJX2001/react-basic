


import React from "react"
// App 父组件   Son 子组件

// 函数式的Son
function SonF(props){
    // props 是一个对象， 里面存着通过父组件传入的所有数据
    return (
        <div>我是函数组件,{props.msg} </div>
    )
}
 
// 类组件的Son
class SonC extends React.Component{
    render() {
        return (
            // 类组件必须通过this关键词 获取这里的props是固定的
            <div>我是类组件,{this.props.msg} </div>
        )
    }
}

// 父组件
class App extends  React.Component{
    state = {
        message: 'this is message'
    }
    render(){
        return (
            <div>
                {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
                <SonF  msg={this.state.message}/>
                <SonC  msg={this.state.message}/>
            </div>
        )
    }
}



export default App