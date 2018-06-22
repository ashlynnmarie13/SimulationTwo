import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updateRent, addHouse } from "./reducer";
import { connect } from "react-redux";
import axios from "axios";

class StepThree extends Component {
  state = {
    monthly_mortgage: "",
    rent: 0
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const {
      house_name,
      address,
      city,
      state,
      zipcode,
      monthly_mortgage,
      rent,
      image
    } = this.state;
    if (
      house_name &&
      address &&
      city &&
      state &&
      zipcode &&
      monthly_mortgage &&
      rent &&
      image
    ) {
      axios
        .post("/api/houses", {
          monthly_mortgage,
          rent,
          image
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log(response);
        });
      this.props.addHouse({ house_name, address, city, state, zipcode });
      this.props.history.replace("/houses");
    }
  };

  render() {
    const { isLoading, houses } = this.props;
    const housesDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      houses.map(house => {
        return <p>{house.monthly_mortgage}</p>;
        <p>{house.rent}</p>;
      })
    );
    const { updateRent } = this.props;
    return (
      <div>
        <div>{housesDisplay}</div>
        <div>
          <form>
            <input
              value={this.state.monthly_mortgage}
              onChange={this.onChangeHandler}
              name="Monthly Mortgage Amount"
              placeholder="low, med, or high"
              type="text"
            />
            <input
              value={this.state.rent}
              onChange={this.onChangeHandler}
              name="Desired Monthly Rent"
              placeholder="0"
              type="text"
            />
          </form>
          Step Three
          <Link to="/">
            <button
              onSubmit={this.onSubmitHandler}
              onSubmit={e => updateRent(e.target.value)}
            >
              Complete
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { updateRent, addHouse } = state;
  return state;
};

export default connect(
  mapStateToProps,
  { updateRent, addHouse }
)(StepThree);
