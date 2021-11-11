import axios from "axios";
export function getAllProducts(){
    return (dispatch)=>{
        axios.get('http://localhost:4000/products?_page=1&_limit=200')
            .then(function (response) {
                console.log("response::",response)
              dispatch({type:'UPDATE_PRODUCTS',payload:response.data})
            });
    }
}