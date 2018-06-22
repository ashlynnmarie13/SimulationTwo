import React, { Component } from "react";
import { Link } from "react-router-dom";
import { removeImage } from "./reducer";
import { connect } from "react-redux";

class StepTwo extends Component {
  state = {
    image: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, houses } = this.props;
    const housesDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      houses.map(house => {
        return <p>{house.image}</p>;
      })
    );
    const { removeImage } = this.props;
    return (
      <div>
        <div>{housesDisplay}</div>
        <div>
          <form onSubmit={this.onSubmitHandler}>
            <input
              value={this.state.image}
              onChange={this.onChangeHandler}
              name="Image"
              placeholder="image url"
              type="text"
            />
          </form>
          <Link to="/wizard/step3">
            <button onClick={e => removeImage(e.target.value)}>Next</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { removeImage } = state;
  return state;
};

export default connect(
  mapStateToProps,
  { removeImage }
)(StepTwo);
