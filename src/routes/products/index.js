import React, {h, Component} from 'preact';
import style from './style';
import RecipeMenu from './recipeMenu';
import CountrySelection from './countrySelection';
import { connect } from 'react-redux';
import Product from '../product';

const productList = [
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/108121621_383700135925484_2496260514079274856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MwcEf-QybBAAX9DZRAS&oh=13e1aa8b00ad999db85645f0b2ae3d44&oe=5F6C5775",
    title: "Dulce de leche",
    titleEng: "Milk sweet",
    price: 5,
    flavours: [],
    styles: [],
    sizes: [],
    images: ['/assets/images/symbol_green.png', '/assets/images/symbol_green.png', '/assets/images/symbol_green.png']
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/108121621_383700135925484_2496260514079274856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MwcEf-QybBAAX9DZRAS&oh=13e1aa8b00ad999db85645f0b2ae3d44&oe=5F6C5775",
    title: "Parlova",
    titleEng: "Parlova",
    price: 10,
    flavours: [],
    styles: ['Normal', 'Sugar free', 'Vegana'],
    sizes: ['Pequeño', 'Grande'],
    sizesEng: ['Small', 'Big'],
    images: ['/assets/images/symbol_green.png', '/assets/images/symbol_green.png', '/assets/images/symbol_green.png']
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/108121621_383700135925484_2496260514079274856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MwcEf-QybBAAX9DZRAS&oh=13e1aa8b00ad999db85645f0b2ae3d44&oe=5F6C5775",
    title: "Marquesa",
    titleEng: "Marquesa",
    price: 12,
    flavours: ["Arequipe", "Limón", "Chocolate", "Coco"],
    styles: ['Normal', 'Gluten free', 'Sugar free'],
    sizes: ['Pequeño', 'Mediano', 'Grande'],
    sizesEng: ['Small', 'Medium', 'Big'],
    images: ['/assets/images/symbol_green.png', '/assets/images/symbol_green.png', '/assets/images/symbol_green.png']
  },
  {
    image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/108121621_383700135925484_2496260514079274856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MwcEf-QybBAAX9DZRAS&oh=13e1aa8b00ad999db85645f0b2ae3d44&oe=5F6C5775",
    title: "Oblea",
    titleEng: "Oblea",
    price: 3,
    flavours: ["Chocolate", "Coco", "Vainilla", "Matcha", "Taro", "Dulce de leche", "Algodón de azucar", "Café"],
    styles: [],
    sizes: [],
    images: ['/assets/images/symbol_green.png', '/assets/images/symbol_green.png', '/assets/images/symbol_green.png']
  }
];

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: -1,
      products: productList,
      countrySelected: '',
      productSelected: {},
    };
  }
  componentDidUpdate() {
    const { title } = this.state.productSelected;
    // Refreshes page if component updates and a product was already selected
    if (title && title !== '') {
      this.state.productSelected = {};
    }
  }

    getColumnWidth(index) {
        if (this.state.currentImage !== -1) {
            if (index !== this.state.currentImage) {
                return 'col-md-2';
            }
            return 'col-md-6';
        }
        return 'col-md-3';
    }

    onArrowButtonClick(index) {
        if (index === this.state.currentImage) {
            return this.setState({currentImage: -1});
        }
        return this.setState({currentImage: index});
    }

	render() {
    const { city } = this.props;
    const { productSelected } = this.state;
    if (city === '' && !this.state.countrySelected) {
      return <CountrySelection onCountrySelect={e => this.onCountrySelect(e)} />;
    }
    if (productSelected.title && productSelected.title !== '') {
      return (
        <Product
          image={productSelected.image}
          title={productSelected.title}
          price={productSelected.price}
          isActive={true}
          flavours={productSelected.flavours}
          sizes={productSelected.sizes}
          styles={productSelected.styles}
          images={productSelected.images}
        />
      );
    }
		return (
      <div
        id="products"
        class={`${style.productContainer} row col-md-12 animate__animated animate__fadeInRight animate__normal`}
      >
         {
          this.state.products.map((product, index)=> (
            <div class={`${style.product} ${this.getColumnWidth(index)}`} key={index}>
              <RecipeMenu
                language = { this.props.productsLang }
                image={product.image}
                title={product.title}
                onClickImage={() => this.setState({ productSelected: product })}
              />
            </div>
          ))
        }
      </div>
    );
  }
}

export default connect(state => ({ city: state.city }), null)(Products);
