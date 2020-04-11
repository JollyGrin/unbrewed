import React, { Component, Fragment } from 'react'

export default class PlayerBoxInfo extends Component {
  conditionalRender = {
    handSize: () => {
      if (this.props.playerPool.hand) {
        return this.props.playerPool.hand.length
      }
    }
  }

  render () {
    return (
      <Fragment>
        <h1>{this.props.player}</h1>
        <p>Hand - {this.conditionalRender.handSize()}</p>
        {console.log('player props', this.props)}
        <style jsx>{`
          h1 {
            font-family: BebasNeueRegular;
            font-size: 1.2rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
