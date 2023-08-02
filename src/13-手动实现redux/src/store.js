// 将 appState 和 dispatch 抽离到 store这里,然后构建一个函数，专门生产这种 state和 dispatch

// 返回一个对象，对象中包含两个方法
function createStore(state,stateChanger) {
  const getState = () => state
  const dispatch = (action) => stateChanger(state,action)
  return {getState,dispatch}
}


// 这时可以通过传入的不同appState 来生成一个store,需要修改的时候通过 store.dispatch 获取的时候通过 store.getState

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

function stateChanger (state, action) {
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

const store = createStore(appState,stateChanger)


// 初次渲染函数
// 整体渲染函数
function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

// 渲染标题

function renderTitle (title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

// 渲染内容
function renderContent(content) {
  const contentDom = document.getElementById('content')
  contentDom.innerHTML = content.text
  contentDom.style.color = content.color
}

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'sb' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色
renderApp(store.getState()) // 把新的数据渲染到页面上