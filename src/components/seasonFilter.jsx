import React, { Component } from "react";

class SeasonFilter extends Component {
  state = {};
  render() {
    return (
      <div className="float-right mt-sm-4 mr-sm-5 position-fixed">
          <div className="form-control">
              <span className="mr-sm-2">Season</span>
          <select className="border-0">
          <option value="volvo">2008</option>
          <option value="saab">2009</option>
          <option value="mercedes">2010</option>
          <option value="audi">2011</option>
        </select>
          </div>
        
      </div>
    );
  }
}

export default SeasonFilter;
