'use strict';

var React = require('react');
var Posts = require('../../component/posts');
var fetch = window.fetch;

var api = 'http://api.wp-app.org/wp-json/wp/v2/posts';

module.exports = React.createClass({
    getInitialState: function(){
      return {
          posts: []
      };
    },
    componentWillMount: function(){
        // console.log("componentWillMount");
        var self = this;

        fetch(api)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                console.log(json)
                self.setState({
                    posts:json
                });
            }).catch(function(error) {
                console.log(error);
            });

    },
    componentDidMount: function(){
        // console.log("componentDidMount");
    },
    render: function() {
        return (
            <div>
                <h1 class="app-title">WP API Sample Application</h1>
                <Posts posts={this.state.posts} />
            </div>
        )
    }
});
