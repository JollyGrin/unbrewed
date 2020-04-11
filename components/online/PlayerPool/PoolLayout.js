import React, { Component, Fragment } from 'react'
import Head from 'next/head'

export default class PoolLayout extends Component {
  render () {
    return (
      <Fragment>
        <section>{this.props.children}</section>
        <style jsx>{`
        
        section {
            padding 1em;
        }

        
        `}</style>
      </Fragment>
    )
  }
}
