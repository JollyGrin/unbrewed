import React, { Component, Fragment } from 'react'
import CenterColumn from '../../CenterColumn'

export default class HowToLicense extends Component {
  render () {
    return (
      <Fragment>
        <CenterColumn>
          <div className='box licenseBox'>
            <div className='columns is-vcentered'>
              <div className='column is-1 is-offset-2'>
                <center>
                  <figure className='image is-64x64'>
                    <img src='/static/media/online/info.svg' />
                  </figure>
                </center>
              </div>
              <div className='column is-8'>
                <p className='l-text'>
                  unbrewed is not owned by or associated with Restoration Games,
                  LLC
                </p>
              </div>
            </div>
          </div>
        </CenterColumn>

        <style jsx>{`
          .licenseBox {
            margin-top: -5.5rem;
            border-radius: 1rem;
            background-color: #f1e0c1;
          }

          .l-text {
            font-family: BebasNeueRegular;
            font-size: 2rem;
            color: #e7cc98;
          }
        `}</style>
      </Fragment>
    )
  }
}
