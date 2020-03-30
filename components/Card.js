import React, { Component, Fragment } from 'react'

export default class Card extends Component {
  card = this.props.card

  cardColor = () => {
    switch (this.card.type) {
      case 'attack':
        return '#dc3034'
      case 'versatile':
        return '#6c4e8d'
      case 'defence':
        return `#2c76ac`
      case 'scheme':
        return `#fcbd71`
      default:
        return ''
    }
  }

  componentDidMount () {
    // console.log(this.props.card)
    // console.log(this.props.card.backgroundImage)
  }
  render () {
    const styles = {
      textColor: {
        color: this.cardColor()
      }
    }
    return (
      <Fragment>
        <div className='dropdown'>
          <span className='typeDot' style={styles.textColor}>
            ❚❚{' '}
          </span>
          <span>{this.props.card.title}</span>

          <div className='dropdown-content'>
            {/* <code>{JSON.stringify(this.props.card)}</code> */}
            <img src={this.card.imageUrl}></img>
            <h3 style={styles.textColor}>{this.card.title}</h3>

            <code>type: {this.card.type}</code>
            <br />
            <code>value: {this.card.value}</code>
            <br />
            <code>boost: {this.card.boost}</code>
            <br />
            <code>usable by: {this.card.characterName}</code>
            <p>
              {this.card.basicText ? `${this.card.basicText}` : ''}
              <br />
              {this.card.immediateText
                ? `IMMEDIATE: ${this.card.immediateText}`
                : ''}
              <br />
              {this.card.duringText ? `DURING: ${this.card.duringText}` : ''}
              <br />
              {this.card.afterText ? `AFTER: ${this.card.afterText}` : ''}
            </p>
          </div>
        </div>

        <style jsx>{`
          img {
            height: auto;
            width: 7rem;
          }

          .dropdown {
            position: relative;
            display: inline-block;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            padding: 12px 16px;
            z-index: 1;
          }

          .dropdown:hover .dropdown-content {
            display: block;
          }
        `}</style>
      </Fragment>
    )
  }
}
