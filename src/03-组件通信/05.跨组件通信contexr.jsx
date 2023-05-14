
import React,{createContext} from "react";
// App -> A -> C
// App数据 -> C
// 注意事项：
// 1. 上层组件和下层组件关系是相对的俄，只要存在就可以使用 通常我们通过app作为数据提供方
// 2. 这里涉及到的语法都是固定的，有两处，提供的位置 value提供数据  获取的位置 {value=> 使用value 做什么都可以}


// 1.导入createContext 方法并执行 结构提供者和消费者
const {Provider,Consumer} = createContext()

function ComA() {
    return (
        <div>
            this is ComA
            <ComC/>
        </div>
    )
}

function ComC() {
    return (
        <div>
            this is ComC 
            {/* 3.通过Consumer使用数据 */}
            <Consumer>
                {value =><span>{value} </span>}
            </Consumer>
        </div> 
    )
}


class App extends React.Component{
    state = {
        message: 'this is message'
    }
    render() {
        return (
            // 2. 使用provider包裹根组件
            <Provider value= {this.state.message}>
                <div>
                    <ComA/>
                </div>
            </Provider>
            
        )
    }
}

export default App