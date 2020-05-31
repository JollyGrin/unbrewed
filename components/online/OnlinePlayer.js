import React, { Component, Fragment } from "react";
import wsClient from "../../lib/ws/websocketClient";
import PlayerBoxInfo from "./PlayerBoxInfo";
import Slider from "react-slick";
import fetch from "axios";

export default class OnlinePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { player: [] };
    this.connection = false;
  }

  connectWS = (e) => {
    e.preventDefault();
    const { lobby, player } = this.props;
    this.connection = true;
    this.props.wsClient.connect(lobby, player, this.props.processState);
  };

  conditionalRender = {
    playerNames: (playerName, playerPool, index) => {
      // console.log('ppppp', playerName, playerPool)
      if (playerName !== "defaultname" && playerName) {
        return (
          <div key={index + Math.random()} className="player-item">
            <PlayerBoxInfo
              player={playerName}
              playerPool={playerPool}
              playerIndex={index}
            />
          </div>
        );
      }
    },
  };

  mapRender = {
    playerNames: () => {
      const playerArray = Object.entries(this.props.state.gameState.players);

      return playerArray.map((player, index) => {
        return this.conditionalRender.playerNames(player[0], player[1], index);
      });
    },
  };

  componentDidMount() {
    fetch
      .get(`https://api.unbrewed.xyz/lobby/${this.props.lobby}`)
      .then((res) => {
        console.log("initiated lobby to " + this.props.lobby);
      });
  }

  render() {
    const styles = {
      connectionDisplay: {
        display: `${this.connection ? "none" : ""}`,
      },
      fieldDisplay: {
        display: `${!this.connection ? "none" : ""}`,
      },
    };

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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <Fragment>
        <div className="connectionBox" style={styles.connectionDisplay}>
          <center>
            <a onClick={(e) => this.connectWS(e)} className="button">
              Connect to Lobby
            </a>
          </center>
        </div>

        <div className="playerNames" style={styles.fieldDisplay}>
          <Slider {...settings}>{this.mapRender.playerNames()}</Slider>
        </div>

        <style global jsx>{`
          .container {
            display: flex;
          }

          .slick-list {
            overflow-y: visible !important;
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
    );
  }
}
