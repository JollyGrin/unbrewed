import React, { Component, Fragment } from 'react'

export default class StepBox extends Component {
  render () {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <h3>{this.props.sub}</h3>
        <p>{this.props.text}</p>
        {this.props.url ? (
          <a className='button' href={this.props.url}>
            {this.props.button}
          </a>
        ) : (
          ''
        )}
        <style jsx>{`
          h1,
          h2,
          h3 {
            font-family: BebasNeueRegular;
            margin: 0;
          }
          h1 {
            font-size: 3rem;
          }
          h3 {
            font-size: 2rem;
          }
          p {
            font-family: Rubik;
            font-size: 1.2rem;
          }

          .button {
            font-size: 1.5rem;
            font-family: BebasNeueRegular;
            color: #fff !important;
            text-transform: uppercase;
            text-decoration: none;
            background: #1e90ff;
            padding: 0.7rem;
            border-radius: 3rem;
            display: inline-block;
            border: none;
            transition: all 0.4s ease 0s;
          }

          .button :hover {
            background: #434343;
            letter-spacing: 1px;
            -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
            -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
            box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
            transition: all 0.4s ease 0s;
          }
        `}</style>
      </Fragment>
    )
  }
}
