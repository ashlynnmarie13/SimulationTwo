import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashRouter as Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { cancel } from "../ducks/reducer";

import StepOne from "../ducks/StepOne";
import StepTwo from "../ducks/StepTwo";
import StepThree from "../ducks/StepThree";

class Wizard extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/wizard/step1" component={StepOne} />
          <Route path="/wizard/step2" component={StepTwo} />
          <Route path="/wizard/step3" component={StepThree} />
        </Switch>
        <div>
          Wizard
          <Link to="/">
            <button onClick={e => cancel(e.target.value)}>Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = obj => {
  const { cancel } = obj;
  return obj;
};

export default connect(
  mapStateToProps,
  { cancel }
)(Wizard);
