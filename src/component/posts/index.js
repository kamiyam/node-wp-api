import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import moment from "moment";
import style from "./index.scss";

export default class Posts extends Component {
  static get propTypes() {
    return {
      posts: PropTypes.array
    };
  }
  static get defaultProps() {
    return {
      initialPosts: []
    };
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: this.props.initialPosts
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps
    });
  }
  renderPosts() {
    return this.state.posts.map((post) => {
      return (
          <li key={post.id} className={style.post}>
            <Link to={`/posts/${post.id}`}>
              <h2 className={style["entry-title"]}>{post.title.rendered}</h2>
            </Link>
            {/** <div className={style["entry-content"]}
             * dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
             */}
            <small>
              {moment(post.date).format("YYYY/MM/DD HH:mm:ss")}
            </small>
          </li>
      );
    });
  }
  render() {
    const posts = this.renderPosts();
    return (
      <ul ref="posts">
        {posts}
      </ul>
    );
  }
}
