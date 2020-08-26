import React, { Component, Fragment } from 'react';

export default class DeckInfoIsHp extends Component {
  constructor(props) {
    super(props);
  }

  isSingle = () => {
    if (!this.props) {
      return;
    }

    console.log('090900', this.props.hp, this.props.quantity);

    return this.props.quantity <= 1 ? (
      <span>
        <i className='fas fa-heart' /> {this.props.hp}
      </span>
    ) : (
      <span>
        <i className='fas fa-list-ol' /> {this.props.quantity}
      </span>
    );
  };

  render() {
    return <Fragment>{this.isSingle()}</Fragment>;
  }
}
