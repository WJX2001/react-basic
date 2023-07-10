import { Button, Input } from "antd"
import { useState } from "react";


export default function AddTask(props) {
  const {onAddTask} = props
  const [text,setText] = useState('')
  return (
    <div style={{display:"flex"}}>
      <Input 
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
        style={{width:"200px"}}
      />
      <Button 
        onClick={() => {
          setText('')
          onAddTask(text)
        }}
        style={{marginLeft:"5px"}}
      >Add</Button>
    </div>
  )
}


