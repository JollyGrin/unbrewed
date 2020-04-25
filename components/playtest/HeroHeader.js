import React, { Component, Fragment } from 'react'

export default class HeroHeader extends Component {
  isRanged = fighter => {
    if (fighter.isRanged) {
      return 'Ranged'
    } else {
      return 'Melee'
    }
  }

  sidekickRenderIcon = () => {
    if (this.props.sidekick.quantity > 1) {
      return <i className='fas fa-list-ol'></i>
    } else {
      return <i className='fas fa-heart'></i>
    }
  }

  render () {
    return (
      <Fragment>
        <div className='section'>
          <div className='item-icons'>
            <div className='column'>
              <div className='item-v'>
                <i className='fas fa-heart'></i> {this.props.hero.hp}
              </div>
              <div className='item-v'>
                <i className='fas fa-shoe-prints'></i> {this.props.hero.move}
              </div>
            </div>
          </div>
          <div className='item-hero'>
            <h1>{this.props.hero.name}</h1>
            <h3>{this.isRanged(this.props.hero)}</h3>
          </div>
          <div className='item-sidekick'>
            <h1>{this.props.sidekick.name}</h1>
            <h3>{this.isRanged(this.props.sidekick)}</h3>
          </div>
          <div className='item-icons'>
            <div className='column'>
              <div className='item-v'>
                {this.sidekickRenderIcon()}{' '}
                {this.props.sidekick.quantity === 1
                  ? this.props.sidekick.hp
                  : this.props.sidekick.quantity}
              </div>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='item'>
            <p>{this.props.hero.specialAbility}</p>
          </div>
        </div>
        <style jsx>{`
          .section {
            font-family: 'Rubik';
            display: flex;
          }

          .column {
            margin-top: 2.5rem;
            display: flex;
            flex-direction: column;
          }
          .item-sidekick {
            align-self: auto;
            margin: 1rem;
          }

          .item-hero {
            align-self: auto;
            margin: 1rem;
          }
          .item-hero-desc {
            align-self: auto;
            margin: 1rem;
          }

          .item-icons {
            align-self: auto;
            // margin: 1rem;
          }

          .item-v {
            margin: 0;
          }
        `}</style>
      </Fragment>
    )
  }
}
