import React, { createContext, useContext, useState } from 'react'

import Context from './context'


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
    const count = useContext(Context)
  return (
    <div>
        app传过来的数据为: {count}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(20)
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          +
        </button>
      </div>
    </Context.Provider>
  )
}

export default App
