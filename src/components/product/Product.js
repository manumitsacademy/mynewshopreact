import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../store/actions/product';
const Product = ({products,getProducts}) => {
    React.useEffect(()=>{
        getProducts();
    },[])
    React.useEffect(()=>{
      console.log("products",products)
  },[])
  return (
    <div className="betterview">
      <h4>Products</h4>
      {
        products && products.map((s, i) => {
          return <li key={i}>{s.name}
          <img src={s.image} width="100px" alt=""></img>
          </li>;
        })
      }
    </div>
  );
};
function mapStateToProps(state){
  return {
    products:state.ProductReducer.products
  }
}
function mapDispactchToProp(dispatch){
    return {
       getProducts:()=>{dispatch(getAllProducts())}
    }
}
export default connect(mapStateToProps,mapDispactchToProp)(Product);
