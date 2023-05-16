
// 1. 调用createContext 方法
// 2. 通过顶层组件包裹一下 Context.Provider
// 3. 底层组件 useContext(createContext返回的对象)

// context如果要传递的数据 只需要在整个应用初始化的时候传递一次就可以（静态数据）
// 写入index.js中

// 如果context需要传递数据 并且将来还需要对数据做修改 底层组件也需要跟着一起变
// 写到App.js中


import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

function ComA() {
  const count = useContext(Context)
  return (
    <div>
      this is ComA
      <br />
      app传过来的数据为: {count}
      <ComC />
    </div>
  )
}

function ComC() {
  const count = useContext()
  return (
    <div>
      this is ComC
      <br />
      app传过来的数据为{count}
    </div>
  )
}

function App() {
  const [count,setCount] = useState(20)
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button onClick={() => {setCount(count+1)}}>+</button>
      </div>
    </Context.Provider>
  )
}

export default App
