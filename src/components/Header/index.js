import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../store/actions/product';
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-danger navbar-dark sticky-top">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

function mapStateToProps(state){
    return {
      productTypes:state.ProductReducer.products
    }
  }
  function mapDispactchToProp(dispatch){
      return {
         getProducts:()=>{dispatch(getAllProducts())}
      }
  }
  export default connect(mapStateToProps,mapDispactchToProp)(Header);