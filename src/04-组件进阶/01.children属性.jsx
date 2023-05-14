import React from "react";


// 渲染列表
function ListItem({children}) {
    // 函数
    // children()
    return (
        <div>ListItem {children}</div>
    )
}

class App extends React.Component {

    render() {
        return (
            <div>
                <ListItem>
                    {/* <div>this is child</div> */}
                    {/* {() => console.log(123)} */}
                    {/* {<div><p>{'this is p'}</p></div>} */}
                    
                </ListItem>
            </div>
        )
    }
}

export default App