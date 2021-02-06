import React, {h} from 'preact';
import {useEffect} from "preact/hooks";
import internationalization from "../../../../../i18n/i18n";
import * as QRCode from 'qrcode';


function PaymentCryptoResponse(props) {

    const opts = {
        type: 'image/jpeg',
        quality: 0.3,
        width: 220,
        margin: 1,
    }

    useEffect(() => {
        QRCode.toCanvas(document.getElementById('canvas'), props.address, opts,(error) => {
            if (error) console.error(error)
            console.log('success!');
        })
    })

    return (
        <div className="container" id="paymentCrypto">
            <canvas id="canvas" width={400} height={400} />
        </div>
    )
}

export default PaymentCryptoResponse;
