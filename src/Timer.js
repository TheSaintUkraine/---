import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sec:18,
             min:1,
             hours:19
        }
        this.Tick = this.Tick.bind(this);
    }
    Tick() {
        this.setState({
            sec:this.state.sec-1
        })
        if (this.state.sec < 0) {
            this.setState({
                min:this.state.min-1,
                sec:60
            })
            if(this.state.min < 0) {
                this.setState({
                    hours:this.state.hours-1,
                    min:60,
                    sec:60
                })
            }
        }
    }
    componentDidMount() {
        setInterval(this.Tick,1000)
    }
    render() {
        return (
            <div className="timer-wrap">
        <div className="timer-block"><h2 className="days">18</h2><p>Дней</p></div>
        <div className="timer-block"><h2 className="hours">{this.state.hours}</h2><p>Часов</p></div>
        <div className="timer-block"><h2 className="min">{this.state.min}</h2><p>Минут</p></div>
        <div className="timer-block"><h2 className="sec">{this.state.sec}</h2><p>Секунд</p></div>
      </div>
        )
    }
}
