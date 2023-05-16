import { useState } from "react"

function useWindowScroll () {
    const [y,sety] = useState(0)
    // 在滚动行为发生的时候 不断获取滚动值 交给y
    window.addEventListener('scroll',() => {
        const h = document.documentElement.scrollTop
        sety(h)
    })
    return [y]
}


function App() {

    const [y] = useWindowScroll()
    console.log(y)
    
    return (
        <div style={{height:'12000px'}}>
            {y}
        </div>
    )
}

export default App