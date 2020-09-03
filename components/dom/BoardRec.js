import React, { Component, Fragment } from 'react';
import BoardRecButton from './BoardRecButton';

export default class BoardRec extends Component {
  render() {
    return (
      <Fragment>
        <section id='boardRec'>
          <h1>"What about the board?"</h1>
          <p>There’s several free ways to share a board in the browser:</p>
          <div className='board-button-wrapper'>
            <BoardRecButton
              icon={'fab fa-skype'}
              text={'Video Call'}
              url={'#'}
            />
            <BoardRecButton
              icon={'fab fa-google-drive'}
              text={'Google Slides'}
              url={'#'}
            />
            <BoardRecButton icon={'fab fa-figma'} text={'Figma'} url={'#'} />
          </div>
        </section>
      </Fragment>
    );
  }
}
