import React, { Component, Fragment } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div id='nav'>
          <div className='nav-left'>
            <a href='https://unmatched.cards/'>
              <span>Make a Deck</span>
            </a>
          </div>
          <div className='nav-right'>
            {/* <span>Offline</span>
            <span>Online</span> */}
          </div>
        </div>
        <style jsx>{`
          a {
            text-decoration: none;
            color: inherit;
          }
        `}</style>
      </Fragment>
    );
  }
}
