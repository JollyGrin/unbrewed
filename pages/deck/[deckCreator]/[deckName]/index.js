import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Layout from '../../../../components/deck/deckName/deckNameLayout'

class indexDeckName extends Component {
  render () {
    const { deckCreator = '', deckName = '' } = this.props.router.query
    console.log('ROUTER DECK', deckCreator, deckName)
    return (
      <Layout author={deckCreator} deck={deckName}>
        <h1>wazzzup</h1>
      </Layout>
    )
  }
}

export default withRouter(indexDeckName)
