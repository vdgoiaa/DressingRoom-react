import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../Store/actions/index";

class ProductItem extends Component {
  handleTryCloth = () => {
    // return()=>{
    // this.props.dispatch({
    //   type:"SET_PRODUCT",
    //   payload:{
    //     type:this.props.prod.type,
    //     img:this.props.prod.imgSrc_png,
    //   }
    // })
    // }
    this.props.dispatch(
      createAction("SET_PRODUCT", {
        type: this.props.prod.type,
        img: this.props.prod.imgSrc_png,
      })
    );
  };

  render() {
    const { name, imgSrc_jpg } = this.props.prod;
    return (
      <div className="card mb-3">
        <img src={imgSrc_jpg} alt="productImg" />
        <div className="card-body">
          <p className="lead">{name}</p>
          <button onClick={this.handleTryCloth} className="btn btn-success">
            Thử
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
