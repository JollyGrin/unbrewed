import React, { Component, Fragment } from 'react'
import Head from 'next/head'

export default class OnlineHead extends Component {
  render () {
    return (
      <Head>
        <title>
          UnBrewed: 🏡 {this.props.lobby} 👏 {this.props.player}{' '}
        </title>
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
    )
  }
}
