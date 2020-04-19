import React, { Component, Fragment } from 'react'
import CenterColumn from '../../CenterColumn'

export default class HowToBoard extends Component {
  render () {
    return (
      <Fragment>
        <section className='section'>
          <CenterColumn>
            <div className='container'>
              <div className='content'>
                <h1 className='title'>How to setup the board</h1>
                <p>
                  Open your copy of the Google Slide board. Place the board and
                  deck in two split windows so you can see both.
                </p>
                <figure className='image'>
                  <img src='/static/media/online/desktop.svg' />
                </figure>
              </div>
            </div>
          </CenterColumn>
        </section>
        <style jsx>{`
          section {
            background-color: #48284f;
          }

          p {
            color: #e7cc98;
            font-family: Archivo Narrow;
            font-size: 2rem;
          }

          .title {
            color: #e7cc98;
            font-family: BebasNeueRegular;
            font-size: 3rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
