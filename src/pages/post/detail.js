import React, {Component} from "react";

import style from "./index.scss";

import PostStore from "stores/post";
import PostAction from "actions/post";

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      post: null
    };
  }
  componentDidMount() {
    // console.log("componentWillMount");
    let postId = this.props.params.id;

    const unsubscribePostStore = PostStore.listen(this.onReceivePost.bind(this));
    this.unsubscribe = () => {
      unsubscribePostStore();
    };

    PostAction.detail(postId);
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
    if (!this.state.post) {
      return (null);
    }
    let post = this.state.post;
    return (
      <div className={style.content}>
        <h2 className={style["entry-title"]}>{post.title.rendered}</h2>
        <div className={style["entry-content"]} dangerouslySetInnerHTML={{__html: post.content.rendered}} ></div>
      </div>
    );
  }
}
