import React from "react";
// 里面有各种各样的内置校验规则
// 类组件默认值 1.defaultProps 2.static类静态属性定义(推荐)
import PropTypes  from "prop-types"

class Test extends React.Component {
    static defaultProps = {
        pageSize:10
    }
    render() {
        return (
            <div>{this.props.pageSize} </div>
        )
    }


}

// Test.defaultProps = {
//     pageSize:10
// }


class App extends React.Component {
    render() {
        return (
            <div>
                <Test pageSize={20} />
            </div>
        )
    }
}

export default App