import React, { Component } from "react";
import "./model.css";
import { connect } from "react-redux";

class Model extends Component {
  render() {
    return (
      <div
        className="contain"
        style={{
          background: `url(${this.props.selectedProducts.background || './assets/img/background/background_998.jpg'})`,
        }}
      >
        <div
          className="body"
          style={{ background: "url(./assets/img/allbody/bodynew.png)" }}
        />
        <div
          className="model"
          style={{ background: "url(./assets/img/model/1000new.png)" }}
        />
        <div
          className="bikinitop"
          style={{ background: "url(./assets/img/allbody/bikini_branew.png)" }}
        />
        <div
          className="bikinibottom"
          style={{
            background: "url(./assets/img/allbody/bikini_pantsnew.png)",
          }}
        />
        <div
          className="feetleft"
          style={{
            background: "url(./assets/img/allbody/feet_high_leftnew.png)",
          }}
        />
        <div
          className="feetright"
          style={{
            background: "url(./assets/img/allbody/feet_high_rightnew.png)",
          }}
        />
        {/* props */}
        <div
          style={{
            backgroundImage: `url(${this.props.selectedProducts.topclothes})`,
            backgroundSize: "cover",
          }}
          className="bikinitop"
        ></div>
        <div
          style={{
            backgroundImage: `url(${this.props.selectedProducts.botclothes})`,
            backgroundSize: "cover",
          }}
          className="bikinibottom"
        ></div>
        <div
          style={{
            backgroundImage: `url(${this.props.selectedProducts.shoes})`,
            backgroundSize: "cover",
          }}
          className="feetstyle"
        ></div>
        <div
          style={{
            backgroundImage: `url(${this.props.selectedProducts.handbags})`,
            backgroundSize: "cover",
          }}
          className="handbagstyle"
        ></div>
        <div
          style={{
            backgroundImage: `url(${this.props.selectedProducts.necklaces})`,
            backgroundSize: "cover",
          }}
          className="handbagstyle"
        ></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProducts: state.product.selectedProducts,
  };
};

export default connect(mapStateToProps)(Model);
