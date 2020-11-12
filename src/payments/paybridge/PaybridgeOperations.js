/**
 * Return Paybridge token
 * Requires data:  { username: "xxxx@yyyy.zzz", password: "*******" }
 */

const axios = require('axios');
const PAYBRIDGE_URL = 'http://206.189.182.231:8060';
//const PAYBRIDGE_URL = process.env.PREACT_APP_PAYBRIDGE;

/**
 * Get Paybridge Token
 * @returns {Promise<AxiosResponse<any>|{error: *}>}
 */
export const getToken = async () => {
    const username = "test@gmail.com";
    const password= "pru3ba123456789";
    try {
        let response = await axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/auth-token/`,
            data:  { username, password },
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response;
    } catch (err) {
        return{ error: err };
    }
};

/**
 * Return list of payments
 * @param body
 * @returns {Promise<{error: *}>}
 */
export const listPayments = async (body) => {
    try {
        const fetchToken = await getToken()
        const token = fetchToken.data.token

        let response = await axios({
            method: 'get',
            url: `${PAYBRIDGE_URL}/api/pay/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        console.log('Payments:', response)
        return response;
    } catch (err) {
        return{ error: err };
    }
};

/**
 * Do the Mobile Payment
 * @param body
 * @returns {Promise<{error: *}>}
 */
export const paymentMobile = async (body) => {
    try {
        const fetchToken = await getToken()
        const token = fetchToken.data.token

        let response = await axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/api/pay/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
            data: body
        })
        console.log('The Mobile Payment was successful!', response)
        return response;
    } catch (err) {
        return{ error: err };
    }
};


/**
 * Do the Mobile Payment
 * @param body
 * @returns {Promise<{error: *}>}
 */
export const paymentCrypto = async (body) => {
    try {
        const fetchToken = await getToken()
        const token = fetchToken.data.token

        let response = await axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/api/pay/crypto/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
            data: body
        })
        console.log('The Crypto Payment was successful!', response)
        return response;
    } catch (err) {
        return{ error: err };
    }
};

/**
 * Do the Mobile Payment
 * @param body
 * @returns {Promise<{error: *}>}
 */
export const bankList = async () => {
    try {
        const fetchToken = await getToken()
        const token = fetchToken.data.token

        let response = await axios({
            method: 'get',
            url: `${PAYBRIDGE_URL}/api/banks/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        return response;
    } catch (err) {
        return{ error: err };
    }
};

/**
 * Do the Transfer Payment
 * @param body
 * @returns {Promise<{error: *}>}
 */
export const paymentTransfer = async (body) => {
    try {
        const fetchToken = await getToken()
        const token = fetchToken.data.token

        let response = await axios({
            method: 'post',
            url: `${PAYBRIDGE_URL}/api/pay/`,
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
            data: body
        })
        console.log('The Transfer Payment was successful!', response)
        return response;
    } catch (err) {
        return{ error: err };
    }
};


