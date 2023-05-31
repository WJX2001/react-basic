// 默认请求

/**
 * 默认情况下，useRequest 第一个参数是一个异步函数,在组件初始化时，会自动执行该函数
 * 同时自动管理该异步函数的 loading data error等状态
 */

import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import React from 'react';


function getUsername(): Promise<string> {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        resolve(Mock.mock('@name'))
      } else {
        reject (new Error('Failed to get username'))
      }
    },1000)
  })
}

export default () => {
  const {data,error,loading} = useRequest(getUsername);

  // 如果请求失败
  if(error) {
    return <div>{error.message}</div>
  }
  // 如果请求成功
  if(loading){
    return <div>loading ...</div>
  }
  return <div>Username: {data} </div>
}