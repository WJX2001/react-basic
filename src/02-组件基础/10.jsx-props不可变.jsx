import { Component } from "react"

// props：一旦传进来就不能改变 
// 使用者可以通过主动地重新渲染的方式把新的props传入组件当中，
// 这样，这个组件中由props决定的显示形态也会得到相应的改变


class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
  constructor () {
    super()
    this.state = { isLiked: false }
  }
  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked
          ? this.props.likedText
          : this.props.unlikedText} 👍
      </button>
    )
  }
}


class App extends Component {
  constructor () {
    super()
    this.state = {
      likedText: '已赞',
      unlikedText: '赞'
    }
  }
  handleClickOnChange () {
    this.setState({
      likedText: '取消',
      unlikedText: '点赞'
    })
  }
  render () {
    return (
      <div>
        <LikeButton
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText} />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            修改 wordings
          </button>
        </div>
      </div>
    )
  }
}

export default App

//TODO: 总结
/**
 * 1. 为了使得组件的可定制性更强，在使用组件的时候，可以在标签上加属性来传入配置参数
 * 2. 组件可以在内部通过this.props获取到配置参数，组件根据props的不同确定自己的显示形态
 * 3. 可以通过给组件添加类属性 defaultProps来配置默认参数
 * 4. props一旦传入，你就不可以在组件内部对它进行修改，但是你可以通过父组件主动重新渲染的
 *    方式传入新的props,从而达到更新
 */