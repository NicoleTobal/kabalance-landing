import {h} from 'preact';
import style from '../../style.css';
import {FormattedMessage} from "react-intl";
import bitcoin from '../../../../../assets/images/cryptos/bitcoin.jpeg';
import litecoin from '../../../../../assets/images/cryptos/litecoin.jpeg';
import dash from '../../../../../assets/images/cryptos/dash.jpeg';
import petro from '../../../../../assets/images/cryptos/petro.jpeg';
import ether from '../../../../../assets/images/cryptos/ether.jpeg';
import {useForm} from "react-hook-form";
import {paymentMobile} from "../../../../../payments/paybridge/PaybridgeOperations";


const cryptos = [
    {id: 1, name: 'bitcoin', src: bitcoin, address: '1cd2122dFW67JHasdqqf415c13f1'},
    {id: 2, name: 'litecoin', src: litecoin, address: '2dFW67JHasdqqf415c13f11cd212'},
    {id: 3, name: 'dash', src: dash, address: '7JHasdqq1cd2122dFW6f413f115c'},
    {id: 4, name: 'petro', src: petro, address: '1cd21W67JHasdqq5c13f122dF'},
    {id: 5, name: 'ether', src: ether, address: 'f411cd2122dFW67Jsdqqf415c13f1Ha'},
    {id: 6, name: 'bitcoin', src: bitcoin, address: 'c13JHasdqqf4151f1cd2122dFW67'},
];

/*
    {
    "currency": "btc",
    "pay_type": "crypto" ,
    "pay_user": {
        "email" : "cuenta@gmail.com",
        "name" : "victor",
        "surname": "santander" ,
        "ci":"123345678"
    }
}
 */
const PaymentCryptos = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => {
        const body = {
            currency: data.currency,
            pay_user: {
                email: data.email,
                name: data.name,
                surname: data.surname,
                ci: data.ci
            },
            pay_type: "crypto"
        }
        const response = await paymentMobile(body);
    };
    return (
        <div className="container" id="paymentCrypto">
            <h5>Pago Cryptomonedas</h5>
            <div className="row">
                {cryptos.map((crypto) => (
                        <div className="col s2" key={crypto.id}>
                            <div className="card darken-1">
                                <div className="card-content">
                                    <h6>
                                        <b><img className={style.cryptocoins} src={crypto.src} alt={crypto.name}/> {crypto.name.toUpperCase()}</b>
                                    </h6>
                                </div>
                                <div className="card-action">
                                    <FormattedMessage id="btnToPay">
                                        {message => <button>{message}</button>}
                                    </FormattedMessage>
                                </div>
                            </div>
                        </div>

                    )
                )}
            </div>

        </div>
    );
}

export default PaymentCrypto;
