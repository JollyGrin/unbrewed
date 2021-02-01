import React, { Component, Fragment } from 'react';
import Pool from '../../assets/js/classes/Pool';
import DeckInfo from './deckInfo/DeckInfo';
import HandPool from './hand/HandPool';
import DiscardPool from './discard/DiscardPool';
import DeckSectionPool from './deck/DeckSectionPool';
import ModalComponent from './modal/ModalComponent';
import { revertToInput } from '../../assets/js/lib/reloadDeck';
import { isEmpty } from '../../assets/js/lib/connectionCheck';

export default class DeckPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: {},
    };
    this.modalView = false;
    this.heroView = true;
    this.handView = true;
    this.deckView = false;
    this.deckInfoView = true;
  }

  conditionalRender = {
    deckInfoDisplay: () => {
      if (this.deckInfoView) {
        return <DeckInfo domActions={this.domActions} pool={this.state.pool} />;
      } else {
        return (
          <a
            className='deckInfoDisplay-button'
            onClick={() => this.domActions.viewDeckInfo()}
          >
            View Details
          </a>
        );
      }
    },
    handDisplay: () => {
      if (this.handView) {
        return (
          <HandPool
            deckView={this.deckView}
            pool={this.state.pool}
            deckActions={this.deckActions}
          />
        );
      }
    },
    deckDisplay: () => {
      if (this.state.pool) {
        return (
          <DeckSectionPool
            pool={this.state.pool}
            deckActions={this.deckActions}
            domActions={this.domActions}
            deckView={this.deckView}
          />
        );
      }
    },
  };

  domActions = {
    viewDeck: () => {
      if (isEmpty(this.props.state.gameState.gid)) {
        return;
      }
      if (this.deckView) {
        this.state.pool.shuffleDeck();
        this.state.pool.shuffleDeck();
        this.state.pool.shuffleDeck();
      }
      this.deckView = this.deckView ? false : true;
      this.processState();
    },
    viewModal: () => {
      this.modalView = this.modalView ? false : true;
      this.processState();
    },
    viewDeckInfo: () => {
      if (isEmpty(this.props.state.gameState.gid)) {
        return;
      }
      this.deckInfoView = this.deckInfoView ? false : true;
      this.processState();
    },
  };

  deckActions = {
    drawCard: () => {
      if (isEmpty(this.props.state.gameState.gid)) {
        return;
      }
      if (!this.state.pool.deck.length <= 0) {
        this.state.pool.draw();
        this.processState();
      } else {
        alert('Your deck is empty');
      }
    },
    discardRandom: () => {
      if (isEmpty(this.props.state.gameState.gid)) {
        return;
      }
      if (!this.state.pool.hand.length <= 0) {
        this.state.pool.discardRandomCard();
        this.processState();
      } else {
        alert('Your deck is empty');
      }
    },
    discardCard: (cardIndex) => {
      this.state.pool.discardCard(cardIndex);
      this.processState();
    },
    drawDiscard: (cardIndex) => {
      this.state.pool.drawDiscard(cardIndex);
      this.processState();
    },
    drawDeck: (cardIndex) => {
      this.state.pool.drawDeck(cardIndex);
      this.processState();
    },
    deckCard: (cardIndex) => {
      this.state.pool.deckCard(cardIndex);
      this.processState();
    },
    deckCardBottom: (cardIndex) => {
      this.state.pool.deckCardBottom(cardIndex);
      this.processState();
    },
    shuffleTheDeck: () => {
      this.state.pool.shuffleDeck();
      this.processState();
    },
    commitActions: {
      commit: (cardIndex) => {
        this.state.pool.commitCard(cardIndex);
        this.modalView = true;
        this.processState();
      },
      cancel: () => {
        this.state.pool.cancelCommit();
        this.modalView = false;
        this.processState();
      },
      discard: () => {
        this.state.pool.discardCommit();
        this.modalView = false;
        this.processState();
      },
      reveal: () => {
        this.state.pool.revealCommit();
        this.processState();
      },
    },
  };

  processState = () => {
    this.props.wsClientSendData(this.state.pool);
    this.setState({ pool: this.state.pool });
  };

  load = {
    state: () => {
      if (isEmpty(this.props.state.gameState.gid)) {
        return;
      }
      const playerArray = Object.entries(this.props.state.gameState.players);

      playerArray.forEach((player) => {
        if (player[0] === this.props.player) {
          this.load.gamestateDeck(player[1]);
        }
      });
    },
    gamestateDeck: (gameState) => {
      const oldDeck = revertToInput(gameState);
      const pool = new Pool(oldDeck);
      pool.hand = gameState.hand;
      pool.discard = gameState.discard;
      pool.commit = gameState.commit;
      pool.deck = gameState.deck;

      if (pool.commit.main) {
        this.modalView = true;
        this.setState({ pool: pool });
      } else {
        this.setState({ pool: pool });
      }
    },
  };

  onInit = () => {
    const newPool = new Pool(this.props.pool);
    newPool.makeDeck();
    newPool.shuffleDeck();
    this.setState({ pool: newPool });
  };

  componentDidMount() {
    this.onInit();
  }

  render() {
    return (
      <Fragment>
        {this.props.state.gameState.gid !== 'test' ? (
          <div id='reload-deck' title={'load deck from gamestate'}>
            <a onClick={() => this.load.state()}>
              <i className='fas fa-sync-alt' />
            </a>
          </div>
        ) : (
          ''
        )}
        <section id='cardPool'>
          <ModalComponent
            state={this.props.state}
            modalView={this.modalView}
            domActions={this.domActions}
            deckActions={this.deckActions}
          />
          {this.conditionalRender.deckInfoDisplay()}
          {this.conditionalRender.handDisplay()}
          {this.props.pool ? (
            <DiscardPool
              pool={this.state.pool}
              deckActions={this.deckActions}
            />
          ) : (
            '...'
          )}
          {this.conditionalRender.deckDisplay()}
        </section>
      </Fragment>
    );
  }
}
