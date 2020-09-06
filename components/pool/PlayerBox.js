import React, { Component, Fragment } from 'react';
import CardTemplate from '../card/CardTemplate';
import cardMock from '../../assets/mock/card.json';

export default class PlayerBox extends Component {
  constructor(props) {
    super(props);
  }

  conditionalRender = {
    handSize: () => {
      if (this.props.deck.hand) {
        return this.props.deck.hand.length;
      }
    },
    discardSize: () => {
      if (this.props.deck.discard) {
        return this.props.deck.discard.length;
      }
    },
    deckSize: () => {
      if (this.props.deck.deck) {
        return this.props.deck.deck.length;
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
    noSidekickCheck: () => {
      if (
        this.props.pool &&
        this.props.pool.sidekick &&
        this.props.pool.sidekick.quantity === 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    displaySidekick: () => {
      if (!this.conditionalRender.noSidekickCheck()) {
        return '';
      }
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
      if (
        this.props.playerPool.discard ||
        this.props.playerPool.discard.length === 0
      ) {
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
                {this.props.deck.discard && this.props.deck.discard.length > 0
                  ? this.props.deck.discard.map((card) => <li>{card.title}</li>)
                  : '...'}
              </ul>
            </div>
          </div>
          <div className='player-box-icon-wrapper'>
            <div>
              <i className='fas fa-hand-paper' />{' '}
              <span>{this.conditionalRender.handSize()}</span>
            </div>
            <div className='overview-discard-wrapper dropdown'>
              <i className='fas fa-ban' />{' '}
              <span>{this.conditionalRender.discardSize()}</span>
            </div>
            <div>
              <i className='fas fa-inbox' />{' '}
              <span>{this.conditionalRender.deckSize()}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
