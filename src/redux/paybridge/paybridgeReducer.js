import {
    FETCH_PAYBRIDGE_TOKEN,
    FETCH_PAYBRIDGE_FAILURE,
    FETCH_PAYBRIDGE_REQUEST,
    FETCH_PAYBRIDGE_SUCCESS
} from "./paybridgeTypes";

const initialState = {
    token: '',
    show: true,
    loading: false,
    data: [],
    error: ''
}

const paybridgeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PAYBRIDGE_TOKEN:
            return {
                ...state,
                token: action.payload
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