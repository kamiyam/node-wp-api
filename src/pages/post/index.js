import React, {Component} from "react";

import Posts from "component/posts";
import style from "./index.scss";

import PostStore from "stores/post";
import PostAction from "actions/post";

import {VelocityComponent} from "velocity-react";

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
      <div className={style.content}>
        <VelocityComponent animation={{opacity: this.state.posts.length > 0 ? 1 : 0}} duration={300}>
          <Posts posts={this.state.posts} />
        </VelocityComponent>
      </div>
    );
  }
}
