// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="main-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click to change mode</h1>
          <button type="button" className="button" onClick={this.onChangeMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
