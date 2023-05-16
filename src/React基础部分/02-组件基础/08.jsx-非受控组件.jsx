import React,{createRef} from "react"


class InputComponent extends React.Component {

    // 这个实例属性是可以自定义的 语义化即可
    msgRef =  createRef()

    getValue = () => {
        // 通过msgRef 获取input value的值
        console.log(this.msgRef.current.value)
    }
    // 产出UI模板结构
    render() {
        return (
            <>
                <input 
                type="text" 
                ref={this.msgRef}/>
                <button onClick={this.getValue}>点击获取输入框的值</button>
            </>
        )
    }
}

function App() {
    return (
        <div className="App">
                <InputComponent/>
        </div>
    )
}

export default App