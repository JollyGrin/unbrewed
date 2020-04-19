import React, { Component, Fragment } from 'react'
import CenterColumn from '../../CenterColumn'
import HowToLicense from './HowToLicense'
import HowToEmp from './HowToEmp'

export default class HowToBody extends Component {
  render () {
    return (
      <Fragment>
        <section className='section'>
          <HowToLicense />
          <br />
          <CenterColumn>
            <div className='container'>
              <div className='content'>
                <h1 className='title'>How to Play</h1>
                <p className='step-text'>
                  Play homebrewed Unmatched variants online! To get started
                  you’ll need a <span>deck</span> and a <span>board</span>.
                </p>
              </div>
            </div>
            <br />
            <HowToEmp />
          </CenterColumn>
        </section>

        <style jsx>{`
          .section {
            background-color: #e7cc98;
          }

          .step-text {
            font-family: Archivo Narrow;
            font-size: 2rem;
          }

          .step-text span {
            color: #48284f;
          }

          .title {
            font-family: BebasNeueRegular;
            font-size: 3rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
