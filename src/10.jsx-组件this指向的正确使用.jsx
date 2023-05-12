import React from "react"

// this有问题的写法
class Test extends React.Component{

  constructor() {
    super()
    // 使用bind 强行修正我们的this指向
    // 相当于在类组件初始化的阶段 就可以把回调函数的this修正
    // 永远指向当前组件实例对象
    this.handler = this.handler.bind(this)
  }
  handler () {
    console.log(this)
    // this.setState去修改数据 就会报错，因为this指向undifined

  }

  render() {
    // render函数中this已经被react内部做了修正
    // 这里的this就是指向当前的组件实例对象
    // 箭头函数中 this直接沿用 所以也是指向当前组件的实例对象
    console.log('父级函数中this指向为：',this)
    return(
      // 如果不同constructor做修正 直接可以在事件绑定的位置
      // 通过箭头函数的写法 直接沿用父函数中的this指向也是ok的
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