const initialState = {
    products:[]
};
const ProductReducer = (state=initialState,action)=>{
    console.log(action.payload)
    switch(action.type){
        case 'UPDATE_PRODUCTS':
            return {...state,products:[...action.payload]}
        default:
            return state;
    }
}
export default ProductReducer