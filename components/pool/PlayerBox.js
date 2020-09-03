import React, { Component, Fragment } from 'react';
import CardTemplate from '../card/CardTemplate';
import cardMock from '../../assets/mock/card.json';

export default class PlayerBox extends Component {
  constructor(props) {
    super(props);
  }

  conditionalRender = {
    handSize: () => {
      if (this.props.playerPool.hand) {
        return this.props.playerPool.hand.length;
      }
    },
    discardSize: () => {
      if (this.props.playerPool.discard) {
        return this.props.playerPool.discard.length;
      }
    },
    deckSize: () => {
      if (this.props.deck) {
        return this.props.deck.length;
      }
    },
    displayHero: () => {
      if (this.props.deck.hero) {
        const { name, hp, isRanged, move } = this.props.deck.hero;
        return (
          <div>
            <span>🐾️ {move}</span>
            <br />
            <br />
            <span>
              {name} ❤️ {hp} - {isRanged ? 'Ranged' : 'Melee'}
            </span>
          </div>
        );
      }
    },
    displaySidekick: () => {
      console.log('siode', this.props.deck.sidekick);
      if (this.props.deck.sidekick) {
        const { name, hp, isRanged, move, quantity } = this.props.deck.sidekick;
        return (
          <div>
            <span>
              {name} {quantity > 1 ? '🔢️ ' : '❤️ '}
              {quantity > 1 ? quantity : hp} - {isRanged ? 'Ranged' : 'Melee'}
            </span>
          </div>
        );
      }
    },
    displayDiscard: () => {
      if (this.props.playerPool.discard) {
        return (
          <div>
            <ul>
              {this.props.playerPool.discard.map((card) => (
                <li key={Math.random()}>{card.title}</li>
              ))}
            </ul>
          </div>
        );
      }
    },
    renderCommit: {
      controller: () => {
        const { commit } = this.props.playerPool;

        if (commit) {
          if (commit.main && commit.reveal) {
            return this.conditionalRender.renderCommit.faceUp();
          } else if (commit.main && !commit.reveal) {
            return this.conditionalRender.renderCommit.faceDown();
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
        );
      },
    },
  };

  render() {
    return (
      <Fragment>
        <div className='overview-player-box'>
          <div className='dropdown'>
            <h1>{this.props.player}</h1>
            <div className='dropdown-content'>
              {this.conditionalRender.displayHero()}
              <br />
              {this.conditionalRender.displaySidekick()}
              <hr />
              <span>
                {this.props.deck.hero
                  ? this.props.deck.hero.specialAbility
                  : ''}
              </span>
              <hr />
              <ul>
                <li>
                  <CardTemplate card={cardMock} />
                </li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
              </ul>
            </div>
          </div>
          <div className='player-box-icon-wrapper'>
            <div>
              <i className='fas fa-hand-paper' />{' '}
              <span>{this.props.deck.hand.length}</span>
            </div>
            <div className='overview-discard-wrapper dropdown'>
              <i className='fas fa-ban' />{' '}
              <span>{this.props.deck.discard.length}</span>
            </div>
            <div>
              <i className='fas fa-inbox' />{' '}
              <span>{this.props.deck.deck.length}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
