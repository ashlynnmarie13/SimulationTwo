import React, { Component } from "react";
import House from "./House";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { getHouses } from "../ducks/reducer";
class Dashboard extends Component {
  state = {
    houses: []
  };

  componentDidMount() {
    this.props.getHouses();
  }

  deleteHouseHandler = id => {
    axios.delete(`/api/houses/${id}`).then(response => {
      this.setState({ houses: response.data });
    });
  };

  render() {
    //coming from reducer later
    const { houses } = this.state;
    const { isLoading } = this.props;
    const housesDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      houses.map(house => {
        return <p>{house}</p>;
      })
    );
    return (
      <div>
        <div>{housesDisplay}</div>
        <House houses={this.state.housesDisplay} />
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getHouses }
)(Dashboard);
