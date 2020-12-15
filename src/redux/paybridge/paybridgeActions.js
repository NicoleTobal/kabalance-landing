import axios from 'axios';
import {
    FETCH_PAYBRIDGE_TOKEN,
    FETCH_PAYBRIDGE_FAILURE,
    FETCH_PAYBRIDGE_REQUEST,
    FETCH_PAYBRIDGE_SUCCESS,
    FETCH_PAYBRIDGE_BANK_INFO
} from "./paybridgeTypes";

const PAYBRIDGE_URL = 'http://206.189.182.231:8060';
const username = "test@gmail.com";
const password = "pru3ba123456789";

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

const fetchPaybridgeSuccess = data => {
    return {
        type: FETCH_PAYBRIDGE_SUCCESS,
        payload: data
    }
}

const fetchPaybridgeBankInfo = data => {
    return {
        type: FETCH_PAYBRIDGE_BANK_INFO,
        payload: data
    }
}

const fetchPaybridgeFailure = error => {
    return {
        type: FETCH_PAYBRIDGE_FAILURE,
        payload: error
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
            data: {username, password},
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
export const getBank = (token) => {
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
            dispatch(fetchPaybridgeBankInfo(dataResponse))
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
                dispatch(fetchPaybridgeSuccess(dataResponse))
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
            dispatch(fetchPaybridgeSuccess(dataResponse))
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
            dispatch(fetchPaybridgeSuccess(dataResponse))
        }).catch(error => {
            const errorMsg = error.message;
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
            data: {username, password},
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const dataResponse = response.data
            dispatch(fetchPaybridgeSuccess(dataResponse))
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPaybridgeFailure(errorMsg))
        })
    }
}

/**
 * List of Banks
 */
export const bankList = () => {
    return (dispatch) => {
        dispatch(fetchPaybridgeRequest)
        axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/auth-token/`,
            data: {username, password},
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            dispatch(fetchPaybridgeSuccess(response))
            axios({
                method: 'get',
                url: `${PAYBRIDGE_URL}/api/banks/`,
                headers: {
                    'Authorization': `Token ${response.data.token}`,
                    'Content-Type': 'application/json'
                }
            })
        }).then(response => {
            dispatch(fetchPaybridgeSuccess(response))
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPaybridgeFailure(errorMsg))
        })
    }
};
