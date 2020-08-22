import React, { Component, Fragment } from 'react';
import cardMock from '../../assets/mock/card.json';

export default class CardTemplate extends Component {
  constructor(props) {
    super(props);
  }

  cardProp = {
    afterText: this.props.card.afterText,
    basicText: this.props.card.basicText,
    boost: this.props.card.boost,
    characterName: this.props.card.characterName,
    duringText: this.props.card.duringText,
    imageUrl: this.props.card.imageUrl,
    immediateText: this.props.card.immediateText,
    quantity: this.props.card.quantity,
    title: this.props.card.title,
    type: this.props.card.type,
    value: this.props.card.value,
  };

  cardDetails = {
    height: 88,
    width: 63,
    outerBorderWidth: 3,
    innerCornerRadius: 1.5,
    hRuleThickness: 0.8,
    bottomPanelPadding: 3,
  };

  actions = {
    innerWidth: () => {
      return this.cardDetails.width - 2 * this.cardDetails.outerBorderWidth;
    },
    topPanelWidth: () => {
      return this.actions.innerWidth();
    },
    topPanelHeight: () => {
      return (
        this.cardDetails.height -
        2 * this.cardDetails.outerBorderWidth -
        this.actions.bottomPanelHeight() -
        this.cardDetails.hRuleThickness
      );
    },
    bottomPanelHeight: () => {
      const textHeight =
        this.actions.bodyTextStyle().fontSize * 0.8 +
        6 * this.actions.wrapCardTitle().length +
        this.actions.bodyTextStyle().fontSize *
          1.1 *
          (this.isScheme
            ? this.wrapBasicText.length
            : this.wrapBasicText.length +
              this.wrapImmediateText.length +
              this.wrapDuringText.length +
              this.wrapAfterText.length) +
        5;
      return Math.max(28.8, textHeight);
    },
    bottomPanelWidth: () => {
      return this.innerWidth;
    },
    bodyTextStyle: () => {
      const fontSize = 3.3;
      return {
        fill: '#fff',
        font: `${fontSize}px Archivo Narrow`,
        fontSize,
      };
    },
    titleTextStyle: () => {
      const fontSize = 5;
      return {
        fill: '#fff',
        font: `${fontSize}px BebasNeueRegular`,
        fontSize,
      };
    },
    wrapBasicText: () => {
      if (!(this.cardProp.basicText && this.cardProp.basicText.trim()))
        return [];
      const lines = this.cardProp.basicText
        .trim()
        .split(/\r?\n/)
        .map((line) => {
          return this.wrapLines(
            line.split(' '),
            this.actions.bodyTextStyle().font,
            this.actions.maxTextLength()
          );
        });
      return lines.flat();
    },
    wrapCardTitle: () => {
      return this.actions.wrapLines(
        this.cardProp.title.split(' '),
        this.actions.titleTextStyle().font,
        this.actions.maxTextLength()
      );
    },
    wrapLines: (words, font, maxLength, indent = 0) => {
      var line = '';
      var i;
      for (i = 0; i < words.length; i++) {
        line = words.slice(0, words.length - i).join(' ');
        if (this.actions.getTextWidth(line, font) <= maxLength - indent) break;
      }
      const remainingWords =
        i === words.length ? words.slice(1) : words.slice(words.length - i);
      if (i && remainingWords.length) {
        return [
          line,
          ...this.actions.wrapLines(remainingWords, font, maxLength),
        ];
      }
      return [line];
    },
    maxTextLength: () => {
      return (
        this.actions.bottomPanelWidth() -
        2 * this.cardDetails.bottomPanelPadding
      );
    },
    getTextWidth: (text, font) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = font;
      return context.measureText(text).width;
    },
  };

  render() {
    const {
      width,
      height,
      outerBorderWidth,
      innerCornerRadius,
    } = this.cardDetails;

    const topPanelWidth = this.actions.topPanelWidth();
    const topPanelHeight = this.actions.topPanelHeight();
    const innerWidth = this.actions.innerWidth();

    return (
      <Fragment>
        <svg
          width={width}
          height={height}
          ref='svg'
          viewBox='0 0 63 88'
          shapeRendering='geometricPrecision'
        >
          <clipPath id='innerBorder'>
            <rect
              width={innerWidth}
              height={height - 2 * outerBorderWidth}
              rx={innerCornerRadius}
            />
          </clipPath>
          <clipPath id='topPanel'>
            <rect width={topPanelWidth} height={topPanelHeight} />
          </clipPath>
        </svg>
      </Fragment>
    );
  }
}
