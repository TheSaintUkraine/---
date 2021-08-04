import React, { Component } from 'react'

export default class Banner_course extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             earned:400000,
             proggress:40,
             pupils:200,
             finished:190
        }
        this.AddMoney = this.AddMoney.bind(this);
        this.AddPupil = this.AddPupil.bind(this);
        this.AddFinished = this.AddFinished.bind(this);
    }
    AddMoney() {
        if(this.state.earned < 1000000) {
            this.setState({
                earned:this.state.earned+10000,
                proggress:(this.state.earned*100)/1000000
            })
        }
    }
    AddPupil() {
        this.setState({
            pupils:this.state.pupils+1
        })
    }
    AddFinished() {
        this.setState({
            finished:this.state.finished+1
        })
    }
    componentDidMount() {
        setInterval(this.AddMoney,10000)
        setInterval(this.AddPupil,5000)
        setInterval(this.AddFinished,20000)
    }
    render() {
        return (
            <div className="row banner-course">
                <button className="banner-course-buy">Заказать курс</button>
              <div className="banner-course-info-pupils">
             <div className="tab-pupils"><p>Учеников всего:</p><p>{this.state.pupils}</p></div>
             <div className="tab-pupils"><p>Успешно закончили курс:</p><p>{this.state.finished}</p></div>
             </div>
            <div className="banner-course-info-money">
            <div className="tab-pupils"><p>Заработано учениками:</p><p>{this.state.earned}₽</p></div>
            <div className="proggress-wrap">
              <div style={{width:this.state.proggress+"%"}} className="proggres" />
              <div className="bg-progress" />
            </div>
            <div className="proggres-info">
              <p>0</p>
              <p>1 000 000₽</p>
            </div>
          </div>
          </div>
        )
    }
}
