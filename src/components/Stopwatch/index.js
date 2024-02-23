// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isClick: false,
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      minutes: 0,
      seconds: 0,
      isClick: false,
    })
  }

  startTimer = () => {
    const {isClick} = this.state
    if (!isClick) {
      this.timerId = setInterval(() => {
        let {minutes, seconds} = this.state
        seconds += 1
        if (seconds === 60) {
          seconds = 0
          minutes += 1
          if (minutes === 60) minutes = 0
        }
        this.setState({
          minutes,
          seconds,
          isClick: true,
        })
      }, 1000)
    }
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      isClick: false,
    })
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="image"
              alt="stopwatch"
            />
            <p className="text">Timer</p>
          </div>
          <h1 className="timer">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div className="btn-container">
            <button
              className="btn btn1"
              type="button"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button className="btn btn2" type="button" onClick={this.stopTimer}>
              Stop
            </button>
            <button
              className="btn btn3"
              type="button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
