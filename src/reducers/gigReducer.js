import { Defaults as defaultValues, ActionTypes as types } from '../constants';

var defaultState = {
    loading: defaultValues.LOADING,
    menuOpen: defaultValues.MENU_OPEN,
    lang: defaultValues.LANG,
    rotate: defaultValues.ROTATE,
    monochrome: defaultValues.MONOCHROME,
    random: defaultValues.RANDOM,
    values: {},
    offices: {}
}

const gigReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.FETCH_ALL_VALUES:
            return {
                ...state,
                values: action.data.reduce((r, a) => {
                    r[a.language] = [...r[a.language] || [], a];
                    return r;
                   }, {})
            }
        case types.FETCH_ALL_OFFICES:
            return {
                ...state,
                offices: action.data
            }
        case types.TOGGLE_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen
            }
        case types.CHANGE_LANGUAGE:
            return {
                ...state,
                lang: action.data
            }
        case types.ROTATE_TEXT:
            return {
                ...state,
                rotate: !state.rotate
            }
        case types.MONOCHROME_COLOURS:
            return {
                ...state,
                monochrome: !state.monochrome
            }
        case types.RANDOM_ON:
            return {
                ...state,
                random: true 
            }
        case types.RANDOM_OFF:
            return {
                ...state,
                random: false
            }
        case types.REQUEST_APIS:
            return {
                ...state,
                loading: true
            }
        case types.TOGGLE_LOADER:
            return {
                ...state,
                loading: !state.loading
            }
        default: 
            return state;
    }
}

export default gigReducer;