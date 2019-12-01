import React, { Component } from "react";
import TopNavBar from "./topNavBar";
import SeasonFilter from "./seasonFilter";
import MatchList from "./matchList";

class HomeComponents extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <TopNavBar />
        </div>
        <div>
          <SeasonFilter />
        </div>
        <div>
          <MatchList />
        </div>
        
      </div>
    );
  }
}

export default HomeComponents;
