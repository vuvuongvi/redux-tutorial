let mangReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'REMOVE_ITEM':
            return [...state, state.mang.filter((e, i) => i!= action.index)]
        default:
            return state
    }
}
export default mangReducer;