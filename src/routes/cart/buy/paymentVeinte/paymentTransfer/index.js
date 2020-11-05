import {h} from 'preact';
import style from '../../style.css';
import {FormattedMessage} from "react-intl";


const coins = [
    {id: 1, name: 'Dólares'},
    {id: 2, name: 'Euros'},
    {id: 3, name: 'Pesos Chilenos'},
    {id: 5, name: 'Pesos Colombianos'}
];

const PaymentTransfer = () => {
    return (
        <div className="container" id="paymentTransfer">
            <h5>Pago Transferencia</h5>
            <div className="row">
                {coins.map((coin) => (
                    <div className="col s2" key={coin.id}>
                        <div className="card darken-1">
                            <div className="card-content">
                                <span className="card-title">{coin.name}</span>
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

export default PaymentTransfer;
