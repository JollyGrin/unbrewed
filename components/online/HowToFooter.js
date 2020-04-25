import React, { Component, Fragment } from 'react'

export default class HowToFooter extends Component {
  render () {
    return (
      <Fragment>
        <footer className='footer'>
          <div className='content has-text-centered'>
            Join the <a href='https://discord.gg/bQgBpAp'> Discord</a>! Star me
            on <a href='https://github.com/JollyGrin/unbrewed'>Github</a>!
          </div>
        </footer>
        <style jsx>{`
          .footer {
            color: #e7cc98;
            font-size: 1.3rem;
            background-color: #48284f;
          }
        `}</style>
      </Fragment>
    )
  }
}
