import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Container } from "../../Common";
import { Category } from "./Category";
import { CategoriesActions } from "../../../Actions";

class CategoriesClass extends Component {
  // mapCategory(value, id, previews, categories) {
  //   if (value !== true) {
  //     _.forEach(value, (val, key) => {
  //       this.mapCategory(val, key, previews, value);
  //     });
  //   } else if (value === true) {
  //     if (!previews[id]) {
  //       delete categories[id];
  //       return;
  //     }
  //     categories[id] = previews[id];
  //   }
  // }

  componentWillMount() {
    this.props.get();
  }

  // handleSelectChange(value) {
  //   let filteredPosts = value === ""
  //     ? this
  //       .state
  //       .posts
  //       .slice()
  //     : PostPreviewService.filterByTags(this.state.posts, value.split(","));
  //   filteredPosts = _.keyBy(filteredPosts, "id");
  //   let mapCategories = JSON.parse(JSON.stringify(this.state.categories));
  //   _.forEach(mapCategories, (val, id) => {
  //     this.mapCategory(val, id, filteredPosts, mapCategories);
  //   });
  //   this.setState({selectValue: value, mapCategories});
  // }

  // handleSearchChange(e) {
  //   const filter = e.target.value;
  //   let filteredPosts = filter === ""
  //     ? this
  //       .state
  //       .posts
  //       .slice()
  //     : PostPreviewService.filterByText(this.state.posts, filter);
  //   filteredPosts = _.keyBy(filteredPosts, "id");
  //   let mapCategories = JSON.parse(JSON.stringify(this.state.categories));
  //   _.forEach(mapCategories, (val, id) => {
  //     this.mapCategory(val, id, filteredPosts, mapCategories);
  //   });
  //   this.setState({mapCategories});
  // }

  // renderSubCategory(subCategory) {
  //   const items = _.map(subCategory, (val, id) => {
  //     if (!val || _.isEmpty(val)) {
  //       return "";
  //     }
  //     if (val.title) {
  //       return this.renderSubCategory(val);
  //     } else {
  //       return (
  //         <Category key={id} name={id}>
  //           {this.renderSubCategory(val)}
  //         </Category>
  //       );
  //     }
  //   });
  //   return items;
  // }
  createCategories(categories) {
    return _.map(categories, (val, key) => {
      if (val === true) {
        return <Category key={key} name={key} isEmpty/>;
      }
      return (
        <Category key={key} name={key}>
          {this.createCategories(val)}
        </Category>
      );
    });
  }
  renderCategories() {
    const { categories } = this.props;
    const items = this.createCategories(categories);
    return items;
    // const items = _.map(this.state.mapCategories, (val, id) => {
    //   if (!val || _.isEmpty(val)) {
    //     return;
    //   } else {
    //     const children = this.renderSubCategory(val);
    //     if (children == "" || _.every(children, val => {
    //       return val == "";
    //     })) {
    //       return;
    //     }
    //     return (
    //       <Category key={id} name={id} isFirst>
    //         {children}
    //       </Category>
    //     );
    //   }
    // });
    // const itemsAreUndefined = _.every(items, val => {
    //   return val === undefined;
    // })
    // if (items.length === 0 || itemsAreUndefined) {
    //   return (
    //     <div>
    //       <br/>
    //       <i className="far fa-frown fa-7x"></i>
    //       <br />
    //       <br />
    //       <span style={{fontSize: "25px", fontWeight: "600"}}>No results were found</span>
    //     </div>
    //   );
    // }
    // return items;
  }

  render() {
    return (
      <div>
        <Container>
          <br /> {this.renderCategories()}
          <br />
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.Categories };
}
const Categories = connect(mapStateToProps, {
  get: CategoriesActions.get
})(CategoriesClass);

export { Categories };
