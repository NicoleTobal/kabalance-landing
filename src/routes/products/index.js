import React, {h, Component} from 'preact';
import style from './style';
import RecipeMenu from './recipeMenu';
import CountrySelection from './countrySelection';
import {connect} from 'react-redux';

const productList = [
    {
        image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/108121621_383700135925484_2496260514079274856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MwcEf-QybBAAX9DZRAS&oh=13e1aa8b00ad999db85645f0b2ae3d44&oe=5F6C5775",
        title: "Dulce de leche",
        titleEng: "Milk sweet",
        price: 5,
        flavours: [],
        styles: [],
        sizes: []
    },
    {
        image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/108121621_383700135925484_2496260514079274856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MwcEf-QybBAAX9DZRAS&oh=13e1aa8b00ad999db85645f0b2ae3d44&oe=5F6C5775",
        title: "Parlova",
        titleEng: "Parlova",
        price: 10,
        flavours: [],
        styles: ['Normal', 'Sugar free', 'Vegana'],
        sizes: ['Pequeño', 'Grande'],
        sizesEng: ['Small', 'Big']
    },
    {
        image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/108121621_383700135925484_2496260514079274856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MwcEf-QybBAAX9DZRAS&oh=13e1aa8b00ad999db85645f0b2ae3d44&oe=5F6C5775",
        title: "Marquesa",
        titleEng: "Marquesa",
        price: 12,
        flavours: ["Arequipe", "Limón", "Chocolate", "Coco"],
        styles: ['Normal', 'Gluten free', 'Sugar free'],
        sizes: ['Pequeño', 'Mediano', 'Grande'],
        sizesEng: ['Small', 'Medium', 'Big']
    },
    {
        image: "https://instagram.fccs3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/108121621_383700135925484_2496260514079274856_n.jpg?_nc_ht=instagram.fccs3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=MwcEf-QybBAAX9DZRAS&oh=13e1aa8b00ad999db85645f0b2ae3d44&oe=5F6C5775",
        title: "Oblea",
        titleEng: "Oblea",
        price: 3,
        flavours: ["Chocolate", "Coco", "Vainilla", "Matcha", "Taro", "Dulce de leche", "Algodón de azucar", "Café"],
        styles: [],
        sizes: []
    }
];

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentImage: -1,
            products: productList,
            countrySelected: '',
        };
    }

    onPrevButtonClick = () => {
        if (this.state.currentImage === 0) {
            this.setState({currentImage: this.state.products.length - 1});
        } else {
            this.setState({currentImage: this.state.currentImage - 1});
        }
    }

    onNextButtonClick = () => {
        if (this.state.currentImage === this.state.products.length - 1) {
            this.setState({currentImage: 0});
        } else {
            this.setState({currentImage: this.state.currentImage + 1});
        }
    }

    getClassname = (index) => {
        if (index === this.state.currentImage) {
            return style.selected;
        }
        if (index === this.state.currentImage - 1 ||
            (this.state.currentImage === 0 && index === this.state.products.length - 1)) {
            return style.prevLeftSecond;
        }
        if (index === this.state.currentImage + 1 ||
            (this.state.currentImage === this.state.products.length - 1 && index === 0)) {
            return style.nextRightSecond;
        }
        if (this.state.currentImage === this.state.products.length - 2 && index === 0 ||
            this.state.currentImage === this.state.products.length - 1 && index === 1) {
            return style.hideRight;
        }
        if (this.state.currentImage === 1 && index === this.state.products.length - 1 ||
            this.state.currentImage === 0 && index === this.state.products.length - 2) {
            return style.hideLeft;
        }
        if (index > this.state.currentImage) return style.hideRight;
        return style.hideLeft;
    }

    onCountrySelect(e) {
        this.setState({countrySelected: e.target.innerText});
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
        const {city} = this.props;

        if (city === '' && !this.state.countrySelected) {
            return <CountrySelection onCountrySelect={e => this.onCountrySelect(e)}/>;
        }
        return (
            <div
                id="products"
                class={`${style.productContainer} row col-md-12 animate__animated animate__fadeInRight animate__normal`}
            >
                {
                    this.state.products.map((product, index) => (
                        <div class={`${style.product} ${this.getColumnWidth(index)}`} key={index}>
                            <RecipeMenu
                                language={this.props.language}
                                image={product.image}
                                title={this.props.language === 'es-ES' ? product.title : product.titleEng}
                                price={product.price}
                                isActive={true}
                                flavours={product.flavours}
                                sizes={this.props.language === 'es-ES' ? product.sizes : product.sizesEng}
                                styles={product.styles}
                                onClick={() => this.onArrowButtonClick(index)}
                                collapsed={this.state.currentImage !== -1 && this.state.currentImage !== index}
                            />
                        </div>
                    ))
                }
                {/* <div class={style.products}>
          <div class={style.carouselContainer}>
            <div class={style.carousel}>
              {
                this.state.products.map((product, index) => (
                  <div class={`${style.product} ${this.getClassname(index)}`} key={index}>
                    <RecipeMenu
                      image={product.image}
                      title={product.title}
                      isActive={index === this.state.currentImage}
                      flavours={product.flavours}
                      sizes={product.sizes}
                      styles={product.styles}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          <svg class={style.prevArrow} onClick={this.onPrevButtonClick} id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512" xmlns="http://www.w3.org/2000/svg">
            <path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z" />
          </svg>
          <svg class={style.nextArrow} onClick={this.onNextButtonClick} id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512" xmlns="http://www.w3.org/2000/svg">
            <path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z" />
          </svg>
        </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.language,
        city: state.city
    };
}

export default connect(mapStateToProps, null)(Products);
