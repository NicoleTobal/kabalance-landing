import { h, Component, createRef, createElement } from 'preact';
import style from './style';

export default class MovingImage extends Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  }

  handleMouseLeave() {
    this.slide.current.style.setProperty('--x', 0);
    this.slide.current.style.setProperty('--y', 0);
  }

  imageLoaded(event) {
    event.target.style.opacity = 0.6;
  }

  render() {
    const { src, button, headline, index } = this.props.slide;
    const current = this.props.current;
    let classes = style.slide;

    if (current === index) classes += ` ${style.slidecurrent}`;else
    if (current - 1 === index) classes += ` ${style.slideprevious}`;else
    if (current + 1 === index) classes += ` ${style.slidenext}`;

    return (
      createElement("li", {
        ref: this.slide,
        class: classes,
        onClick: this.handleSlideClick,
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave },

      createElement("div", { class: style.slide__imagewrapper },
      createElement("img", {
        class: style.slide__image,
        alt: headline,
        src,
        onLoad: this.imageLoaded }))));
  }
}
