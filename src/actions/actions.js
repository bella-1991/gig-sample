import axios from 'axios';
import { ActionTypes as types, API as api } from '../constants';

export const fetchValues = data => {
    return {
        type: types.FETCH_ALL_VALUES,
        data: data
    }
}

export const fetchOffices = data => {
    return {
        type: types.FETCH_ALL_OFFICES,
        data: data
    }
}

export const toggleMenu = () => {
    return {
        type: types.TOGGLE_MENU
    }
}

export const changeLang = data => {
    return {
        type: types.CHANGE_LANGUAGE,
        data: data
    }
}

export const toggleRotate = () => {
    return {
        type: types.ROTATE_TEXT
    }
}

export const toggleMonochrome = () => {
    return {
        type: types.MONOCHROME_COLOURS
    }
}

export const toggleLoader = () => {
    return {
        type: types.TOGGLE_LOADER
    }
}

// async function
export function randomiseColours() {
    return (dispatch) => {
        randomOn(dispatch);
    }
}

// async function
export function resetColours() {
    return (dispatch) => {
        randomOff(dispatch);
    }
}

const randomOn = dispatch => {
    dispatch({
        type: types.RANDOM_ON
    })
}

const randomOff = dispatch => {
    dispatch({
        type: types.RANDOM_OFF
    })
}