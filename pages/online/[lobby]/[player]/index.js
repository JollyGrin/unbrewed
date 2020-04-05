import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import OnlinePlayer from '../../../../components/online/OnlinePlayer'

class indexPlayer extends Component {
  constructor (props) {
    super(props)
    this.wsClientSubscriptionId = null
    this.state = {
      messages: null
    }
  }

  settingState = router => {
    console.log('router', router)
  }

  render () {
    const { lobby, player } = this.props.router.query
    console.log('ROUTER HOME', lobby, player)
    return (
      <div>
        <a href='#' onClick={() => this.settingState(query)}>
          Lobby
        </a>
        <OnlinePlayer lobby={lobby} player={player} />
      </div>
    )
  }
}

export default withRouter(indexPlayer)
