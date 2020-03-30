import React, { Component } from 'react'
import Link from 'next/link'

export default class index extends Component {
  render () {
    return (
      <div>
        <h1>unbrewed.xyz</h1>

        <hr />

        <div className='mainpage'>
          <h1>Join Lobby</h1>
          <input></input>
          <Link href='/lobby'>
            <a className='button'>Join</a>
          </Link>

          <hr />

          <h1>environments</h1>
          <Link href='/local'>
            <a className='button'>Local Deck</a>
          </Link>
          <br />
          <Link href='/'>
            <a className='button'>Spectator Field</a>
          </Link>
        </div>

        <style jsx>{`
          .mainpage {
            padding: 5rem;
          }

          hr {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .button {
            background-color: #4caf50; /* Green */
            border: none;
            color: white;
            padding: 1rem 2rem;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 2rem;
            border-radius: 0.3rem;
            margin: 1rem;
          }

          input {
            width: auto;
            font-size: 2rem;
          }

          .container {
            display: flex;
          }

          .item {
            align-self: auto;
            margin: auto;
          }
        `}</style>
      </div>
    )
  }
}
