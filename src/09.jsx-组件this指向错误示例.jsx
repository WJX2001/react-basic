import React from "react"

// this有问题的写法
class Test extends React.Component{

  handler () {
    console.log(this)
    // this.setState去修改数据 就会报错，因为this指向undifined

  }

  render() {
    return(
      <button onClick={() => this.handler()}>click</button>
    )
  }
}



// 根组件
function App() {
  return (
    <div>
      <Test/>
      
    </div>
  )
}

export default App