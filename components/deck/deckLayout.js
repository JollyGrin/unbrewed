import React, { Component, Fragment } from 'react'
import Head from 'next/head'

export default class deckLayout extends Component {
  render () {
    return (
      <Fragment>
        <Head>
          <title>Browse Unbrewed Decks</title>
        </Head>
        <section>{this.props.children}</section>
      </Fragment>
    )
  }
}
