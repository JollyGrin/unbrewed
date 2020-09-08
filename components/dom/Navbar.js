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
            <a href="https://discord.gg/bQgBpAp">
            <span><i className="fab fa-discord"/></span>
            </a>
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
