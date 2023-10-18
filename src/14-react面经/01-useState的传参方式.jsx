import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

const MyApp = () => {
  const [count, setCount] = useState(0);

  // TODO: 一次加1
  // const handleParamClick = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  // TODO: 一次加3
  // const handleCbClick = () => {
  //   setCount((count) => count + 1);
  //   setCount((count) => count + 1);
  //   setCount((count) => count + 1);
  // };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(count + 1);
  //   }, 500);
  //   return () => clearInterval(timer);
  // }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 500);
  //   return () => clearInterval(timer);
  // }, []);

  return <div>{count}</div>;
};

export default MyApp;
