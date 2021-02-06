import {
    FETCH_PAYBRIDGE_TOKEN,
    FETCH_PAYBRIDGE_FAILURE,
    FETCH_PAYBRIDGE_REQUEST,
    FETCH_PAYBRIDGE_SUCCESS,
    FETCH_PAYBRIDGE_BANK_INFO_PGM,
    FETCH_PAYBRIDGE_BANK_INFO_TRF,
    SET_PAYMENT_TYPE
} from "./paybridgeTypes";

const initialState = {
    token: '',
    show: true,
    loading: false,
    data: [],
    error: '',
    accountHolder: '',
    bank: '',
    accountNumber: '',
    rif: '',
    phone: '',
    payment_type: ''
}

const paybridgeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PAYBRIDGE_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case FETCH_PAYBRIDGE_BANK_INFO_PGM:
            return {
                ...state,
                loading: false,
                show: true,
                bank: action.payload[0].name,
                rif: action.payload[0].data[0][1],
                phone: action.payload[0].data[1][1],
                accountHolder: action.payload[0].data[2][1]
            }
        case FETCH_PAYBRIDGE_BANK_INFO_TRF:
            return {
                ...state,
                loading: false,
                show: true,
                bank: action.payload[2].name,
                rif: action.payload[2].data[1][1],
                accountHolder: action.payload[2].data[2][1],
                accountNumber: action.payload[2].data[0][1]
            }
        case FETCH_PAYBRIDGE_REQUEST:
            return {
                ...state,
                show: false,
                loading: true
            }
        case FETCH_PAYBRIDGE_SUCCESS:
            return {
                loading: false,
                show: false,
                data: action.payload,
                error: ''
            }
        case FETCH_PAYBRIDGE_FAILURE:
            return {
                loading: false,
                show: false,
                data: [],
                error: action.payload
            }
        case SET_PAYMENT_TYPE:
            return {
                payment_type: action.payload
            }
        default:
            return state
    }
}
export default paybridgeReducer;