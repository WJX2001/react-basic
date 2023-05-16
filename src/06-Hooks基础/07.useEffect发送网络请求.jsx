
//? 类组件 如何发送网路请求？
// 生命周期钩子函数  componentDidMount
//? 执行时机？ 
// 在初始化的时候dom渲染完毕只执行一次

import axios from "axios"
import { useEffect } from "react"

//? useEffect
// 1.不加依赖项 - 初始化 + 重新渲染
// 2.加 [] - 初始化执行一次
// 3.加特定依赖项 [count,name] - 首次执行 + 任意一个变化执行



function App() {

    useEffect(() => {
        // 发送请求
        async function fetchData(){      
            const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            
            console.log(res)   
         }
         fetchData()
    },[])


    return (
        <div>

        </div>
    )
}

export default App