import React, { Component, Fragment } from 'react'
import CenterColumn from '../../CenterColumn'
import Link from 'next/link'

export default class HowToHero extends Component {
  constructor (props) {
    super(props)
    this.lobby = React.createRef()
    this.player = React.createRef()
    this.state = {
      lobby: '',
      player: ''
    }
  }

  buttonToggle = () => {
    if (this.state.lobby && this.state.player) {
      return ''
    } else {
      return 'disabled'
    }
  }

  render () {
    return (
      <Fragment>
        <section className='hero waves-background'>
          <div className='hero-body'>
            <CenterColumn>
              <div className='columns is-vcentered'>
                <div className='column'>
                  <figure className='image ulogo'>
                    <img src='/static/media/online/uonline.svg' />
                  </figure>
                </div>
                <div className='column'>
                  <div className='field'>
                    <div className='control'>
                      <span className='input-text'>Lobby Name</span>
                      <input
                        ref={this.lobby}
                        className='input is-rounded'
                        onChange={e => this.setState({ lobby: e.target.value })}
                      ></input>
                    </div>
                  </div>
                  <div className='field'>
                    <div className='control'>
                      <span className='input-text'>Player Name</span>
                      <input
                        ref={this.player}
                        className='input is-rounded'
                        onChange={e =>
                          this.setState({ player: e.target.value })
                        }
                      ></input>
                    </div>
                  </div>{' '}
                  <br />
                  <div className='field is-grouped-centered'>
                    <div className='control'>
                      <Link
                        href={`online/${this.state.lobby}/${this.state.player}`}
                      >
                        <a
                          className='connectButton button is-link is-fullwidth is-rounded'
                          disabled={
                            this.state.lobby && this.state.player ? false : true
                          }
                        >
                          Connect to Lobby
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CenterColumn>
          </div>
          <br />
          <br />
        </section>

        <style jsx>{`
          .ulogo img {
            height: 20rem;
          }

          .connectButton {
            font-family: BebasNeueRegular;
            font-size: 1.5rem;
          }

          .input-text {
            color: #e7cc98;
            font-family: BebasNeueRegular;
            font-size: 2rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
