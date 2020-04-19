import React, { Component, Fragment } from 'react'

export default class HowToEmp extends Component {
  render () {
    return (
      <Fragment>
        <div className='columns'>
          <div className='column'>
            <div className='box empBox'>
              <div className='columns is-vcentered'>
                <div className='column is-3'>
                  <center>
                    <figure className='image is-64x64'>
                      <a
                        href='https://boardgamegeek.com/forum/2870415/unmatched-battle-legends-volume-one/variants'
                        target='_blank'
                      >
                        <img src='/static/media/online/deck.svg' />
                      </a>
                    </figure>
                  </center>
                </div>
                <div className='column'>
                  <p className='empText'>
                    Browse and copy a deck .json code, paste and click "Load
                    Deck"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='box empBox'>
              <div className='columns is-vcentered'>
                <div className='column is-3'>
                  <center>
                    <figure className='image is-64x64'>
                      <a
                        href='https://docs.google.com/presentation/d/10iplLbfjiAI4cZQEML8-m_CrdEAg9EMAd3UflCyXuL4/edit?usp=sharing'
                        target='_blank'
                      >
                        <img src='/static/media/online/map.svg' />
                      </a>
                    </figure>
                  </center>
                </div>
                <div className='column'>
                  <p className='empText'>
                    Copy this Google Slides and share the link with your lobby
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .empBox {
            // margin-left: 3rem;
            // margin-right: 3rem;
            border-radius: 1rem;
            background-color: #f1e0c1;
          }

          .empText {
            font-family: Archivo Narrow;
            font-size: 2rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
