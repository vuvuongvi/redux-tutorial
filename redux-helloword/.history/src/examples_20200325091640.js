let redux = require('redux');
let defaultState = {
   mang: ['Android', 'iOS', 'NodeJS'],
   isAdding: false
}
let reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'TOGGLE_IS_ADDING':
            return {...state}

    }
}
let store = redux.createStore(reducer);
console.log(store.getState())