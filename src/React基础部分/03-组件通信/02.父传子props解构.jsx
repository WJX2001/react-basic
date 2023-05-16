


import React from "react"
// App 父组件   Son 子组件

// 函数式的Son
function SonF(props){
    // props 是一个对象， 里面存着通过父组件传入的所有数据
    console.log(props)
    // 解构赋值可以吗？会有什么影响 可以解构
    const {list,userInfo,getMsg,child} = props
    return (
        <div>
            我是函数组件,
            {list.map(item => <p key={item}>{item} </p> )}
            {userInfo.name}
            <button onClick={getMsg}>按钮</button>
            {child}
         </div>
    )

    // return (
    //     <div>
    //         我是函数组件,
    //         {props.list.map(item => <p key={item}>{item} </p> )}
    //         {props.userInfo.name}
    //         <button onClick={props.getMsg}>按钮</button>
    //         {props.child}
    //      </div>
    // )
}
 // 这里写的就是原生的函数语法 props也是一个普通的js对象
 // 所以原生支持的写法，这里都是可以写

// 父组件
class App extends  React.Component{
    state = {
        list:[1,2,3],
        userInfo:{
            name:'cp',
            age:30
        }
    }

    getMsg = () => {
        console.log('父组件中的函数')
    }
    render(){
        return (
            <div>
                {/* 子组件身上绑定属性 属性名可以自定义 保持语义化 */}
                <SonF  
                list={this.state.list} 
                userInfo ={this.state.userInfo} 
                getMsg = {this.getMsg} 
                child = { <span>this is span</span> } />
            </div>
        )
    }
}



export default App