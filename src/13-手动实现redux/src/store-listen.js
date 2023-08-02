
// 这里需要使用 观察者模式

/**  
 * 这里我们修改dispatch的时候，除了会调用stateChanger 进行数据的修改，还会遍历 listers里面的函数，
*/

let appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function createStore(state,stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener) // 添加监听者
  const getState = () => state
  const dispatch = (action) => {
    stateChanger(state,action) 
    listeners.forEach((listener) => listener())
  }
  return {getState,dispatch,subscribe}
}


function renderTitle (title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent(content) {
  const contentDom = document.getElementById('content')
  contentDom.innerHTML = content.text
  contentDom.style.color = content.color
}

// 首次渲染函数
function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
} 

function stateChanger(state,action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      break
    default:
      break
  }
}

// 创建实例对象
const store = createStore(appState,stateChanger)

// 监听数据变化
store.subscribe(() => renderApp(store.getState()))

// 首次渲染页面
renderApp(store.getState())

store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '我变了哦'})
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色