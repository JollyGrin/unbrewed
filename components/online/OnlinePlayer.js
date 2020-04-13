import React, { Component, Fragment } from 'react'
import wsClient from '../../lib/ws/websocketClient'
import PlayerBoxInfo from './PlayerBoxInfo'
import Slider from 'react-slick'

export default class OnlinePlayer extends Component {
  constructor (props) {
    super(props)
    this.state = { player: [] }
    this.connection = false
    this.playerBoxMock = [
      'steven',
      {
        hero: {
          name: 'Thrall',
          isRanged: true,
          hp: 14,
          move: 2,
          specialAbility:
            'Thrall may spend 1 action to discard 1 card and summon totems in the same zone. Can summon up to 4x Totems (1 per BOOST point).\n\nTotems cannot move. Totems are destroyed if space is occupied.'
        },
        sidekick: {
          name: 'Totems',
          isRanged: false,
          hp: 6,
          quantity: 4,
          quote: 'I work best alone'
        },
        actionStack: [],
        deck: [
          {
            quantity: 2,
            title: 'Flame shock',
            type: 'attack',
            value: 2,
            boost: 1,
            basicText: null,
            immediateText: null,
            duringText: null,
            afterText: 'Deal 1 damage to opposing fighter.',
            imageUrl:
              ' https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/1/19/Lava_Shock_full.jpg/550px-Lava_Shock_full.jpg?version=907c9a3d85ffabd3554126ae4eb44078',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Chain Lightning',
            type: 'attack',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText:
              'Deal 2 damage to an adjacent enemy fighter. Deal 1 damage to an adjacent enemy fighter to that one.',
            duringText: null,
            afterText: null,
            imageUrl:
              ' https://gamepedia.cursecdn.com/minionmasters_gamepedia_en/9/91/LightningBounces.png',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'elemental mastery',
            type: 'scheme',
            value: 1,
            boost: 4,
            basicText:
              "Thrall's next attack is doubled.\n\nDraw 1 card. Gain 1 action.",
            imageUrl:
              ' https://www.pcgames.de/screenshots/1280x/2016/01/wow_thrall_01-buffed.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Mana Tide Totem',
            type: 'scheme',
            value: 1,
            boost: 2,
            basicText: 'Draw up to 6 cards',
            imageUrl: ' https://i.imgur.com/tTv7a7M.jpg',
            characterName: 'TOTEM'
          },
          {
            quantity: 2,
            title: 'totemic recall',
            type: 'scheme',
            value: 1,
            boost: 2,
            basicText:
              'Retrieve 2x Totem cards from your deck or discard pile.\n\nGain 1 Health for every Totem on the board.',
            imageUrl: ' https://i.imgur.com/zBYceKM.png',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'elemental mastery',
            type: 'scheme',
            value: 1,
            boost: 4,
            basicText:
              "Thrall's next attack is doubled.\n\nDraw 1 card. Gain 1 action.",
            imageUrl:
              ' https://www.pcgames.de/screenshots/1280x/2016/01/wow_thrall_01-buffed.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 3,
            title: 'Lightning Shield',
            type: 'defence',
            value: 2,
            boost: 1,
            basicText: null,
            immediateText: null,
            duringText: 'Deal 1 damage to the attacking fighter.',
            afterText: null,
            imageUrl: ' https://i.imgur.com/Y8g02UO.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Earth shock',
            type: 'versatile',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText: "Cancel all effects on your opponent's cards.",
            duringText: null,
            afterText: null,
            imageUrl:
              ' https://2.bp.blogspot.com/-WHQcC0B2GMo/UwAL4xiNDkI/AAAAAAAAA1Q/MUEEQdjTGM8/s1600/EarthShock.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Chain Lightning',
            type: 'attack',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText:
              'Deal 2 damage to an adjacent enemy fighter. Deal 1 damage to an adjacent enemy fighter to that one.',
            duringText: null,
            afterText: null,
            imageUrl:
              ' https://gamepedia.cursecdn.com/minionmasters_gamepedia_en/9/91/LightningBounces.png',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Grounding Totem',
            type: 'defence',
            value: 0,
            boost: 2,
            basicText: '(Requires a totem in the same zone to play this card).',
            immediateText: null,
            duringText: 'Prevent all damage.',
            afterText: 'Destroy a Totem',
            imageUrl:
              ' https://gamepedia.cursecdn.com/wowpedia/9/9f/Grounding_Totem_TCG.jpg?version=15101dd6566a671b190f0f58c8182588',
            characterName: 'ANY'
          },
          {
            quantity: 3,
            title: 'Elemental GUardian totem',
            type: 'versatile',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText: 'Summon a totem adjacent to the opposing fighter.',
            duringText: null,
            afterText: null,
            imageUrl:
              ' https://hearthstonemetadecks.com/assets/cardart_min300x300-75/servant-of-kalimos-2c7fa0b1a38d9d7c81687b04417a4eb47c9734fe4e09baa7e676c360ebb49dc1.jpg',
            characterName: 'ANY'
          },
          {
            quantity: 1,
            title: "Nature's Call",
            type: 'scheme',
            value: 1,
            boost: 1,
            basicText:
              'Choose one:\n- Gain 2 actions\n- Draw 4 cards\n- Summon up to 4x Totems in the same zone.',
            imageUrl: ' https://pbs.twimg.com/media/D_83by1XYAIOEFj.jpg:large',
            characterName: 'THRALL'
          },
          {
            quantity: 3,
            title: 'Lightning Bolt',
            type: 'attack',
            value: 3,
            boost: 2,
            basicText: null,
            immediateText: null,
            duringText: null,
            afterText: 'Summon a Totem in the same zone.',
            imageUrl:
              ' https://www.meme-arsenal.com/memes/5b5fd9a56afe020d31da76689f008c20.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Feral Wolf',
            type: 'versatile',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText: null,
            duringText: null,
            afterText: 'You may move Thrall up to 3 spaces.',
            imageUrl: ' https://i.ytimg.com/vi/Fun33znKWY8/maxresdefault.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 3,
            title: 'Elemental GUardian totem',
            type: 'versatile',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText: 'Summon a totem adjacent to the opposing fighter.',
            duringText: null,
            afterText: null,
            imageUrl:
              ' https://hearthstonemetadecks.com/assets/cardart_min300x300-75/servant-of-kalimos-2c7fa0b1a38d9d7c81687b04417a4eb47c9734fe4e09baa7e676c360ebb49dc1.jpg',
            characterName: 'ANY'
          },
          {
            quantity: 3,
            title: 'Lightning Bolt',
            type: 'attack',
            value: 3,
            boost: 2,
            basicText: null,
            immediateText: null,
            duringText: null,
            afterText: 'Summon a Totem in the same zone.',
            imageUrl:
              ' https://www.meme-arsenal.com/memes/5b5fd9a56afe020d31da76689f008c20.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Mana Tide Totem',
            type: 'scheme',
            value: 1,
            boost: 2,
            basicText: 'Draw up to 6 cards',
            imageUrl: ' https://i.imgur.com/tTv7a7M.jpg',
            characterName: 'TOTEM'
          },
          {
            quantity: 3,
            title: 'Lightning Shield',
            type: 'defence',
            value: 2,
            boost: 1,
            basicText: null,
            immediateText: null,
            duringText: 'Deal 1 damage to the attacking fighter.',
            afterText: null,
            imageUrl: ' https://i.imgur.com/Y8g02UO.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Earth shock',
            type: 'versatile',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText: "Cancel all effects on your opponent's cards.",
            duringText: null,
            afterText: null,
            imageUrl:
              ' https://2.bp.blogspot.com/-WHQcC0B2GMo/UwAL4xiNDkI/AAAAAAAAA1Q/MUEEQdjTGM8/s1600/EarthShock.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 3,
            title: 'Lightning Bolt',
            type: 'attack',
            value: 3,
            boost: 2,
            basicText: null,
            immediateText: null,
            duringText: null,
            afterText: 'Summon a Totem in the same zone.',
            imageUrl:
              ' https://www.meme-arsenal.com/memes/5b5fd9a56afe020d31da76689f008c20.jpg',
            characterName: 'THRALL'
          }
        ],
        hand: [
          {
            quantity: 2,
            title: 'totemic recall',
            type: 'scheme',
            value: 1,
            boost: 2,
            basicText:
              'Retrieve 2x Totem cards from your deck or discard pile.\n\nGain 1 Health for every Totem on the board.',
            imageUrl: ' https://i.imgur.com/zBYceKM.png',
            characterName: 'THRALL'
          },
          {
            quantity: 1,
            title: 'Flame Nova Totem',
            type: 'attack',
            value: 0,
            boost: 4,
            basicText: null,
            immediateText: null,
            duringText: null,
            afterText: 'Deal 5 damage to each adjacent opposing fighter.',
            imageUrl:
              ' https://thumbs.gfycat.com/SilverMealyInexpectatumpleco-mobile.jpg',
            characterName: 'TOTEM'
          },
          {
            quantity: 2,
            title: 'Grounding Totem',
            type: 'defence',
            value: 0,
            boost: 2,
            basicText: '(Requires a totem in the same zone to play this card).',
            immediateText: null,
            duringText: 'Prevent all damage.',
            afterText: 'Destroy a Totem',
            imageUrl:
              ' https://gamepedia.cursecdn.com/wowpedia/9/9f/Grounding_Totem_TCG.jpg?version=15101dd6566a671b190f0f58c8182588',
            characterName: 'ANY'
          },
          {
            quantity: 2,
            title: 'Flame shock',
            type: 'attack',
            value: 2,
            boost: 1,
            basicText: null,
            immediateText: null,
            duringText: null,
            afterText: 'Deal 1 damage to opposing fighter.',
            imageUrl:
              ' https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/1/19/Lava_Shock_full.jpg/550px-Lava_Shock_full.jpg?version=907c9a3d85ffabd3554126ae4eb44078',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Healing Wave',
            type: 'scheme',
            value: 1,
            boost: 1,
            basicText: 'Gain 3 health.\n\nDraw 1 card.',
            imageUrl: ' https://i.imgur.com/lOtvcJb.png',
            characterName: 'THRALL'
          },
          {
            quantity: 2,
            title: 'Feral Wolf',
            type: 'versatile',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText: null,
            duringText: null,
            afterText: 'You may move Thrall up to 3 spaces.',
            imageUrl: ' https://i.ytimg.com/vi/Fun33znKWY8/maxresdefault.jpg',
            characterName: 'THRALL'
          },
          {
            quantity: 1,
            title: 'Earthbind Totem',
            type: 'versatile',
            value: 1,
            boost: 1,
            basicText: null,
            immediateText: 'Opponent cannot move this and next turn.',
            duringText: null,
            afterText: null,
            imageUrl: ' https://i.imgur.com/Mtb4sAk.png',
            characterName: 'TOTEM'
          },
          {
            quantity: 2,
            title: 'Healing Wave',
            type: 'scheme',
            value: 1,
            boost: 1,
            basicText: 'Gain 3 health.\n\nDraw 1 card.',
            imageUrl: ' https://i.imgur.com/lOtvcJb.png',
            characterName: 'THRALL'
          },
          {
            quantity: 3,
            title: 'Elemental GUardian totem',
            type: 'versatile',
            value: 3,
            boost: 1,
            basicText: null,
            immediateText: 'Summon a totem adjacent to the opposing fighter.',
            duringText: null,
            afterText: null,
            imageUrl:
              ' https://hearthstonemetadecks.com/assets/cardart_min300x300-75/servant-of-kalimos-2c7fa0b1a38d9d7c81687b04417a4eb47c9734fe4e09baa7e676c360ebb49dc1.jpg',
            characterName: 'ANY'
          }
        ],
        discard: [
          {
            quantity: 3,
            title: 'Lightning Shield',
            type: 'defence',
            value: 2,
            boost: 1,
            basicText: null,
            immediateText: null,
            duringText: 'Deal 1 damage to the attacking fighter.',
            afterText: null,
            imageUrl: ' https://i.imgur.com/Y8g02UO.jpg',
            characterName: 'THRALL'
          }
        ],
        commit: { main: null, boost: null, reveal: false }
      }
    ]
  }

