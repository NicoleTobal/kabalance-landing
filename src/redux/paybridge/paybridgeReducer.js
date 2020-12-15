import {
    FETCH_PAYBRIDGE_TOKEN,
    FETCH_PAYBRIDGE_FAILURE,
    FETCH_PAYBRIDGE_REQUEST,
    FETCH_PAYBRIDGE_SUCCESS,
    FETCH_PAYBRIDGE_BANK_INFO
} from "./paybridgeTypes";

const initialState = {
    token: '',
    show: true,
    loading: false,
    data: [],
    error: '',
    accountHolder: '',
    bank: '',
    accountNumber: ''
}

const paybridgeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PAYBRIDGE_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case FETCH_PAYBRIDGE_BANK_INFO:
            return {
                ...state,
                loading: false,
                show: true,
                accountHolder: action.payload[0].data[2][1],
                bank: action.payload[0].name
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
        default:
            return state
    }
}
export default paybridgeReducer;