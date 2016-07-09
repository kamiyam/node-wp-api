import Reflux from "reflux";
import PostAction from "actions/post";

import "whatwg-fetch";

// const api = 'http://api.wp-app.org/wp-json/wp/v2/posts';
const api = `http://${location.host}/api/posts`;

export default Reflux.createStore({
  listenables: [PostAction],
  fetchList() {
    this.fetch(api).then((json) => {
      this.trigger({
        posts: json
      });
    });
  },
  detail(id) {
    this.fetch(`${api}/${id}`).then((json) => {
      this.trigger({
        post: json
      });
    });
  },
  fetch(url) {
    return (new Promise((ok, ng) => {
      fetch(url, {
        mode: "same-origin"
      }).then((response) => {
        ok(response.json());
      }).catch((error) => {
        console.log(error);
        ng(error);
      });
    }));
  }
});
