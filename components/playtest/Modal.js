import React, { Component, Fragment } from 'react'
import PlayTestModalCard from './PlayTestModalCard'

export default class Modal extends Component {
  constructor (props) {
    super(props)
    this.displayCard = React.createRef()
    this.faceUp = React.createRef()
    this.faceDown = React.createRef()
    this.state = {
      flip: false
    }
  }

  toggleFlip = () => {
    if (!this.state.flip) {
      //   faceDown > faceUp
      console.log(this.facedown)
      this.faceDown.current.classList.add('hide')
      this.faceUp.current.classList.remove('hide')

      this.setState({ flip: true })
    } else {
      //   faceUp > faceDown
      this.faceDown.current.classList.remove('hide')
      this.faceUp.current.classList.add('hide')

      this.setState({ flip: false })
    }
  }

  componentDidMount () {
    console.log(this)
  }

  render () {
    return (
      <Fragment>
        <div className='modal-header'>
          {/* <span className='close'>&times;</span> */}
        </div>

        <div className='modal-body'>
          <div className='container'>
            <div ref={this.displayCard} className='item'>
              <div ref={this.faceUp} className='faceup hide'>
                <PlayTestModalCard card={this.props.card} />
              </div>
              <div ref={this.faceDown} className='facedown'>
                <div className='base'></div>
              </div>
            </div>
            {/* <div className='item'>
              <div className='container-is-v'>
                <div className='item'>
                  <a className='button'>
                    {''}Flip{''}
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className='modal-footer'>
          <div className='container'>
            <div className='item'>
              <a onClick={() => this.props.actions.cancel()} className='button'>
                <i className='far fa-window-close'></i> Cancel
              </a>
            </div>
            <div className='item'>
              <a
                onClick={() => this.props.actions.discard()}
                className='button'
              >
                <i className='fas fa-angle-down'></i> Discard
              </a>
            </div>
            <div className='item'>
              <a onClick={this.toggleFlip} className='button'>
                <i className='fas fa-book-open'></i> Flip
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          .hide {
              display: none;
          }
          .show {
              display: block;
          }
          
          /* Flexbox */
          .container {
            display: flex;
            flex-direction: row;
          }

          .container-is-v {
            display: flex;
            flex-direction: column;
          }

          .item {
            align-self: auto;
            margin: auto;
          }

          /* Boost Boxes */
          .boostbox {
              border-radius: 1rem;
              background
          }


          /* Button */
          .button {
            font-family: BebasNeueRegular;
            font-size: 2rem;
            color: #fff !important;
            text-transform: uppercase;
            text-decoration: none;
            background: #1e90ff;
            padding: 0.7rem;
            border-radius: 1rem;
            display: inline-block;
            border: none;
            transition: all 0.4s ease 0s;
            margin-top: 1rem;
            margin-left: 1rem;
          }

          .button :hover {
            background: #434343;
            letter-spacing: 1px;
            -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
            -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
            box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
            transition: all 0.4s ease 0s;
          }

          /* The Close Button */
          .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }

          .close:hover,
          .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
          }

          /* Modal Header */
          .modal-header {
            padding: 2px 16px;
            // background-color: #5cb85c;
            // color: white;
          }

          /* Modal Body */
          .modal-body {
            padding: 2px 16px;
          }

          /* Modal Footer */
          .modal-footer {
            padding: 2px 16px;
            // background-color: #5cb85c;
            // color: white;
          }

          /* Blank Card */
          .base {
            font-family: BebasNeueRegular;
            height: 17rem;
            width: 12rem;
            margin: 0.1rem;
            border-radius: 0.5rem;
            background: #f2f2f2;
          }
          .content {
            padding: 0.5rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
