const initState = {
    price: 0
}
function app(state = initState, action) {
    switch (action.type) {
        case 'ADD_PRICE':
            return Object.assign({}, state, { price: state.price + 1 })
        case "SUB_PRICE":
            return Object.assign({}, state, { price: state.price - 1 })
        default:
            return { ...state }
    }
}

export default {
    app
}