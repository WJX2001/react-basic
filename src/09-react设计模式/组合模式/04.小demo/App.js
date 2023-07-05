import './app.css';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';


//TODO: 实现deomo
const Tab = ({children,onChange}) => {
  const activeIndex = useRef(null)
  const [,forceUpdate] = useState({})

  // 提供给tab 使用
  const tabList = []

  // 待渲染组件
  let renderChildren = null

  React.Children.forEach(children,(item) => {
    // 验证是否是 <TabItem>组件
    if(React.isValidElement(item) && item.type.displayName === 'tabItem') {
      const {props} = item
      const {name,label} = props
      const tabItem = {
        name,
        label,
        active: name === activeIndex.current,
        component: item
      }
      // 当名称为当前索引的时候 待渲染组件就为当下循环到的这个组件
      if(name === activeIndex.current) renderChildren = item
      tabList.push(tabItem)
    }
  })

  //? 第一次加载的场景 
  if(!renderChildren && tabList.length > 0) {
    const firstChildren = tabList[0]
    renderChildren = firstChildren.component
    activeIndex.current = firstChildren.component.props.name
    firstChildren.active = true
  }

  //? 切换tab
  const changeTab = (name) => {
    activeIndex.current = name
    forceUpdate({})
    // 打印一下内容 onChange为传入的函数
    onChange && onChange(name)
  }

  return (
    <div>
        <div className="header"   >
            {
                tabList.map((tab,index) => (
                    <div className="header_item" key={index}  onClick={() => changeTab(tab.name)} >
                        <div className={'text'}  >{tab.label}</div>
                        {tab.active && <div className="active_bored" ></div>}
                    </div>
                ))
            }
          </div>
         <div>{renderChildren}</div>
    </div>
  )
}


const TabItem = (props) => {
  console.log(props,'hhhh')
  const {children} = props
  return <div>{children}</div>
}
TabItem.displayName = 'tabItem'


const App = () => {
  
  return (
    <div >
      <Tab onChange={ (type)=> console.log(type)  } >
          <TabItem name="react"  label="react" >React</TabItem>
          <TabItem name="vue" label="vue" >Vue</TabItem>
          <TabItem name="angular" label="angular"  >Angular</TabItem>
      </Tab>


    </div>
  );
};

export default App;
