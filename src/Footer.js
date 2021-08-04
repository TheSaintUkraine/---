import React, { Component } from 'react'
import vk from "./img/vk.png";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
import youtube from "./img/youtube.png";
export default class Footer extends Component {
    render() {
        return (
            <div className="row footer">
    <div className="footer-wrap">
      <h2>Статьи каждую неделю</h2>
      <p>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
      <button><input placeholder="E-mail" type="text" /> <div className="button-text">Подписаться</div></button>
      <div className="footer-social-wrap">
        <img src={vk} alt="" />
        <img src={youtube}  alt="" />
        <img src={facebook}  alt="" />
        <img src={instagram}  alt="" />
      </div>
    </div>
  </div>
        )
    }
}
