import React, { Component, Fragment } from 'react'
import Head from 'next/head'

export default class OnlineLayout extends Component {
  render () {
    return (
      <Fragment>
        <section className='container'>
          <h1 className='item'>
            Lobby:
            {this.props.lobby} <span className='bars'>//</span> Player:{' '}
            {this.props.player}
          </h1>
        </section>
        <section>
          <div>{this.props.children}</div>
        </section>

        <style jsx>{`
          h1,
          h2,
          h3 {
            font-family: BebasNeueRegular;
          }
          h1 {
            font-size: 3rem;
          }
          h3 {
            font-size: 2rem;
          }
          .bars {
            opacity: 0.3;
          }
          .container {
            display: flex;
          }
          .item {
            align-self: auto;
            margin: auto;
          }
        `}</style>
      </Fragment>
    )
  }
}
