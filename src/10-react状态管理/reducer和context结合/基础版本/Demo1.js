
import { useReducer } from "react"
import AddTask from "./AddTask"


const Demo1 = () => {

  // 使用useReducer 包含所有的状态逻辑
  const [tasks,dispatch] = useReducer(

  )

  // 添加操作
  function handleAddTask(text) {
    dispatch({

    })
  }

  // 编辑操作
  function handleChangeTask(task) {
    dispatch({

    })
  }
  
  // 删除操作
  function handleDeletTask(taskId) {

  }

  return (
    <div>
      <h1>Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask} />
    </div>
  )
}


// 状态管理部分
function tasksReducer(tasks,action) {
  switch (action.type) {
    case 'added': {
      return []
    }
      
      break;
  
    default:
      break;
  }
}

export default Demo1