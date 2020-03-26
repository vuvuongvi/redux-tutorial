const redux = require('redux');
const mangReducer = require('./mang');
const isAddingReducer = require('./isAdding');
let reducer = redux.combineReducers({
    mang: mangReducer,
    isAdding: isAddingReducer
})
export default reducer;