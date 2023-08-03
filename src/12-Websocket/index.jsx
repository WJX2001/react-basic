import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';

function ListItem({ item }) {
  return <li>{item}</li>;
}

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default function Test() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(['Item1', 'Item2', 'Item3']);
  const [wsHandle, setWsHandle] = useState(null);
  const [isChatting, setIsChatting] = useState(false); // 新增状态变量
  const [initName,setInitName] = useState('')
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (wsHandle) {
      // 只在 WebSocket 成功连接后执行发送消息
      // const message = { '发送方': initName, '发送内容': inputValue };
      const message1 = initName+': '+inputValue
      wsHandle.send(message1);
      
      setData((prevData) => [...prevData,   initName +': ' + inputValue]);
      setInputValue(''); // 清空输入框
    }
  };

  const handleEnterChat = () => {
    if (initName.trim() === '') {
      alert('名字不能为空');
      return;
    }
    if (wsHandle) {
      // 将 initName 转换为 JSON 字符串并发送
      const welcomeMessage = '欢迎' + initName +'来到聊天室'
      wsHandle.send(welcomeMessage);
    }
    setData((prevData) => [...prevData, '欢迎' + initName + '来到聊天室']);
    setIsChatting(true); // 设置为正在聊天状态
  };

  const handleExitChat = () => {
    setIsChatting(false); // 设置为非聊天状态
    setData(['Item1', 'Item2', 'Item3']); // 重置聊天数据
    if (wsHandle) {
      const exitMessage = initName + '退出了聊天室';
      wsHandle.send(exitMessage);
    }
    setInitName('')
  };

  
  const handleName = (e) => {
    setInitName(e.target.value)
  }



  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000');

    ws.onopen = () => {
      console.log('Client is connected');
    };

    ws.onmessage = (event) => {
      console.log(event.data,'hdhashdash')
      setData((prevData) => [...prevData, event.data]);
    };

    setWsHandle(ws);

    return () => {
      // 在组件卸载时关闭WebSocket连接
      ws.close();
    };
  }, []); // 仅在组件挂载和卸载时运行

  return (
    <div>
      {!isChatting ? (
        <div className="init_yz">
          <Input onChange={handleName} style={{ width: '350px' }} placeholder="请输入用户名称" />
          <Button onClick={handleEnterChat}>进入聊天室</Button>
        </div>
      ) : (
        <div className="show_part">
          <h1>欢迎{initName}来到聊天室</h1>
          <h1>渲染列表</h1>
          <List items={data} />

          <div style={{ display: 'flex' }}>
            <Input
              style={{ width: '350px' }}
              value={inputValue}
              onChange={handleInput}
            />
            <Button onClick={handleSend}>点击发送</Button>
            <Button onClick={handleExitChat}>退出聊天室</Button>
          </div>
        </div>
      )}
    </div>
  );
}