import React, { Component, Fragment } from 'react';
import DeckInfoIsRanged from './DeckInfoIsRanged';
import DeckInfoIsHp from './DeckInfoIsHp';
import Link from 'next/link';

export default class DeckInfo extends Component {
  constructor(props) {
    super(props);
  }

  renderDom = {
    heroName: () => {
      return this.props.pool.hero ? this.props.pool.hero.name : 'loading...';
    },
    isRanged: (fighter) => {
      switch (fighter) {
        case 'hero':
          return this.props.pool.hero ? (
            <DeckInfoIsRanged isRanged={this.props.pool.hero.isRanged} />
          ) : (
            ''
          );
        case 'sidekick':
          return this.props.pool.sidekick ? (
            <DeckInfoIsRanged isRanged={this.props.pool.sidekick.isRanged} />
          ) : (
            ''
          );
      }
    },
    isHp: (fighter) => {
      switch (fighter) {
        case 'hero':
          return this.props.pool.hero ? (
            <DeckInfoIsHp hp={this.props.pool.hero.hp} quantity={1} />
          ) : (
            ''
          );
        case 'sidekick':
          return this.props.pool.sidekick ? (
            <DeckInfoIsHp
              hp={this.props.pool.sidekick.hp}
              quantity={this.props.pool.sidekick.quantity}
            />
          ) : (
            ''
          );
      }
    },
    move: () => {
      return this.props.pool.hero ? (
        <span>
          <i className='fas fa-shoe-prints' /> {this.props.pool.hero.move}
        </span>
      ) : (
        ''
      );
    },
    sidekickName: () => {
      return this.props.pool.sidekick
        ? this.props.pool.sidekick.name
        : 'loading...';
    },
    special: () => {
      return this.props.pool.hero
        ? this.props.pool.hero.specialAbility
        : 'loading...';
    },
    author: () => {
      return this.props.pool ? this.props.pool.author : 'loading...';
    },
    note: () => {
      return this.props.pool ? this.props.pool.deckNote : 'not available';
    },
    link: () => {
      return this.props.pool.deckid ? (
        <Link href={`https://unmatched.cards/decks/${this.props.pool.deckid}`}>
          <a>
            <i className='fas fa-external-link-alt' />
          </a>
        </Link>
      ) : (
        '...'
      );
    },
  };

  render() {
    return (
      <Fragment>
        <div id='deckInfo'>
          <div className='deckInfo-header'>
            <h1>Deck Details</h1>
          </div>
          <div className='deckInfo-boxes'>
            {/* hero and sidekick wrapper */}
            <div className='deckInfo-box-wrapper'>
              {/* hero box */}
              <div className='deckInfo-box info-hero'>
                <h1>{this.renderDom.heroName()}</h1>
                <div className='info-icons'>
                  <div className='icon-wrap'>
                    {this.renderDom.isRanged('hero')}
                  </div>
                  <div className='icon-wrap'>{this.renderDom.isHp('hero')}</div>
                  <div className='icon-wrap'>{this.renderDom.move()}</div>
                </div>
              </div>

              {/* sidekick box */}
              <div className='deckInfo-box info-sidekick'>
                <h1>{this.renderDom.sidekickName()}</h1>
                <div className='info-icons'>
                  <div className='icon-wrap'>
                    {this.renderDom.isRanged('sidekick')}
                  </div>
                  <div className='icon-wrap'>
                    {this.renderDom.isHp('sidekick')}
                  </div>
                </div>
              </div>
            </div>

            {/* special ability */}
            <div className='deckInfo-box info-special'>
              <p>{this.renderDom.special()}</p>
            </div>

            {/* deck info and author */}
            <div className='deckInfo-box deckInfo-author'>
              <div className='author-header'>
                <h1>{this.renderDom.author()}</h1>
                {this.renderDom.link()}
              </div>
              <p>{this.renderDom.note()}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
