import React, {Component, PropTypes} from'react';
import style from './index.scss';

export default class Posts extends Component{
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
        })
    }
    renderPosts(){
        return this.state.posts.map((value, index)=> {
            return (
                <li key={index} className={style.post}>
                    <h2 className={style["entry-title"]}>{value.title.rendered}</h2>
                    <div className={style["entry-content"]} dangerouslySetInnerHTML={{__html: value.content.rendered}} />
                </li>
            )
        })
    }
    render() {
        const posts = this.renderPosts();
        return (
            <ul ref="posts">
                {posts}
            </ul>
        )
    }
}