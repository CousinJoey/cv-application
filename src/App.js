import React, { Component } from "react";
import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
