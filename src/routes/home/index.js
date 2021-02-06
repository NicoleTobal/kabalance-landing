import { h } from 'preact';
import style from './style';
import Instagram from '../aboutUs/instagram';
import AnimatedButton from '../products/animatedButton';
import Contact from '../contact';
import internationalization from "../../i18n/i18n";

const resellers = [
  {
    logo: "/assets/images/symbol_green.png"
  },{
    logo: "/assets/images/symbol_green.png"
  },{
    logo: "/assets/images/symbol_green.png"
  },
  {
    logo: "/assets/images/symbol_green.png"
  },
];

const Home = (props) => (
  <div>
    <div id="home" class={style.home}>
      <div class={style.personalPhoto} />
      <div class={style.separator} />
      <img class={style.logo} src="/assets/images/logo-black.png" />
      <div class={style.firstSection}>
        <div class={style.content}>
          <h1>{internationalization("phrase")}</h1>
          <div class={style.social}>
            <Instagram />
          </div>
          <AnimatedButton text={internationalization("btnOrder")} onClick={() => {}} />
        </div>
      </div>
      <div class={style.secondSection}>
        <h1>{internationalization("txtFindUs")}</h1>
        <div class={`${style.resellers} row`}>
          {
            resellers.map((reseller, index) => (
              <div class={`${style.reseller} col-md-3`} key={index}>
                <img src={reseller.logo} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <Contact />
  </div>

);

const mapStateToProps = state => {
  return {language: state.language.language};
}

export default Home;
