## React router redux params

React router params inside redux store.

This plugin adds new action which will be fired when
react router changed properties after url update.

At the moment it works in browsers only.

You will get all route params inside `routingParams` property
in store.

```
store = {
    routingParams: {
        href: 'http://localhost:3000/folders/666,
        params:{
            folderId: 666
        },
        location: {
            //... all keys from react router this.props.location
        }
    }
}
```


##Installation
`npm i router-redux-params --save`

- At first - you should add RouterParams container as a component
for the root route
```
import RouterParams from 'router-redux-params';
import { Route }    from 'react-router';
...
const routes = (
    <Route path="/" component = {RouterParams}>

```

-The second - you must add reducer to rootReducer with
`routingParams` key
```
import {combineReducers} from 'redux';
import {reducer as routingParams} from 'router-redux-params';

const rootReducer = combineReducers({
    routingParams //this key name is important!!!
    //..reducers will go here
    //...
    //†reducer
});

export default rootReducer;
```