import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

// 模拟数据交互
function getUserInfo(a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: a,
        age: 16,
      });
    });
  });
}

const Demo = ({ a }) => {
  const [userMessage, setUserMessage] = useState({});
  const div = useRef();
  const [number, setNumber] = useState(0);

  // 模拟事件监听处理函数
  const handleResize = () => {};
  // useEffet使用，这里需要限制

  useEffect(() => {
    // 请求数据
    getUserInfo(a).then((res) => {
      setUserMessage(res);
    });

    // 操作 dom
    console.log(div.current);

    window.addEventListener('resize', handleResize);
  }, [a, number]);

  // useEffect 使用，这里如果不加限制，会使函数重复执行，陷入死循环

  return (
    <div ref={div}>
      <span>{userMessage.name}</span>
      <span>{userMessage.age}</span>
      <Button onClick={() => setNumber(1)}>{number}</Button>
    </div>
  );
};

export default Demo;
