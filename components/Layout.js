import React, { Component, Fragment } from 'react';
import Head from 'next/head';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>{this.props.title}</title>
          <link
            rel='stylesheet'
            type='text/css'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css'
          />
          <link rel='stylesheet' type='text/css' href='/css/reset.css' />
          <link rel='stylesheet' type='text/css' href='/css/styles.css' />
          <link
            href='https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Indie+Flower&family=Lato:wght@400;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        {this.props.children}
      </Fragment>
    );
  }
}
