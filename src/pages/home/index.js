import React, { Component } from 'react';

import Posts from 'component/posts';
import style from './index.scss';

import 'whatwg-fetch';

const api = 'http://api.wp-app.org/wp-json/wp/v2/posts';

import PostStore from 'stores/post';
import PostAction from 'actions/post';

export default class Home extends Component {
    static get contextTypes() {
        return { router: React.PropTypes.object.isRequired }
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        // console.log("componentWillMount");

        const unsubscribePostStore = PostStore.listen(this.onReceivePost.bind(this));
        this.unsubscribe = () => {
            unsubscribePostStore();
        };

        PostAction.fetchList();

    }
    componentWillUnmount(){
        // console.log("componentDidMount");
        this.unsubscribe && this.unsubscribe();
    }
    onReceivePost(data) {
        this.setState({
            ...data
        })
    }
    render() {
        return (
            <div>
                <h1 className={style['app-title']}>WP API Sample Application</h1>
                <Posts posts={this.state.posts} />
            </div>
        )
    }
}