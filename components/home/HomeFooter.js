import React, { Component, Fragment } from 'react'

export default class HomeFooter extends Component {
  render () {
    return (
      <Fragment>
        <section>
          <div className='item'>
            <p>
              This tool is not in any way affiliated with Restoration Games or
              Mondo Games. The official cards and game rules are a trademark of
              Restoration Games, LLC.
              <br />
              <br />
              Unbrewed does not use Unmatched art nor assets. This tool is
              explicitly for personal use and may not be used for commercial
              purposes.
            </p>
          </div>
          <div className='item'>
            <p>Want to improve this tool? Fork it!</p>
            <div className='item'>
              <i className='fab fa-github'></i>{' '}
              <a href='https://github.com/JollyGrin/unbrewed'>
                Unbrewed Github
              </a>
            </div>
          </div>
        </section>
        <style jsx>{`
          section {
            display: flex;
            padding: 2rem;
            color: #e7cc98;
            font-family: Rubik;
          }

          .item {
            flex: 1;
            padding: 1rem;
            align-self: auto;
            margin: auto;
          }

          a {
            color: inherit;
          }
        `}</style>
      </Fragment>
    )
  }
}
