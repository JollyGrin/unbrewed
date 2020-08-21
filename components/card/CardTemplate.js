import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import cardMock from '../../assets/mock/card.json'

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>

                <svg
    :width="width"
    :height="height"
    ref="svg"
    viewBox="0 0 63 88"
    shape-rendering="geometricPrecision"
  >
    <clipPath id="innerBorder">
                    <rect
        :width="innerWidth"
        :height="height - 2 * outerBorderWidth"
        :rx="innerCornerRadius"
      />
    </clipPath>
                <clipPath id="topPanel">
                    <rect :width="topPanelWidth" :height="topPanelHeight" />
    </clipPath>
                <rect
      :width="width"
      :height="height"
      :rx="cornerRadius"
      :style="outerBorderStyle"
    />
    <g
      : {outerBorderWidth} ${outerBorderWidth})`"
      clip-path="url(#innerBorder)"
    >
      <rect
                    class="top-panel"
        :width="topPanelWidth"
        :height="topPanelHeight"
        :style="topPanelStyle"
      />
      <image
                    v-if="dataUri"
        :width="topPanelWidth"
        :href="dataUri"
        clip-path="url(#topPanel)"
      />
      <polygon
        :style="outerBorderStyle"
        :points="
          `0,0 10.8,0 10.8,${43.7 + cantonAdjust} 5,${47 +
                    cantonAdjust} 0,${44.2 + cantonAdjust}`
        "
      />
      <polygon
        :style="namePanel"
        :points="
          `0,14.2 10,14.2 10,${43.3 + cantonAdjust} 5,${46.2 +
                    cantonAdjust} 0,${43.3 + cantonAdjust}`
        "
      />
      <text
                    x="-20"
                    y="7"
                    text-anchor="end"
                    transform="rotate(-90 0 0)"
                    lengthAdjust="spacingAndGlyphs"
        :textLength="cantonAdjust === 0 ? 23.5 : null"
        :style="characterNameStyle"
      >
        {{ characterName }}
      </text>
            <polygon : class="[cardType]" points="0,0 10,0 10,14.2 5,17.1 0,14.2" />
            <text
                v-if="!isScheme"
                x="5"
                y="14.8"
                text-anchor="middle"
        : style="cardValueStyle"
            >
                {{ cardValue }}
            </text>
            <SvgUnmatchedCardIcon
        : cardType="cardType"
        : width="6"
        : x="5 - 6 / 2"
        : y="1.5"
                fill="#fff"
            />
            <rect
                class="bottom-panel"
        : width="bottomPanelWidth"
        : height="bottomPanelHeight"
        : y="bottomPanelY"
        : style="bottomPanelStyle"
            />
            <text : style="titleTextStyle" : y="bottomPanelY" dy="6">
                <tspan
                    v-for="(line, index) in wrapCardTitle"
          :key="index"
          :x="bottomPanelPadding"
          dy="6"
        >
          {{ line }}
        </tspan>
      </text >
            <line
        : x1="bottomPanelPadding"
        : y1="bottomPanelY + 1.5 + 6 * wrapCardTitle.length"
        : x2="bottomPanelWidth - bottomPanelPadding"
        : y2="bottomPanelY + 1.5 + 6 * wrapCardTitle.length"
                stroke-width="0.4"
                stroke="#fff"
            />
            <text
        : v-if="basicText"
        : style="bodyTextStyle"
        : y="
          bottomPanelY + bodyTextStyle.fontSize * 0.8 + 6 * wrapCardTitle.length
        "
            >
                <tspan
                    v-for="(line, index) in wrapBasicText"
          :dy="bodyTextStyle.fontSize * 1.1"
          :x="bottomPanelPadding"
          :key="index"
        >
          {{ line }}
        </tspan>
      </text >
            <text
                v-if="!isScheme && immediateText"
        : style="bodyTextStyle"
        : y="
          bottomPanelY +
            bodyTextStyle.fontSize * 0.8 +
            6 * wrapCardTitle.length +
            bodyTextStyle.fontSize * 1.1 * wrapBasicText.length
        "
            >
                <tspan
          :dy="sectionHeadingStyle.fontSize * 0.9"
          :x="bottomPanelPadding"
          :style="sectionHeadingStyle"
        >
          IMMEDIATELY:
        </tspan>
            <tspan
                v-for="(line, index) in wrapImmediateText"
          : dy="index ? bodyTextStyle.fontSize * 1.1 : 0"
          : x="index ? bottomPanelPadding : null"
          : key="index"
            >
                {{ line }}
            </tspan>
      </text >
            <text
                v-if="!isScheme && duringText"
        : style="bodyTextStyle"
        : y="
          bottomPanelY +
            bodyTextStyle.fontSize * 0.8 +
            6 * wrapCardTitle.length +
            bodyTextStyle.fontSize *
              1.1 *
              (wrapBasicText.length + wrapImmediateText.length)
        "
            >
                <tspan
          :dy="sectionHeadingStyle.fontSize * 0.9"
          :x="bottomPanelPadding"
          :style="sectionHeadingStyle"
        >
          DURING COMBAT:
        </tspan>
            <tspan
                v-for="(line, index) in wrapDuringText"
          : dy="index ? bodyTextStyle.fontSize * 1.1 : 0"
          : x="index ? bottomPanelPadding : null"
          : key="index"
            >
                {{ line }}
            </tspan>
      </text >
            <text
                v-if="!isScheme && afterText"
        : style="bodyTextStyle"
        : y="
          bottomPanelY +
            bodyTextStyle.fontSize * 0.8 +
            6 * wrapCardTitle.length +
            bodyTextStyle.fontSize *
              1.1 *
              (wrapBasicText.length +
                wrapImmediateText.length +
                wrapDuringText.length)
        "
            >
                <tspan
          :dy="sectionHeadingStyle.fontSize * 0.9"
          :x="bottomPanelPadding"
          :style="sectionHeadingStyle"
        >
          AFTER COMBAT:
        </tspan>
            <tspan
                v-for="(line, index) in wrapAfterText"
          : dy="index ? bodyTextStyle.fontSize * 1.1 : 0"
          : x="index ? bottomPanelPadding : null"
          : key="index"
            >
                {{ line }}
            </tspan>
      </text >
            <g v-if="boostValue">
                <circle
          :r="boostCircleRadius"
          :fill="outerBorderColour"
          cx="52"
          :cy="bottomPanelY - 1"
        />
        <circle
          :r="boostCircleRadius - hRuleThickness"
          fill="#000"
          cx="52"
          :cy="bottomPanelY - 1"
        />
        <text
                    x="52"
          :y="bottomPanelY - 1"
          :dy="1.5"
          text-anchor="middle"
          :style="boostValueStyle"
        >
          {{ boostValue }}
        </text>
      </g >
            <text
                x="52.5"
        : y="height - 2 * outerBorderWidth - 1.5"
                text-anchor="end"
        : style="bottomCornerStyle"
            >
                {{ deckName }}
            </text>
            <line
        : x1="53.25"
        : y1="height - 2 * outerBorderWidth - 0.8"
        : x2="53.25"
        : y2="height - 2 * outerBorderWidth - 1.5 - 2.2"
                stroke-width="0.3"
                stroke="#fff"
            />
            <text
                x="54"
        : y="height - 2 * outerBorderWidth - 1.5"
        : style="quantityStyle"
            >
                x{{ cardQuantity }}
            </text>
    </g >
  </svg >
            </Fragment >
        );
    }
}