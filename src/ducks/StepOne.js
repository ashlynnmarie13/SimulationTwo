import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addHouse } from "./reducer";

class StepOne extends Component {
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, houses } = this.props;
    const housesDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      houses.map(house => {
        return <p>{house.house_name}</p>;
        <p>{house.address}</p>;
        <p>{house.city}</p>;
        <p>{house.state}</p>;
        <p>{house.zipcode}</p>;
      })
    );
    //house.name??
    return (
      <div>
        <div>{housesDisplay}</div>
        <div>
          <form onSubmit={this.onSubmitHandler}>
            <input
              value={this.state.name}
              onChange={this.onChangeHandler}
              name="name"
              placeholder="name"
              type="text"
            />
            <input
              value={this.state.address}
              onChange={this.onChangeHandler}
              name="address"
              placeholder="address"
              type="text"
            />
            <input
              value={this.state.city}
              onChange={this.onChangeHandler}
              name="city"
              placeholder="city"
              type="text"
            />
            <input
              value={this.state.state}
              onChange={this.onChangeHandler}
              name="state"
              placeholder="state"
              type="text"
            />
            <input
              value={this.state.zipcode}
              onChange={this.onChangeHandler}
              name="zipcode"
              placeholder="zipcode"
              type="text"
            />
          </form>
          <Link to="/wizard/step2">
            <button onClick={e => addHouse(e.target.value)}>Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { addHouse } = state;
  return state;
};

export default connect(
  mapStateToProps,
  { addHouse }
)(StepOne);
