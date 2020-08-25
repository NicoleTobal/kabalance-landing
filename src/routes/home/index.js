import { h } from 'preact';
import style from './style';

const Home = () => (
	<div id="home" class={style.home}>
    <div class={style.personalPhoto} />
    <div class={style.separator} />
		<img src="/assets/images/logo-black.png" />
	</div>
);

export default Home;
