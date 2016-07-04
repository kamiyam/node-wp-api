import Reflux from 'reflux';
import PostAction from 'actions/post';

import 'whatwg-fetch';

const api = 'http://api.wp-app.org/wp-json/wp/v2/posts';

export default Reflux.createStore({
    listenables: [PostAction],
    fetchList(){
        fetch(api)
            .then((response)=> {
                return response.json()
            }).then((json)=> {
            this.trigger({
                posts:json
            });
        }).catch((error)=> {
            console.log(error);
        });
    }
})
