//-------------------------------ducks/index.js---------------------------------
// GLOBAL IMPORTS
import {constants, actions} from 'ducks-helpers'
import {createAction, handleActions} from 'redux-actions';

// CUSTOM IMPORTS
// ...

// ACTION TYPES
export const TYPE = constants('@@routerParams', [
    'URL_UPDATE',
])

// ACTIONS
export const ACTION = actions(TYPE);

// STATE
const INITIAL_STATE = {
    href          : null,
    params        : {}
}

// REDUCER
export default handleActions({
    [TYPE.URL_UPDATE]: urlUpdate
}, INITIAL_STATE)

function urlUpdate(state, action){
    return {...state,
        ...action.payload,
        location: {...action.payload.location,
        query: {...action.payload.location.query}}}
}