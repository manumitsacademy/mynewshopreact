const initialState = {
    cartProducts:[]
};
const CartReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'UPDATE_PRODUCTS':
            return {...state,cart:[...state.cartProducts,action.payload]}
        default:
            return state;
    }
}
export default CartReducer