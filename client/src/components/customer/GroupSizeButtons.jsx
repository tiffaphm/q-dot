import React from 'react';

class GroupSizeButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGroupSize: 0
    }
  }

  soloSelected() {
    this.setState({
      currentGroupSize: 1
    })

    this.props.setGroupSize(this.state.currentGroupSize);
  }

  twoSelected() {
    this.setState({
      currentGroupSize: 2
    })

    this.props.setGroupSize(this.state.currentGroupSize);
  }

  threeToFourSelected() {
    this.setState({
      currentGroupSize: 4
    })

    this.props.setGroupSize(this.state.currentGroupSize);
  }

  fivePlusSelected() {
    this.setState({
      currentGroupSize: 5
    })

    this.props.setGroupSize(this.state.currentGroupSize);
  }

  render() {
    return (
      <div className="customer-group-buttons-container">
        <h4>Select your group size</h4>
          <div className="customer-group-buttons">
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