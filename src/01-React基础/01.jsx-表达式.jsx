// 1. 识别常规的变量
// 2. 原生js方法调用
// 3. 三元运算符
const name = 'wjx'
const getAge = () => {
  return 18
}
// 三元运算符
const flag = false

function App() {
  return (
    <div className="App">
      {name}
      {getAge()}
      { flag ? '真棒':'真菜'}
    </div>
  );
}

export default App;
