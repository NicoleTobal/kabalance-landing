import {CHANGE_LANGUAGE} from "./languageTypes";

/**
 * change language is an action creator
 */
export const changeLanguage = lang => {
    return {
        type: CHANGE_LANGUAGE,
        language: lang
    }
}