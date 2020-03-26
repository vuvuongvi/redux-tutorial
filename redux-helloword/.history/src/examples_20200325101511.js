let redux = require('redux');
let defaultState = {
   mang: ['Android', 'iOS', 'NodeJS'],
   isAdding: false
}
let reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'TOGGLE_IS_ADDING':
            // ở đây mình sẽ lấy tất cả thuộc tính của state cũ, rồi mình chỉ ghi đè thuộc tính isAdding thôi
            return {...state, isAdding: !state.isAdding}
        default:
            return state;

    }
}
let store = redux.createStore(reducer);
console.log(store.getState())
store.dispatch({type: 'TOGGLE_IS_ADDING'})