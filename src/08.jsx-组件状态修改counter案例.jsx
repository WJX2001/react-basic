import React from "react"

// 通过类组件修改状态的方式 counter
class Counter extends React.Component {

  // 通过state定义组件状态
  state = {
    count: 0
  }

  // 事件回调函数
  changeCount = () => {
    // 修改state
    // react 这个体系下 `数据不可变`
    // value 永远都是上一次count值 +1
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return(
      <button onClick={this.changeCount}>{this.state.count}click</button>
    )
  }
}


// 根组件
function App() {
  return (
    <div>
      {/* 渲染Counter */}
      <Counter/>
    </div>
  )
}

export default App