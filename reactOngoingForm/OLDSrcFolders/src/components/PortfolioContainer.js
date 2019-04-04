import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let pageToRender;

    switch (this.state.currentPage) {
      case "About":
        pageToRender = <About />;
        break;
      case "Blog":
        pageToRender = <Blog />;
        break;
      case "Contact":
        pageToRender = <Contact />;
        break;
      case "Home":
        pageToRender = <Home />;
        break;
      default:
    } 

    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {pageToRender}
      </div>
    );
  }
}

export default PortfolioContainer;
