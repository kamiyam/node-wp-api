import React, {Component} from "react";
import {Link} from "react-router";
import style from "./index.scss";

class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <h1 className={style["app-title"]}>
          <Link to="/">WP API Sample Application</Link>
        </h1>
      </header>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className={style.footer}>
        WordCamp Kansai 2016 React Handson
      </footer>
    );
  }
}

export default class Layout extends Component {
  render() {
    return (
      <section>
        <Header />
        <main className={style.wrapper}>
          {this.props.children}
        </main>
        <Footer />
      </section>
    );
  }
}
