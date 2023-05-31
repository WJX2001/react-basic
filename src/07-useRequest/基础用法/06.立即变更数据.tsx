//TODO: 立即变更数据

// useRequest 提供了 mutate 支持立即修改 useRequest 返回的data 参数
// 用法与React.setState一致，支持mutate(newData) 和mutate((oldData) => newData)

// 我们修改了用户名，但是我们不希望等编辑接口调用成功之后，才给用户反馈，
// 而是直接修改页面数据，同时在背后去调用修改接口，等修改接口返回之后，另外提供反馈

import { message } from 'antd';
import React, { useState, useRef } from 'react';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';


function getUsername() :Promise<string> {
  return new Promise((resolve) => {
    setTimeout (() => {
      resolve(Mock.mock('@name'))
    },1000)
  })
}

function editUsername(username: string): Promise<void> {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject(new Error('Failed to modify username'));
      }
    }, 1000);
  })
}

export default () => {
  const lastRef = useRef<string> ()
  const [state,setState] = useState('')

  // 拿到用户名
  const {data:username ,mutate} = useRequest(getUsername);

  // 编辑用户名
  const {run:edit} = useRequest(editUsername,{
    manual:true,
    onSuccess: (result,params) => {
      setState('')
      message.success(`The username was changed to "${params[0]}" !`)
    },
    onError: (error) => {
      message.error(error.message);
      mutate(lastRef.current);
    },
  })

  const onChange = () => {
    lastRef.current = username
    mutate(state)
    edit(state)
  }

  return (
    <div>
      <p>Username: {username}</p>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button type="button" onClick={onChange}>
        Edit
      </button>
    </div>
    
  )


}



