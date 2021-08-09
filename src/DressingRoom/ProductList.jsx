import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends Component {
  renderProducts = () => {
    return this.props.products
    .filter((item) =>{return item.type === this.props.selectedCategory})
    .map((item)=>{
      return(
        <div key={item.id} className="col-4">
          <ProductItem prod={item} />
        </div>
      )
    })
    
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            {this.renderProducts()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.productList,
    selectedCategory:state.category.selectedCategory,
  };
};

export default connect(mapStateToProps)(ProductList);
