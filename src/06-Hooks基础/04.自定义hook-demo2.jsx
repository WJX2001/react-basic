

import { useEffect, useState } from "react"

function useLocalStorage(key,defaultValue) {
    const [message,setMessage] = useState(defaultValue)

    // 每次只要message变化 就会自动同步到本地localstorage
    useEffect(() => {
        window.localStorage.setItem(key,message)
    },[message,key])

    return [message,setMessage]
}



function App() {
    const [message,setMessage] = useLocalStorage('hook-key','王吉祥')
    setTimeout(() => {
        setMessage('wjx')
    },5000)
    return (
        <div>
            {message}
        </div>
    )
}

export default App











