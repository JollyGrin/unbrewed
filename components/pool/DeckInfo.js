import React, { Component, Fragment } from 'react';
import DeckInfoIsRanged from './DeckInfoIsRanged';
import DeckInfoIsHp from './DeckInfoIsHp';

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
      return this.props.pool ? this.props.pool.deckNote : '(no note)';
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
            <div className='deckInfo-box-wrapper'>
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
            <div className='deckInfo-box info-special'>
              <p>{this.renderDom.special()}</p>
            </div>
            <div className='deckInfo-box'>
              <h3>{this.renderDom.author()}</h3>
              <p>{this.renderDom.note()}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
