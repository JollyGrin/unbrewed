import React, { Component, Fragment } from 'react'
import Head from 'next/head'

export default class HomeLayout extends Component {
  render () {
    return (
      <Fragment>
        <Head>
          <title>Unbrewed.xyz</title>
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

        {this.props.children}

        <style jsx global>{`
          // html {
          //   overflow: auto;
          //   width: 100%;
          //   height: auto;
          // }

          html,
          body {
            background-color: #48284f;
            display: grid;
            margin: 0;
            padding: 0;
            width: 100%;
          }

          .body-section {
            padding: 5rem;
            min-height: 30vh;
            background-color: #e7cc98;
          }
        `}</style>
      </Fragment>
    )
  }
}