  connectWS = e => {
    e.preventDefault()
    const { lobby, player } = this.props
    this.connection = true
    this.props.wsClient.connect(lobby, player, this.props.processState)
  }

  // sendMessage = () => {
  //   const testMSG = { test: this.textarea.current.value }
  //   console.log('testMSG', testMSG)
  //   this.props.wsClient.sendData(testMSG)
  // }

  conditionalRender = {
    playerNames: (playerName, playerPool, index) => {
      // console.log('ppppp', playerName, playerPool)
      if (playerName !== 'defaultname' && playerName) {
        return (
          <div key={index + Math.random()} className='player-item'>
            <PlayerBoxInfo
              player={playerName}
              playerPool={playerPool}
              playerIndex={index}
            />
          </div>
        )
      }
    }
  }

  mapRender = {
    playerNames: () => {
      const playerArray = Object.entries(this.props.state.gameState.players)

      return playerArray.map((player, index) => {
        return this.conditionalRender.playerNames(player[0], player[1], index)
      })
      // DELETE:  MOCK DATA
      // const playerArray = [1, 2, 3, 4, 5, 6]
      // return playerArray.map((player, index) => {
      //   return this.conditionalRender.playerNames(
      //     this.playerBoxMock[0],
      //     this.playerBoxMock[1],
      //     1
      //   )
      // })
    }
  }

  render () {
    const styles = {
      connectionDisplay: {
        display: `${this.connection ? 'none' : ''}`
      },
      fieldDisplay: {
        display: `${!this.connection ? 'none' : ''}`
      }
    }

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    }
    return (
      <Fragment>
        <div className='connectionBox' style={styles.connectionDisplay}>
          <center>
            <a onClick={e => this.connectWS(e)} className='button'>
              Connect to Lobby
            </a>
          </center>
        </div>

        <div className='playerNames' style={styles.fieldDisplay}>
          <Slider {...settings}>{this.mapRender.playerNames()}</Slider>
        </div>

        <style global jsx>{`
          .container {
            display: flex;
          }

          .container .player-item {
            margin: 1rem;
          }

          .item {
            align-self: auto;
            margin: auto;
          }

          .button {
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
