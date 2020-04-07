import React, { Component, Fragment } from 'react'
import Head from 'next/head'

export default class OnlineLayout extends Component {
  render () {
    return (
      <Fragment>
        <Head>
          <title>Unbrewed Online</title>
          <link
            rel='stylesheet'
            type='text/css'
            charSet='UTF-8'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
          />
          <link
            rel='stylesheet'
            type='text/css'
            href='../../static/css/styles.css'
          />
          <link rel='shortcut icon' href='/static/favicon.ico' />
        </Head>
        <section className='container'>
          <h1 className='item'>
            Lobby:
            {this.props.lobby} <span className='bars'>//</span> Player:{' '}
            {this.props.player}
          </h1>
        </section>
        <section className='container'>
          <div className='item'>{this.props.children}</div>
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
