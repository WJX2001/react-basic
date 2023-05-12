// jsx 样式控制
//* 1. 行内样式 - 在元素身上绑定一个style属性即可  或者单独抽离出函数，直接调用变量
// <span style={{color:'red',fontSize:'30px'}}> this is span</span>

//* 2. 类名样式 - 在元素身上绑定一个className 属性即可

import './app.css'

const style = {
  color:'red',
  fontSize:'30px'
}

//* 动态控制一个这个active,满足条件才有
const activeFlag = true


function App() {
  return (
    <div className="App">
      <span style={style}> this is span</span>
      <span className={activeFlag?'active':null}>测试类名样式</span>
    </div>
  );
}

export default App;