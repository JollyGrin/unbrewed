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
            <a href="https://www.youtube.com/channel/UCdlHVafM0VxNJJrUUXXpneA">
            <span><i className="fab fa-youtube"/></span>
            </a>
            <a href="https://github.com/JollyGrin/unbrewed">
            <span><i className="fab fa-github"/></span>
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
