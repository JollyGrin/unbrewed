import React, { Component, Fragment } from 'react'
import Head from 'next/head'

export default class IndexOnlineLayout extends Component {
  render () {
    return (
      <Fragment>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>Unbrewed Online</title>
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link
            rel='stylesheet'
            type='text/css'
            href='/static/css/bulma-styles.css'
          />
        </Head>
        <section>{this.props.children}</section>
      </Fragment>
    )
  }
}
