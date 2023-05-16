import React from "react";
// 里面有各种各样的内置校验规则
import PropTypes  from "prop-types"

function Test() {
    return (
        <div>
            this is test
        </div>
    )
}

// 给组件添加校验规则
Test.propTypes = {
    // 定义规则
    list: PropTypes.array.isRequired   // 限定这里的list参数的类型必须是数组类型
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Test />
            </div>
        )
    }
}

export default App