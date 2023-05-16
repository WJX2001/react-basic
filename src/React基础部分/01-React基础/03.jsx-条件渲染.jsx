// 条件渲染
// 技术方案：三元表达式（常用）逻辑 && 运算


// 1. 三元表达式 - 满足条件才渲染一个span标签 
// 2. && 短路运算符，只有前面正确，才会进行后面的
const flag = true
function App() {
  return (
    <div className="App">
      {flag ? (
        <div>
          <span>this is span</span>
        </div>) : null}
      {true && <span>this is span</span>} 
    </div>
  );
}

export default App;
