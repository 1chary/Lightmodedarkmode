// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {dark: false}

  change = () => {
    this.setState(prevState => ({dark: !prevState.dark}))
  }

  getButtonText = () => {
    const {dark} = this.state
    return dark ? 'Light Mode' : 'Dark Mode'
  }

  getBackground = () => {
    const {dark} = this.state
    return dark ? `minione` : `mini`
  }

  heading = () => {
    const {dark} = this.state
    return dark ? `dark` : `white`
  }

  render() {
    const buttonText = this.getButtonText()
    const background = this.getBackground()
    const heading = this.heading()
    return (
      <div className="container">
        <div className={`mini-container ${background}`}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button className="btn" onClick={this.change}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
