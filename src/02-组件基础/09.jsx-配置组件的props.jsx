import { Component } from "react"

class LikeButton extends Component {
    static defaultProps = {
        likedText :'取消',
        unlikedText: '点赞'
    }
    constructor() {
        super()
        this.state = {isLiked: false}
    }

    handleClick = () => {
        this.setState({
            isLiked:!this.state.isLiked
        })
    }

    render() {
        return (
            <button onClick={handleClick}>   
                {
                    this.state.isLiked ? this.props.likedText:this.props.unlikedText
                }
            </button>
        )
    }
}


class App extends Component{

    render() {
        return (
            <div>
                <LikeButton></LikeButton>
            </div>
        )
    }
}

export default App