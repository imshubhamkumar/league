import React, { Component } from "react";
import TopNavBar from "./topNavBar";

class MatchDetails extends Component {
  state = {};
  render() {
    return (
      <div>
          <div>
              <TopNavBar />
          </div>
        <div className="card mt-5">
          <div class="card-body mt-5">
            <h5 class="card-title">Match Detail</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">
              Card link
            </a>
            <a href="#" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MatchDetails;
