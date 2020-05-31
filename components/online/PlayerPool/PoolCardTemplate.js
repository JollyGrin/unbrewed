import React, { Component, Fragment } from "react";

export default class PoolCardTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
    };
  }

  displayText = () => {
    const { basicText, immediateText, duringText, afterText } = this.props.card;
  };

  renderIcon = () => {
    const { type } = this.props.card;

    switch (type) {
      case "attack":
        return "fas fa-virus";
        break;
      case "defence":
        return "fas fa-shield-alt";
        break;
      case "versatile":
        return "fas fa-shield-virus";
        break;
      case "scheme":
        return "fas fa-bolt";
        break;
      default:
        return "";
    }
  };

  render() {
    const styles = {
      bgImg: {
        backgroundImage: `url(${
          this.props.card.imageUrl
            ? this.props.card.imageUrl
            : "https://picsum.photos/200/300"
        })`,
      },
    };
    return (
      <Fragment>
        <div className={`base ${this.props.card.type}`}>
          <div className="content">
            <span className="help">{this.props.card.characterName}</span>
            <h1>{this.props.card.title.substring(0, 16)}</h1>
            <br />
            <div className="flexbox">
              <div className="value">
                <center>
                  <i className={this.renderIcon()}></i>
                  <br />
                  <span>
                    {this.props.card.type === "scheme"
                      ? ""
                      : this.props.card.value}
                  </span>
                </center>
              </div>
              <div className="image-container" style={styles.bgImg}></div>
            </div>
            <span className="boost">{this.props.card.boost}</span>
            <div className="card-text">
              {this.props.card.basicText ? (
                <span>{this.props.card.basicText}</span>
              ) : (
                ""
              )}{" "}
              {this.props.card.basicText ? <br /> : ""}
              {this.props.card.immediateText ? "Immediately" : ""}
              {this.props.card.immediateText ? (
                <span>{this.props.card.immediateText}</span>
              ) : (
                ""
              )}{" "}
              {this.props.card.immediateText ? <br /> : ""}
              {this.props.card.duringText ? "During" : ""}
              {this.props.card.duringText ? (
                <span>{this.props.card.duringText}</span>
              ) : (
                ""
              )}
              {this.props.card.duringText ? <br /> : ""}
              {this.props.card.afterText ? "After" : ""}
              {this.props.card.afterText ? (
                <span>{this.props.card.afterText}</span>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          .card-text span {
            font-family: Roboto Condensed;
            font-size: 0.7rem;
            letter-spacing: -0.5px;
            line-height: -100;
          }

          .flexbox {
            display: flex;
          }
          .nav {
            display: flex;
            opacity: 0.05;
          }

          .nav a {
            align-self: auto;
            margin: auto;
          }

          .item {
            align-self: auto;
            margin: auto;
          }

          .nav:hover {
            opacity: 1;
          }

          .value {
            font-size: 2rem;
            margin-top: 2rem;
          }

          .boost {
            flex-direction: row-reverse;
            display: flex;
          }

          .base {
            cursor: grab;
            font-family: BebasNeueRegular;
            height: 17rem;
            margin: 0.1rem;
            border-radius: 0.5rem;
            border-style: solid !important;
            border: 4px;
            border-color: #0003;
          }

          .base:active {
            cursor: grabbing;
          }

          .base:hover {
            border-color: #fff6 !important;
          }

          .content {
            padding: 0.5rem;
          }

          h1 {
            position: inherit;
            font-size: 1.4rem;
            margin: 0 0 -2rem;
          }

          .help {
            position: inherit;
            font-size: 0.7rem;
          }

          .image-container {
            width: 100%;
            height: 5rem;
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: center center;
            background-color: black;
            border: 3px solid black;
            margin-top: 1rem;
            margin-left: 1rem;
          }

          .scheme {
            background-color: #fcbd71;
          }
          .attack {
            background-color: #dc3034;
          }
          .defence {
            background-color: #2c76ac;
            color: white;
          }
          .versatile {
            background-color: #6c4e8d;
            color: white;
          }
        `}</style>
      </Fragment>
    );
  }
}
