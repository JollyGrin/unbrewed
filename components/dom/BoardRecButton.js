import React, { Component, Fragment } from 'react';

export default class BoardRecButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className='recButton-wrapper'>
          <a href={this.props.url} target='_blank'>
            <i className={this.props.icon} />
            <span>{this.props.text}</span>
          </a>
        </div>
      </Fragment>
    );
  }
}
