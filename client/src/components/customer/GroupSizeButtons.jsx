import React from 'react';

class GroupSizeButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  soloSelected() {
    // handle click event for group number: solo
  }

  twoSelected() {
    // handle click event for group number: two
  }

  threeToFourSelected() {
    // handle click event for group number: three-four
  }

  fivePlusSelected() {
    // handle click event for group number: five
  }

  render() {
    return (
      <div className="row-center">
        <div className="customer-group-buttons">
        <h4>Select your group size</h4>
          <a className="waves-effect waves-light btn-large"><i className="material-icons left">person</i>solo</a>
          <a className="waves-effect waves-light btn-large"><i className="material-icons left">people</i>2</a>
          <a className="waves-effect waves-light btn-large"><i className="material-icons left">people</i>3 - 4</a>
          <a className="waves-effect waves-light btn-large"><i className="material-icons left">person_add</i>5 +</a>
        </div>
      </div>
    )
  }
};

export default GroupSizeButtons;