import React, { Component } from 'react'
import Link from 'next/link'
import HomeLayout from '../components/home/HomeLayout'
import HomeFooter from '../components/home/HomeFooter'
import StepBox from '../components/home/StepBox'

export default class index extends Component {
  render () {
    return (
      <div>
        <HomeLayout>
          <section>
            <div className='hero container'>
              <div className='item'>
                <center>
                  <p className='basic-text'>
                    an unofficial{' '}
                    <a href='https://restorationgames.com/shop/battle-of-legends-vol-1-unmatched/'>
                      Unmatched
                    </a>{' '}
                    homebrew simulator
                  </p>
                  <img src='../../static/media/logo.svg'></img>
                  <br />
                  <Link href='./playtest'>
                    <a className='button'>Playtest your Homebrew</a>
                  </Link>
                </center>
              </div>
            </div>
          </section>
          <section className='body-section'>
            <div className='container'>
              <div className='item'>
                <StepBox
                  title='step: 1'
                  sub='hombrew your hero'
                  text='Design a deck  using Jon G’s tool. Copy the JSON to paste into the playtest.'
                  url='https://jonathanguberman.github.io/unmatched_maker/'
                  button='Make your Deck'
                />
              </div>
              <div className='item'>
                <StepBox
                  title='step: 2'
                  sub='Playtest & Refine'
                  text='Bring your deck into the simulator and test playing with it before printing your homebrewed deck!'
                  url='./playtest'
                  button='Playtest your deck'
                />
              </div>
            </div>
            <div className='container social'>
              <div className='item'>
                <StepBox
                  title='step: 3'
                  sub='share and discuss!'
                  text='Join communities to share your creation, get feedback from others, and find minatures for your new set!'
                  url=''
                  button=''
                />
              </div>
              <div className='item'>
                <center>
                  <a href='https://boardgamegeek.com/forum/2870415/unmatched-battle-legends-volume-one/variants'>
                    {' '}
                    <i className='fas fa-comments'></i>{' '}
                    <p className='social-text'>BGG: Unmatched Variants</p>
                  </a>
                </center>
              </div>
              <div className='item '>
                <center>
                  <a href='https://www.reddit.com/r/Unmatched/'>
                    <i className='fab fa-reddit'></i>{' '}
                    <p className='social-text'>r/Unmatched</p>
                  </a>
                </center>
              </div>
              <div className='item '>
                <center>
                  <a href='https://www.reddit.com/r/Unbrewed/'>
                    {' '}
                    <i className='fab fa-reddit'></i>{' '}
                    <p className='social-text'>r/Unbrewed</p>
                  </a>
                </center>
              </div>
            </div>
          </section>
          <HomeFooter />
        </HomeLayout>

        <style jsx>{`
          .social .item a {
            color: inherit;
          }

          .social .item {
            flex: 1;
          }

          .fas,
          .fab {
            font-size: 3rem;
          }

          .social-text {
            font-family: 'BebasNeueRegular';
            font-size: 1.2rem;
          }

          .basic-text {
            font-family: 'Rubik';
            color: #e7cc98;
            font-size: 1.2rem;
          }

          .basic-text a {
            color: inherit;
          }

          .hero {
            font-family: BebasNeueRegular;
            height: 50vh;
            padding: 3rem;
          }

          .hero img {
            width: 30rem;
            height: auto;
            padding: 1rem;
          }

          hr {
            margin-top: 2rem;
            margin-bottom: 2rem;
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
            padding-bottom: 1rem;
          }

          @media only screen and (max-width: 900px) {
            .container {
              flex-flow: row wrap;
              width: unset;
            }
          }
        `}</style>
      </div>
    )
  }
}
