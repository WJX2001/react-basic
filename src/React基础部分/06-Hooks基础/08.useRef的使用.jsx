import React,{useEffect, useRef} from "react"
// 获取组件实例 类组件
// dom对象  标签

class TestC extends React.Component {
    state = {
        name: 'test name'
    }
    getName = () => {
        return 'this is child Test'
    }
    render() {
        return (
            <div>我是类组件</div>
        )
    }
}

function App() {
    const testRef =  useRef(null)
    const h1Ref = useRef(null)

    useEffect(() => {
        console.log(testRef.current)
        console.log(h1Ref.current)
    },[])
    // useEffect回调 是在dom渲染之后还是之前？ 之后！！
    // 和vue里的watch 效果比较像 但是执行时机是不同的

    return (
        <div>
            <TestC ref={testRef}/>
            <h1 ref={h1Ref}>this is h1</h1>
        </div>
    )
}

export default App