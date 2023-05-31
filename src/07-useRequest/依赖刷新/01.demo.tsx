//TODO:  依赖刷新

// useRequest 提供了一个options.refreshDeps 参数，当他的值发生变化之后，会重新触发请求

import React, { useState } from 'react'
import { useRequest } from 'ahooks'

// 写一个切换序号的东西

const userSchool = (id: string) => {
  switch (id) {
    case '1':
      return 'Tsinghua University'
    case '2':
      return 'Beijing University'
    case '3':
      return 'Zhejiang University'
    default:
      return ''
  }
}

async function getUserSchool(userId: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userSchool(userId))
    }, 1000)
  })
}

export default () => {
  const [userId, setUserId] = useState('1')
  const { data, loading } = useRequest(() => getUserSchool(userId), {
    refreshDeps: [userId],
  })

  return (
    <div>
      <select
        onChange={(e) => setUserId(e.target.value)}
        value={userId}
        style={{ marginBottom: 16, width: 120 }}>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
      </select>
      <p>School: {loading ? 'Loading' : data}</p>
    </div>
  )
}
