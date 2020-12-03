import {CHANGE_LANGUAGE} from "./languageTypes";

const initialState = {
    language: 'es-ES'
}


function languageReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return { ...state, language: action.language }
        default:
            return state
    }
}

export default languageReducer;