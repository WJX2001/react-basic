// TODO:　屏幕聚焦重新请求

// 通过设置 options.refreshOnWindoFocus 在浏览器窗口 refocus 和 revisible时，会重新发起请求

import Mock from 'mockjs';
import React from 'react';
import { useRequest } from 'ahooks';


function getUsername() {
  return new Promise((resolve) => {
    setTimeout (() => {
      resolve(Mock.mock('@name'))
    },1000)
  })
}


export default () => {
  const {data,loading} = useRequest(getUsername,{
    refreshOnWindowFocus: true,
  })

  return <div>Username: {loading ? 'Loading' : data as string}</div>;
}