import React, { Component, Fragment } from "react";
import PoolCardTemplate from "./PlayerPool/PoolCardTemplate";

export default class PlayerBoxInfo extends Component {
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
      if (this.props.playerPool.deck) {
        return this.props.playerPool.deck.length;
      }
    },
    displayHero: () => {
      if (this.props.playerPool.hero) {
        const { name, hp, isRanged, move } = this.props.playerPool.hero;
        return (
          <div>
            <span>🐾️ {move}</span>
            <br />
            <span>
              {name} ❤️ {hp} - {isRanged ? "Ranged" : "Melee"}
            </span>
          </div>
        );
      }
    },
    displaySidekick: () => {
      if (this.props.playerPool.sidekick) {
        const {
          name,
          hp,
          isRanged,
          move,
          quantity,
        } = this.props.playerPool.sidekick;
        return (
          <div>
            <span>
              {name} {quantity > 1 ? "🔢️ " : "❤️ "}
              {quantity > 1 ? quantity : hp} - {isRanged ? "Ranged" : "Melee"}
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
        <div className="player-box">
          <center>
            <div className="dropdown">
              <h1>{this.props.player}</h1>
              <div className="dropdown-content">
                {this.conditionalRender.displayHero()}
                <br />
                {this.conditionalRender.displaySidekick()}
                <hr />
                <span>
                  {this.props.playerPool.hero
                    ? this.props.playerPool.hero.specialAbility
                    : ""}
                </span>
              </div>
            </div>
          </center>
          <div className="icon-tray">
            <li>
              <i className="fas fa-hand-paper"></i>
              {this.conditionalRender.handSize()}
            </li>
            <li>
              <div className="dropdown">
                <i className="fas fa-ban"></i>{" "}
                {this.conditionalRender.discardSize()}
                <div className="dropdown-content">
                  {this.conditionalRender.displayDiscard()}
                </div>
              </div>
            </li>
            <li>
              <i className="fas fa-inbox"></i>{" "}
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
    );
  }
}
