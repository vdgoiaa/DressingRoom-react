import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { createAction } from "../Store/actions";

class Category extends Component {
  handleChange = (type) => {
    return () => {
      // this.props.dispatch({
      //   type: "SET_SELECTED_CATEGORY",
      //   payload: type,
      // });
      this.props.dispatch(createAction("SET_SELECTED_CATEGORY", type));
    };
  };
  // this.props.categories
  renderCategories = () => {
    return this.props.categories.map((item) => {
      return (
        <button
          onClick={this.handleChange(item.type)}
          key={item.type}
          className={classNames("btn", {
            "btn-info": item.type === this.props.selectedCategory,
            "btn-secondary": item.type !== this.props.selectedCategory,
          })}
        >
          {item.showName}
        </button>
      );
    });
  };

  render() {
    return (
      <div className="btn-group container-fluid mb-4">
        {/* <button className="btn btn-secondary">Áo</button> */}
        {this.renderCategories()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categoryList,
    selectedCategory: state.category.selectedCategory,
  };
};

export default connect(mapStateToProps)(Category);
