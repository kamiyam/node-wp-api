import ReactDOM from "react-dom";
import routes from "./pages/routes";

import bootstrap from "bootstrap/dist/css/bootstrap.css";
import global from "./global.scss";

const content = document.createElement("div");
document.body.appendChild(content);

ReactDOM.render(routes, content);
