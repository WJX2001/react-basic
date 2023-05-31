//TODO: 刷新（重复上一次请求）

// useRequest 提供了 refresh 和 refreshAsync 方法，我们可以使用上一次的参数，重新发起请求


import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React, { useEffect } from 'react';


function getUsername(id:number): Promise<string> {
  console.log('use-request-refresh-id', id);
  return new Promise((resolve) => {
    setTimeout (() => {
      resolve(Mock.mock('@name'))
    },1000)
  })
}

export default () => {
  const {data,loading,run,refresh} = useRequest ((id: number) => getUsername(id),{
    manual : true
  });

  // 只在首次渲染时执行一次
  useEffect (() => {
    run(1)
  },[])

  if(loading) {
    return <div>loading....</div>
  }

  return (
    <div>
      <p>Username: {data}</p>
      {/* 用refresh 代替run(1) */}
      <button onClick={refresh} type="button">
        Refresh
      </button>
    </div>
  )
}