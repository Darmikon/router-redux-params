import { createAction } from 'redux-actions';

/* --------------------------example--------------------------------
export const TYPE = constants('module-name/namespace', [
	'~GET_NOTE', //it will create GET_NOTE, GET_NOTE_LOADING, ...
	'NORMAL_ACTION' //it will create only itself
])
------------------------------------------------------------------*/

export function constants(namespace = '', types){
    const _SUFFIXES = [
        'LOADING',
        'PENDING',
        'SUCCESS',
        'ERROR',
        'FAILED',
        'CANCELED'
    ]

    if(arguments.length === 1 || Array.isArray(namespace)){
        types = namespace;
        namespace = '';
    }

    if(!Array.isArray(types)){
        throw 'types should be an array';
    }

    return types.reduce((obj,name)=>{
        if(name.indexOf('~') === 0){
            let type =  name.slice(1);

            obj[type] = (namespace ? `${namespace}/` : '') + `${type}`;

            _SUFFIXES.forEach(suf=>{
                obj[type + '_' + suf] = (namespace ? `${namespace}/` : '') + `${type}_${suf}`
            })
        }else{
            obj[name] = (namespace ? `${namespace}/` : '') + `${name}`
        }

        return obj;
    },{})
}

//HELPERS
export function loading(state, action){
    return { ...state, error: null, loading: true }
}

export function success(state, action){
    return { ...state, payload: action.payload, error: null, loading: false }
}

export function error(state, action){
    let error = action.payload && action.payload
    return { ...state, error, loading: false }
}


function camelize(str) {
    return str.toLowerCase()
        .split('_')
        .reduce((output,word)=>{
            if(!output){
                output = word;
            }else{
                output += word.charAt(0).toUpperCase() + word.slice(1);
            }

            return output;
        });
}

function isObject(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase() === 'object'
}

export function actions(TYPES){
    if(!isObject(TYPES)){
        throw 'TYPES should be an object'
    }

    return Object.keys(TYPES).reduce((actions,TYPE)=>{
        actions[camelize(TYPE)] = createAction(TYPES[TYPE]);

        return actions;
    },{})
}