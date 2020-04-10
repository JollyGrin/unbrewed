import React, { Component, Fragment } from 'react'
import Head from 'next/head'

export default class deckNameLayout extends Component {
  render () {
    return (
      <Fragment>
        <Head>
          <title>
            🧪 Unbrewed: {this.props.deck} by {this.props.author}
          </title>
        </Head>
        <section>{this.props.children}</section>
      </Fragment>
    )
  }
}
