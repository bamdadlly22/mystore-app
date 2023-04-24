const { combineReducers } = require("redux");
const { cartReducer } = require("./cart/cartReducer");


const rootReducer = combineReducers({
    shoppingCart: cartReducer
});

export default rootReducer;