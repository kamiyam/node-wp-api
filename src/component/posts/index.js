import React, {Component, PropTypes} from'react';
import style from './index.scss';

class Posts extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: this.props.initialPosts
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            posts: nextProps.posts
        })
    }
    renderPosts(){
        return this.state.posts.map(function(value, index){
            return (
                <li key={index} className={style.post}>
                    <h2 className="entry-title">{value.title.rendered}</h2>
                    <div className="entry-content" dangerouslySetInnerHTML={{__html: value.content.rendered}} />
                </li>
            )
        })
    }
    render() {
        var posts = this.renderPosts();
        return (
            <ul ref="posts">
                {posts}
            </ul>
        )
    }
}

Posts.propTypes = { posts: PropTypes.array };
Posts.defaultProps = { initialPosts: [] };

export default Posts;