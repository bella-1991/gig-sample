import keyMirror from 'keymirror'

/*
 * URLs
 */

export const API = {
    VALUES: 'http://207.154.254.31/api/company-values',
    OFFICES: 'http://207.154.254.31/api/offices',
    TOKEN: 'UUX0pY8x2yRIo0TYpUFAy40C4kDxD0Rwt7vRm4PgLjzW6Ll2GSNQJUANccPMbDGHS8KgJ',
}

/*
 * Defaults
 */

export const Defaults = {
    LANG: 'en',
    AVAILABLE_LANG: ['en', 'sv'],
    ROTATE: false,
    MONOCHROME: false,
    RANDOM: false,
    MENU_OPEN: false,
    LOADING: true
}

/*
 * Actions
 */
export const ActionTypes = keyMirror({
    FETCH_ALL_VALUES: null,
    FETCH_ALL_OFFICES: null,
    TOGGLE_MENU: null,
    CHANGE_LANGUAGE: null,
    ROTATE_TEXT: null,
    MONOCHROME_COLOURS: null,
    RANDOM_ON: null,
    RANDOM_OFF: null,
    REQUEST_APIS: null,
    TOGGLE_LOADER: null
})

/*
 * Labels
 */
export const Labels = {
    'en': {
        FIND_OUT_MORE: 'Find out more',
        LANGUAGE: 'Language',
        MONOCHROME: 'Monochrome',
        RANDOMISE: 'Randomise Colours',
        ROTATE: 'Rotate Text',
        RESET: 'Reset'
    },
    'sv': {
        FIND_OUT_MORE: 'Få reda på mer',
        LANGUAGE: 'Språk',
        MONOCHROME: 'Svartvit',
        RANDOMISE: 'Randomisera Färger',
        ROTATE: 'Rotera text',
        RESET: 'Återställa'
    }
}