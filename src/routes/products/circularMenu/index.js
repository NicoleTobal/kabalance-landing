import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style';

const CircularMenu = ({ image, isActive, flavours }) => {
  const [toggled, setToggled] = useState(false);
  useEffect(() => {
    if (!isActive) {
      setToggled(false);
    }
  }, [isActive]);
  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
      <div class={style.menu}>
        <input type="checkbox" id="toggle" checked />
        <label id="show-menu" for="toggle" className={toggled ? style.showMenu : ''}>
          <div class={`${style.btn} ${style.openMenuBtn}`}>
            <img class={`${style.materialIcons} ${style.md36} ${style.menuBtn}`} src={image} onClick={() => { if (isActive) setToggled(!toggled)} } />
            <img class={`${style.materialIcons} ${style.md36} ${style.closeBtn}`} src={image} onClick={() =>  { if (isActive) setToggled(!toggled)} } />
          </div>
          {
            flavours.map((flavour, index) => (
              <div class={`${style.btn} ${style.bubble}`} key={index}>
                <p class={`${style.materialIcons} ${style.md36}`}>{flavour}</p>
              </div>
            ))
          }
        </label>
      </div>
    </div>
  );
}

export default CircularMenu;
