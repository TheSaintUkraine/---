import "./css/index.css";
import about_img from "./img/about_img.png";
import icon_heading1 from "./img/icon-heading1.png";
import advantages_icon_1 from "./img/advantages-icon-1.png";
import advantages_icon_2 from "./img/advantages-icon-2.png";
import advantages_icon_3 from "./img/advantages-icon-3.png";
import icon_heading2 from "./img/icon-heading2.png";
import msi from "./img/msi.png";
import t1 from "./img/t1.png";
import t2 from "./img/t2.png";
import t3 from "./img/t3.png";
import Footer from "./Footer";
import Header from "./Header";
import Banner_course from "./Banner_course";
import Timer from "./Timer";
function App() {
  
  return (
    <div className="container-fluid">
  <div className="row banner">
    <Header/>
    <div className="row banner-info">
      <h1>Первый курс <br />по компьютерной сборке</h1>
      <Timer/>
    </div>
      <Banner_course/>
  </div>
  <div className="row about">
    <img src={about_img} alt="" />
    <div className="about-text">
      <h2>Чем мы занимаемся?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
    </div>
  </div>
  <div className="row start">
    <div className="tittle-block">
      <img src={icon_heading1} alt="" />
      <h2>Быстрый старт</h2>
    </div>
    <div className="block-content">
      <p>Больше 90% учеников прошли полный курс и смогли <br /> собрать свой первый компьютер</p>
      <div className="start-proggress-wrap">
        <div className="start-proggress-tittle-wrap">
          <h2>100%</h2>
          <h2>75%</h2>
          <h2>50%</h2>
          <h2>Итог</h2>
        </div>
        <div className="start-proggress-bar-wrap">
          <div className="start-proggress-bar" />
          <div className="start-proggress-bar" />
          <div className="start-proggress-bar" />
          <div className="start-proggress-bar" />
        </div>
        <div className="start-proggress-about-wrap">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row advantages">
    <div className="tittle-advantages"><h3>Получите профессию прямо сейчас</h3></div>
    <div className="advantages-block-wrap">
      <div className="advantages-block">
        <img src={advantages_icon_1} alt="" />
        <h5>Только практические  <br />навыки в работе</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
      </div>
      <div className="advantages-block">
        <img src={advantages_icon_2} alt="" />
        <h5>Работа на самом<br />современном оборудовании</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
      </div>
      <div className="advantages-block">
        <img src={advantages_icon_3} alt="" />
        <h5>Сертификация<br />по окончании обучения</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
      </div>
    </div>
  </div>
  <div className="row partners">
    <div className="tittle-block">
      <img src={icon_heading2} alt="" />
      <h2>Партнеры - топовые бренды</h2>
    </div>
    <div className="block-content">
      <img src={msi} alt="" />
      <img src={msi} alt="" />
      <img src={msi} alt="" />
      <img src={msi} alt="" />
      <img src={msi} alt="" />
      <img src={msi} alt="" />
      <img src={msi} alt="" />
      <img src={msi} alt="" />
    </div>
  </div>
  <div className="row program">
    <div className="wrap-program">
      <div className="wrap-program-title">
        <img src={icon_heading2} alt="" />
        <h2>Программа обучения</h2>
        <p>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</p>
      </div>
      <div className="wrap-program-proggress">
        <div className="wrap-program-text">
          <div className="program-text">
            <div className>
              <p className="program-text-week">Неделя №1</p>
              <p>Красивая часть курса,<br />которая помогает в успехе</p>
            </div>
            <div className="program-line" />
          </div>
          <div className="program-text">
            <div className>
              <p className="program-text-week">Неделя №3</p>
              <p>Красивая часть курса,<br />которая помогает в успехе</p>
            </div>
            <div className="program-line" />
          </div>
          <div className="program-text">
            <div className>
              <p className="program-text-week">Неделя №5</p>
              <p>Красивая часть курса,<br />которая помогает в успехе</p>
            </div>
            <div className="program-line" />
          </div>
          <div className="program-text">
            <div className>
              <p className="program-text-week">Неделя №7</p>
              <p>Красивая часть курса,<br />которая помогает в успехе</p>
            </div>
            <div className="program-line" />
          </div>
        </div>
        <div className="program-proggress-bar" />
        <div className="wrap-program-text wrap-program-text-right">
          <div className="program-text">
            <div className="program-line program-line-right" />
            <div className>
              <p className="program-text-week">Неделя №2</p>
              <p>Красивая часть курса,<br />которая помогает в успехе</p>
            </div>    
          </div>
          <div className="program-text">
            <div className="program-line program-line-right" />
            <div className>
              <p className="program-text-week">Неделя №4</p>
              <p>Красивая часть курса,<br />которая помогает в успехе</p>
            </div>    
          </div>
          <div className="program-text">
            <div className="program-line program-line-right" />
            <div className>
              <p className="program-text-week">Неделя №6</p>
              <p>Красивая часть курса,<br />которая помогает в успехе</p>
            </div>    
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row teachers">
    <div className="tittle-block">
      <img src={icon_heading2} alt="" />
      <h2>Ваши преподаватели</h2>
    </div>
    <div className="block-content">
      <div className="teachers-wrap">
        <div className="teachers-block">
          <img src={t1} alt="" />
          <h3>Дмитрий Иванов</h3>
          <p>Специалист по видеокартам</p>
          <button>Биография</button>
        </div>
        <div className="teachers-block">
          <img src={t2} alt="" />
          <h3>Дмитрий Иванов</h3>
          <p>Специалист по видеокартам</p>
          <button>Биография</button>
        </div>
        <div className="teachers-block">
          <img src={t3} alt="" />
          <h3>Дмитрий Иванов</h3>
          <p>Специалист по видеокартам</p>
          <button>Биография</button>
        </div>
      </div>
    </div>
  </div>  
  <Footer/>
</div>

  );
}

export default App;
