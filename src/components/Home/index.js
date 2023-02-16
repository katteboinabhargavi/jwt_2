// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  click = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.status
    const checkLogin = isLogin ? 'Logout' : 'login'
    const word = isLogin ? 'Please Login' : 'Welcome User'
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">{word}</h1>
          <button className="button" type="button" onClick={this.click}>
            {checkLogin}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
