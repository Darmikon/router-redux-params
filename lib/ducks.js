'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.ACTION=exports.TYPE=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _ducksHelpers=require('ducks-helpers');var _reduxActions=require('redux-actions');function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}//-------------------------------ducks/index.js---------------------------------
// GLOBAL IMPORTS
// CUSTOM IMPORTS
// ...
// ACTION TYPES
var TYPE=exports.TYPE=(0,_ducksHelpers.constants)('@@routerParams',['URL_UPDATE']);// ACTIONS
var ACTION=exports.ACTION=(0,_ducksHelpers.actions)(TYPE);// STATE
var INITIAL_STATE={href:null,params:{}};// REDUCER
exports.default=(0,_reduxActions.handleActions)(_defineProperty({},TYPE.URL_UPDATE,urlUpdate),INITIAL_STATE);function urlUpdate(state,action){return _extends({},state,action.payload,{location:_extends({},action.payload.location,{query:_extends({},action.payload.location.query)})});}