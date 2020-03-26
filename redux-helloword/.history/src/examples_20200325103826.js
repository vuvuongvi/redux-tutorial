let redux = require('redux');
// defaultState là gồm tất cả các state mặc định của nguyên cái app mình luôn nẻ
let defaultState = {
   mang: ['Android', 'iOS', 'NodeJS'],
   isAdding: false
}
let reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'TOGGLE_IS_ADDING':
            // ở đây mình sẽ lấy tất cả thuộc tính của state cũ, rồi mình chỉ ghi đè thuộc tính isAdding thôi
            return {...state, isAdding: !state.isAdding}
        case 'ADD_ITEM':
            return {...state, mang: [...state.mang, action.item]}
        default:
            return state;

    }
}
let store = redux.createStore(reducer);
console.log(store.getState())
store.dispatch({type: 'TOGGLE_IS_ADDING'})
console.log(store.getState());
store.dispatch({
    type: 'ADD_ITEM',
    item: 'Unity'
})
console.log(store.getState())