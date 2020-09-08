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
              url={
                'https://docs.google.com/presentation/d/10iplLbfjiAI4cZQEML8-m_CrdEAg9EMAd3UflCyXuL4/edit?usp=sharing'
              }
            />
            <BoardRecButton
              icon={'fab fa-figma'}
              text={'Figma'}
              url={'https://www.figma.com/file/IwrLiGjna7bIDa9ZQiM2TW/Unbrewed-Board-Template-COPY-PASTE?node-id=76%3A92'}
            />
          </div>
        </section>
      </Fragment>
    );
  }
}
