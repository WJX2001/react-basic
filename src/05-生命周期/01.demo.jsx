import React from "react";

class Test extends React.Component{
    // 如果数据是组件的状态需要去影响视图 定义到state中 
    // 而如果我们需要的数据状态 不和视图绑定 定义成一个普通的实例属性就可以
    // state中尽量保持精简
    timer = null
    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('定时器开启')    
        },1000) 
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        // 清理定时器
        clearInterval(this.timer)

    }
    render() {
        return <div>test</div>
    }
}

class App extends React.Component {

    constructor() {
        super()
        console.log('constructor')
    }

    state = {
        count:0,
        flag:true
    }

    componentDidMount () {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    clickHandler = () => {
        this.setState({
            count: this.state.count+1,
            flag: !this.state.flag
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                this is div 
                <button onClick={this.clickHandler}>{this.state.count}</button>
                {/* 通过一个数据状态的切换，让Test组件进行销毁重建 就会发生组件卸载 */}
                {this.state.flag ? <Test/> : null} 
            </div>
        )
    }
}

export default App