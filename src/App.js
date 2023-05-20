import { Component } from "react"

// props：一旦传进来就不能改变 
// 使用者可以通过主动地重新渲染的方式把新的props传入组件当中，
// 这样，这个组件中由props决定的显示形态也会得到相应的改变

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]


class User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}


class App extends Component {

  render () {
    return (
      <div>
        {users.map((user) => <User user={user} />)}
      </div>
    )
  }
}

export default App
