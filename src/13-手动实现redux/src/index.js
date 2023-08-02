

const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}


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



// 这种渲染方式的弊端很多，例如有些方法可以随意修改其中的内容
// 这时通过 dispatch 的方法，作为中间人，所有数据修改必须通过dispatch

function dispatch (action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color
      break
    default:
      break
  }
}

// 首次渲染
// renderApp(appState)
// dispatch({type:'UPDATE_TITLE_TEXT',text:'shabi'})
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' })
// renderApp(appState)

// 首次渲染

