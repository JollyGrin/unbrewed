import React, { Component, Fragment } from 'react';

export default class DeckInfoIsRanged extends Component {
  constructor(props) {
    super(props);
  }

  renderIcon = () => {
    switch (this.props.isRanged) {
      case true:
        return (
          <span>
            <i className='fas fa-meteor' /> Range
          </span>
        );
      case false:
        return (
          <span>
            <i className='fas fa-fist-raised' /> Meele
          </span>
        );
      default:
        return '';
    }
  };
  render() {
    return <Fragment>{this.renderIcon()}</Fragment>;
  }
}
