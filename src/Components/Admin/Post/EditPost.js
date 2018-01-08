import _ from "lodash";
import {
  PostPreviewService,
  PostService,
  CategoriesService
} from "../../../Services";
import "./EditPost.css";

import { NewPost } from "./NewPost";

class EditPost extends NewPost {
  onInit() {
    var id = this.props.match.params.id;
    Promise.all([
      PostPreviewService.getPreview(id),
      PostService.getPost(id)
    ]).then(values => {
      let tags = "";
      _.forEach(values[0].tags, (val, key) => {
        tags = `${tags} ${val}`;
      });
      tags = tags.trim();
      this.setState({
        preview: { ...values[0], tags },
        post: values[1],
        oldCategory: values[0].category
      });
    });
  }

  onSubmit() {
    Promise.all([
      PostPreviewService.updatePreview({
        ...this.state.preview,
        tags: _.mapKeys(this.state.preview.tags.split(" "))
      }),
      PostService.updatePost(this.state.post),
      CategoriesService.update({
        oldCategory: this.state.oldCategory,
        category: this.state.preview.category,
        id: this.state.preview.id
      })
    ])
      .then(() => {
        this.props.history.push("/admin/posts/");
      })
      .catch(console.log);
  }
}
export { EditPost };
