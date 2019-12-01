import React, { Component } from "react";
import SingleMatchCard from "./singleMatchCard";

class MatchList extends Component {
  state = {};
  render() {
    return (
      <div className="mt-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
          </div>
          <div className="row">
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
          </div>
          <div className="row">
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
          </div>
          <div className="row">
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
          </div>
          <div className="row">
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
          </div>
          <div className="row">
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
            <div className="col-sm"><SingleMatchCard /></div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default MatchList;
