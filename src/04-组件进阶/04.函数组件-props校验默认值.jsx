import React from "react";
// 里面有各种各样的内置校验规则
// 函数组件默认值 1.使用defaultProps 2.函数参数默认值（推荐的方案）
// 区别：第一种在用的时候组件内部已经有了pageSize这个prop 第二章只有在传递的时候组件内部才有prop
import PropTypes  from "prop-types"

function Test({pageSize = 10}) {
    return (
        <div>
            this is test
            {pageSize}
        </div>
    )
}

// 给组件添加校验规则
Test.propTypes = {
    // 定义规则
    list: PropTypes.array.isRequired   // 限定这里的list参数的类型必须是数组类型
}
// Test.defaultProps = {
//     pageSize: 10  // 如果给我传pageSize 就以传入的为主，如果不传就是10 
// }

class App extends React.Component {

    render() {
        return (
            <div>
                <Test pageSize={20}/>
            </div>
        )
    }
}

export default App