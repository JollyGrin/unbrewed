import React, { Component, Fragment } from 'react'
import PoolCardTemplate from './PlayerPool/PoolCardTemplate'

export default class PlayerBoxInfo extends Component {
  conditionalRender = {
    handSize: () => {
      if (this.props.playerPool.hand) {
        return this.props.playerPool.hand.length
      }
    },
    discardSize: () => {
      if (this.props.playerPool.discard) {
        return this.props.playerPool.discard.length
      }
    },
    deckSize: () => {
      if (this.props.playerPool.deck) {
        return this.props.playerPool.deck.length
      }
    },
    renderCommit: {
      controller: () => {
        const { commit } = this.props.playerPool

        if (commit) {
          if (commit.main && commit.reveal) {
            return this.conditionalRender.renderCommit.faceUp()
          } else if (commit.main && !commit.reveal) {
            return this.conditionalRender.renderCommit.faceDown()
          }
        }
      },
      faceUp: () => (
        <PoolCardTemplate card={this.props.playerPool.commit.main} />
      ),
      faceDown: () => {
        return (
          <center>
            <p>hidden</p>
          </center>
        )
      }
    }
  }

  render () {
    return (
      <Fragment>
        <div className='player-box'>
          <center>
            <h1>{this.props.player}</h1>
          </center>
          <div className='icon-tray'>
            <li>
              <i className='fas fa-hand-paper'></i>
              {this.conditionalRender.handSize()}
            </li>
            <li>
              <i className='fas fa-ban'></i>{' '}
              {this.conditionalRender.discardSize()}
            </li>
            <li>
              <i className='fas fa-inbox'></i>{' '}
              {this.conditionalRender.deckSize()}
            </li>
          </div>
          {this.conditionalRender.renderCommit.controller()}
        </div>
        <style jsx>{`
          .player-box {
            padding: 1rem;
          }

          .icon-tray {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .icon-tray li {
            list-style: none;
            display: inline-flex;
            padding: 0.5rem;
          }

          .icon-tray li .fas {
            margin-right: 0.5rem;
          }

          h1 {
            font-family: BebasNeueRegular;
            font-size: 2rem;
            margin-bottom: -0.5rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
