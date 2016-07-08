import React, {Component} from "react";

import Posts from "component/posts";
import style from "./index.scss";

import PostStore from "stores/post";
import PostAction from "actions/post";

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    // console.log("componentWillMount");

    const unsubscribePostStore = PostStore.listen(this.onReceivePost.bind(this));
    this.unsubscribe = () => {
      unsubscribePostStore();
    };

    PostAction.fetchList();
  }
  componentWillUnmount() {
    // console.log("componentDidMount");
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  onReceivePost(data) {
    // console.log("onReceivePost");
    this.setState({
      ...data
    });
  }
  render() {
    return (
      <div>
        <h1 className={style["app-title"]}>WP API Sample Application</h1>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}
