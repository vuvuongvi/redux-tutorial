let redux = require('redux');
let defaultState = {
   mang: ['Android', 'iOS', 'NodeJS'],
   isAdding: false
}
let reducer = (state = defaultState, action) => {
    return state;
}
let store = redux.createStore(reducer);
console.log(store.getState())