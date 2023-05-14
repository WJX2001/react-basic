

import React from "react";

// App Son
// 父传子 props 函数
// 子传父: 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参
// 传入即可


function Son(props){
    const {getSonMsg} = props
    function clickHandler () {
        const sonMsg = '来自子组件中的数据'
        getSonMsg(sonMsg)
    }
    return (
        <div>this is son 
            <button onClick={clickHandler}>click</button> 
        </div>
    )
}


class App extends React.Component{

    // 准备数据
    state = {
        list: [1,2,3]
    }
    // 1.准备一个函数 传给子组件
    getSonMsg = (sonMsg) => {
        console.log(sonMsg)
    }

    render() {
        return (
            <div>
                <Son getSonMsg={this.getSonMsg} />
            </div>
        )
    }
}

export default App