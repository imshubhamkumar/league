import React, { Component } from "react";

class TopNavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-dark mb-sm-5 fixed-top">
        <a className="navbar-brand text-white">Premier League</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default TopNavBar;
