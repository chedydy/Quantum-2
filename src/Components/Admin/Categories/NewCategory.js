import React, { Component } from "react";
import { connect } from "react-redux";
import { Input } from "../../Common";
import { CategoriesActions } from "../../../Actions";
import "./NewCategory.css";
class NewCategoryClass extends Component {
  render() {
    return (
      <div className="category-entire-boss-container">
        <div className="category-boss-container">
          <div
            style={{
              flexGrow: this.props.isFirst ? "0" : "0.5",
              flexShrink: "1",
              flexBasis: "0%"
            }}
          />
          <div
            className="category-mini-boss-container"
            style={{
              flexGrow: this.props.isFirst ? "1" : "9.5",
              flexShrink: "1",
              flexBasis: "0%",
              paddingLeft: this.props.isFirst ? 0 : 21
            }}
          >
            <div className="category-container-admin">
              <div className="category-inline">
                <div className="category-input-wrapper">
                  <input
                    type="text"
                    className="category-input"
                    onChange={event =>
                      this.props.edit(
                        event.target.value,
                        this.props.parent
                      )
                    }
                    value={this.props.name}
                  />
                </div>
                <div
                  className="add-button"
                  onClick={() => {
                    this.props.save(this.props.name,this.props.parent);
                  }}
                >
                  <i className={`fa fa-save`} />
                </div>
                <div
                  className="add-button"
                  onClick={() => {
                    this.props.cancel(this.props.parent);
                  }}
                >
                  <i className={`fa fa-ban`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const NewCategory = connect(null, {
  new: CategoriesActions.new,
  save: CategoriesActions.save,
  cancel: CategoriesActions.cancel,
  edit: CategoriesActions.edit
})(NewCategoryClass);

export { NewCategory };
