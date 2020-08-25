import { h } from 'preact';
import style from './style';
import ZoomedImage from '../zoomedImage';

const publications = [
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117817578_347204179642111_7944427540396704557_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4R5mf8_BN_0AX-461vk&oh=e149c0f68a8eb0c5c2f3d2db036baa2c&oe=5F6DA71B",
    url: "https://www.instagram.com/p/CEFFRY1nefW/"
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117932179_913103629185385_5677106351613530101_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=eNaJqAyawn8AX8yr-Xj&oh=d0476390fa880b78fcb31be19250ccac&oe=5F6B6C7E",
    url: "https://www.instagram.com/p/CEDNUhgHVrR/"
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/95892935_906637749748249_4811691666324232213_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=qinXmOS0aJsAX9Q2WY5&oh=c22e60e70ab1469a32ab6b995e3d49fc&oe=5F6F3E79",
    url: "https://www.instagram.com/p/B_yOXmlnklp/"
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117581941_294362755322614_6733068216004132222_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=_PAND61Co30AX8Sv3qh&oh=c4b2f2766c8fe0bb68cab7c48c9fc93d&oe=5F6DD85B",
    url: "https://www.instagram.com/p/CD4snhaHUxT/"
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117865343_759416174836373_8269529102975378865_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=xlY_VKORquIAX9CeST8&oh=d92c38775291577aa94f0719b71d5c4d&oe=5F6E1BB1",
    url: "https://www.instagram.com/p/CD_3fk7H7wQ/"
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117263713_2791001291179050_5864844036134372961_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=X6YPTCmMvOcAX8DRxUf&oh=22b4627536d171c8c1184d1ec7dd6637&oe=5F6DE7AF",
    url: "https://www.instagram.com/p/CDxMVuFnyKa/"
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/117214912_1443772292463141_2607270010201372883_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=XBh_YLbWfMoAX-_xPVM&oh=918dd8e780ba6d2be7f6ab596e916a3e&oe=5F6D50C3",
    url: "https://www.instagram.com/p/CDuJoJin5X6/"
  },
]

const Instagram = () => {
  return (
    <div class={style.instagramSection}>
      {
        publications.map((publication, index) => (
          <div class={style.imageContainer} key={index} >
            <a href={publication.url} target="_blank" rel="noreferrer" >
              <ZoomedImage image={publication.image} />
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default Instagram;
