let redux = require('redux');
// defaultState là gồm tất cả các state mặc định của nguyên cái app mình luôn nè
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
        case 'REMOVE_ITEM':
            // lọc nè, nếu phần tử index nào mà duyệt qua khác với phần tử index thì trả về, mà bằng thì loại bỏ nó đi 
            return {...state, mang: state.mang.filter((e, i) => i!= action.index)}
        default:
            return state;

    }
}
let store = redux.createStore(reducer);
store.subscribe(() => {
    console.log('Changed');
})