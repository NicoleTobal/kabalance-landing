import { h } from 'preact';
import style from './style';
import ZoomedImage from '../zoomedImage';

const images = [
  "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117817578_347204179642111_7944427540396704557_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4R5mf8_BN_0AX-461vk&oh=e149c0f68a8eb0c5c2f3d2db036baa2c&oe=5F6DA71B",
  "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117932179_913103629185385_5677106351613530101_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=eNaJqAyawn8AX8yr-Xj&oh=d0476390fa880b78fcb31be19250ccac&oe=5F6B6C7E",
  "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/95892935_906637749748249_4811691666324232213_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=qinXmOS0aJsAX9Q2WY5&oh=c22e60e70ab1469a32ab6b995e3d49fc&oe=5F6F3E79",
  "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117581941_294362755322614_6733068216004132222_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=_PAND61Co30AX8Sv3qh&oh=c4b2f2766c8fe0bb68cab7c48c9fc93d&oe=5F6DD85B",
  "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117416727_349530529785014_103533241284911856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=xkO61AlKCv0AX8tHhWB&oh=c19d2f4b251cd0933a405a3df2770c3f&oe=5F6E2A5F",
  "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117263713_2791001291179050_5864844036134372961_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=X6YPTCmMvOcAX8DRxUf&oh=22b4627536d171c8c1184d1ec7dd6637&oe=5F6DE7AF",
  "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117214912_1443772292463141_2607270010201372883_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=XBh_YLbWfMoAX-_xPVM&oh=918dd8e780ba6d2be7f6ab596e916a3e&oe=5F6D50C3"
]

const Instagram = () => {
  return (
    <div class={style.instagramSection}>
      {
        images.map((image, index) => (
          <div class={style.imageContainer} key={index}>
            <ZoomedImage image={image} />
          </div>
        ))
      }
    </div>
  );
}

export default Instagram;
