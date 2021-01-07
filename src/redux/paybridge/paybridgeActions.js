import axios from 'axios';
import {
    FETCH_PAYBRIDGE_TOKEN,
    FETCH_PAYBRIDGE_FAILURE,
    FETCH_PAYBRIDGE_REQUEST,
    FETCH_PAYBRIDGE_SUCCESS,
    FETCH_PAYBRIDGE_BANK_INFO_PGM,
    FETCH_PAYBRIDGE_BANK_INFO_TRF,
    SET_PAYMENT_TYPE
} from "./paybridgeTypes";


const PAYBRIDGE_URL = process.env.PREACT_APP_PAYBRIDGE;
const USERNAME = process.env.PREACT_APP_USERNAME;
const PASSWORD = process.env.PREACT_APP_PASSWORD;

export const fetchPaybridgeToken = token => {
    return {
        type: FETCH_PAYBRIDGE_TOKEN,
        payload: token.data.token
    }
}

const fetchPaybridgeRequest = () => {
    return {
        type: FETCH_PAYBRIDGE_REQUEST
    }
}

const fetchPaybridgeSuccess = (data, operation) => {
    return {
        type: FETCH_PAYBRIDGE_SUCCESS,
        payload: data,
        payment_type: operation
    }
}

const fetchPaybridgeBankInfoPGM = data => {
    return {
        type: FETCH_PAYBRIDGE_BANK_INFO_PGM,
        payload: data
    }
}

const fetchPaybridgeBankInfoTRF = data => {
    return {
        type: FETCH_PAYBRIDGE_BANK_INFO_TRF,
        payload: data
    }
}

const fetchPaybridgeFailure = error => {
    return {
        type: FETCH_PAYBRIDGE_FAILURE,
        payload: error
    }
}

export const setPaymentType = data => {
    return {
        type: SET_PAYMENT_TYPE,
        payload: data
    }
}

/**
 * Get Token
 */
export const getToken = () => {
    return (dispatch) => {
        axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/auth-token/`,
            data: {username: USERNAME, password: PASSWORD},
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            dispatch(fetchPaybridgeToken(response))
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPaybridgeFailure(errorMsg))
        })
    }
}



/**
 * Get Bancamida info
 */
export const getBankPGM = (token) => {
    return (dispatch) => {
        dispatch(fetchPaybridgeRequest())
        axios({
            method: 'get',
            url: `${PAYBRIDGE_URL}/api/pgm/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const dataResponse = response.data
            //console.log("Data", dataResponse[0].data)
            dispatch(fetchPaybridgeBankInfoPGM(dataResponse))
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPaybridgeFailure(errorMsg))
        })
    }
}

/**
 * Do the Mobile Payment
 */
export const doPaymentMobile = (body, token) => {
    return (dispatch) => {
        dispatch(fetchPaybridgeRequest())
        axios({
                method: 'post',
                url: `${PAYBRIDGE_URL}/api/pay/`,
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json'
                },
                data: body
            }
        ).then(response => {
                const dataResponse = response.data
                dispatch(fetchPaybridgeSuccess(dataResponse, 'payment_mobile'))
            }).catch(error => {
                const errorMsg = error.message;
                dispatch(fetchPaybridgeFailure(errorMsg))
            })
    }
}
/**/

/**
 * Do the Transfer Payment
 */
export const doPaymentTransfer = (body, token) => {
    return (dispatch) => {
        dispatch(fetchPaybridgeRequest())
        axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/api/pay/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
            data: body
        }).then(response => {
            const dataResponse = response.data
            dispatch(fetchPaybridgeSuccess(dataResponse, 'payment_transfer'))
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPaybridgeFailure(errorMsg))
        })
    }
}

/**
 * Do cryptos payment
 * (Response: "your pay can not be processed") Preguntar a Gustavo
 */
export const doPaymentCrypto = (body, token) => {
    return (dispatch) => {
        dispatch(fetchPaybridgeRequest())
        axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/api/pay/crypto/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
            data: body
        }).then(response => {
            const dataResponse = response.data
            console.log('Todo bien')
            dispatch(fetchPaybridgeSuccess(dataResponse, 'payment_crypto'))
        }).catch(error => {
            const errorMsg = error.message;
            console.log('Dio Error')
            dispatch(fetchPaybridgeFailure(errorMsg))
        })
    }
};

/**
 * Do email payment
 * (Temporal code becouse needs the email payment correct endpoint and body )
 */
export const doPaymentEmail = () => {
    return (dispatch) => {
        dispatch(fetchPaybridgeRequest)
        axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/auth-token/`,
            data: {username: USERNAME, password: PASSWORD},
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const dataResponse = response.data
            dispatch(fetchPaybridgeSuccess(dataResponse, 'payment_email'))
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPaybridgeFailure(errorMsg))
        })
    }
}

/**
 * List of Banks
 */
export const getBankTRF = (token) => {
    return (dispatch) => {
        dispatch(fetchPaybridgeRequest())
        axios({
            method: 'get',
            url: `${PAYBRIDGE_URL}/api/banks/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const dataResponse = response.data;
            dispatch(fetchPaybridgeBankInfoTRF(dataResponse))
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPaybridgeFailure(errorMsg))
        })
    }

};
