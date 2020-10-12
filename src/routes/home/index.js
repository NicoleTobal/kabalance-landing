import { h } from 'preact';
import style from './style';
import Instagram from '../aboutUs/instagram';
import AnimatedButton from '../products/animatedButton';
import Contact from '../contact';

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
    {console.log(props)}
    <div id="home" class={style.home}>
      <div class={style.personalPhoto} />
      <div class={style.separator} />
      <img class={style.logo} src="/assets/images/logo-black.png" />
      <div class={style.firstSection}>
        <div class={style.content}> 
          <h1>Este es un texto que simula ser el lema principal de Kabalance"</h1>
          <div class={style.social}>
            <Instagram />
          </div>
          <AnimatedButton text="PEDIR" onClick={() => {}} />
        </div>
      </div>
      <div class={style.secondSection}>
        <h1>Encuentranos también en...</h1>
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

export default Home;
