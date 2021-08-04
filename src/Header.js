import React, { Component } from 'react'
import logo from "./img/logo.png";
export default class Header extends Component {
    render() {
        return (
            <div className="row header">
      <div className="col-3"><img src={logo} alt="" /></div>
      <div className="col-5 nav">
        <a href className="nav-a">Главная</a>
        <a href className="nav-a">Курсы</a>
        <a href className="nav-a">Расписание</a>
        <a href className="nav-a">Преподаватели</a>
        <a href className="nav-a">Рассылка</a>
        <a href className="nav-a">Контакты</a>
      </div>
      <div className="col-2">
        <button className="button-cabinet">Зайти в кабинет</button>
      </div>
    </div>
        )
    }
}
