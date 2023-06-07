import './app.css';
import { useState } from 'react';
import { useEffect } from 'react';

// 获取时间的钩子函数
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    // 设定定时器
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    // 清除定时器
    return () => clearInterval(id);
  }, []);
  return time;
}

// 动态展示时间
const Clock = ({color,time}) => {
  return (
    <h1 style={{color:color}}>
      {time}
    </h1>
  )
}


const App = () => {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div>
      <p>
        选择一个颜色：{''}
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="lightcoral">浅珊瑚色</option>
          <option value="midnightblue">午夜蓝</option>
          <option value="rebeccapurple">丽贝卡紫</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
};

export default App;
