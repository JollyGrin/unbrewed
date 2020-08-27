import React, { Component, Fragment } from 'react';

export default class PlayerBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className='overview-player-box'>
          <h1>Player</h1>
          <div className='player-box-icon-wrapper'>
            <div>
              <i className='fas fa-hand-paper' /> <span>27</span>
            </div>
            <div>
              <i className='fas fa-ban' /> <span>27</span>
            </div>
            <div>
              <i className='fas fa-inbox' /> <span>27</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
