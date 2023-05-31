// TODO: 手动触发

// 如果设置了 options.manual = true 则useRequest不会默认执行，需要通过 run 或者 runAsync 来触发执行

//? run 与 runAsync 的区别

/**
 *  1.run 是一个普通的同步函数，我们会自动捕获异常，可以通过options.onError来处理异常时的行为
 *  2.runAsync 是一个返回Promise的异步函数，如果使用runAsync 来调用，则意味着你需要自己捕获异常
 */

// run 场景

import { message } from 'antd'
import React, { useState } from 'react'
import { useRequest } from 'ahooks'

function editUsername(username: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve()
      } else {
        reject(new Error('Failed to modify username'))
      }
    }, 1000)
  })
}

export default () => {
  const [state, setState] = useState('')

  const { loading, run } = useRequest(editUsername, {
    manual: true,
    onSuccess: (result, params) => {
      setState('')
      message.success(`The username was changed to "${params[0]}" !`)
    },
    onError: (error) => {
      message.error(error.message)
    },
  })

  return (
    <div>
      <input 
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder='Please enter username'
        style={{width:250,marginRight:16}}
      />
      <button disabled={loading} type='button' onClick={() => run(state)}>
          {loading ? 'Loading' : 'Edit'}
      </button>
    </div>
  )
}
