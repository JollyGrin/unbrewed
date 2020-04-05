import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import Lobby from '../../../components/online/Lobby'
import Test from '../../../components/online/Test'

class indexLobby extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    const { router } = this.props
    console.log('router', router)
    return (
      <div>
        <p>Lobby</p>
        <p>{JSON.stringify(router.query)}</p>
      </div>
    )
  }
}

export default withRouter(indexLobby)
