<template>
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
      :transform="`translate(${outerBorderWidth} ${outerBorderWidth})`"
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
      <polygon :class="[cardType]" points="0,0 10,0 10,14.2 5,17.1 0,14.2" />
      <text
        v-if="!isScheme"
        x="5"
        y="14.8"
        text-anchor="middle"
        :style="cardValueStyle"
      >
        {{ cardValue }}
      </text>
      <SvgUnmatchedCardIcon
        :cardType="cardType"
        :width="6"
        :x="5 - 6 / 2"
        :y="1.5"
        fill="#fff"
      />
      <rect
        class="bottom-panel"
        :width="bottomPanelWidth"
        :height="bottomPanelHeight"
        :y="bottomPanelY"
        :style="bottomPanelStyle"
      />
      <text :style="titleTextStyle" :y="bottomPanelY" dy="6">
        <tspan
          v-for="(line, index) in wrapCardTitle"
          :key="index"
          :x="bottomPanelPadding"
          dy="6"
        >
          {{ line }}
        </tspan>
      </text>
      <line
        :x1="bottomPanelPadding"
        :y1="bottomPanelY + 1.5 + 6 * wrapCardTitle.length"
        :x2="bottomPanelWidth - bottomPanelPadding"
        :y2="bottomPanelY + 1.5 + 6 * wrapCardTitle.length"
        stroke-width="0.4"
        stroke="#fff"
      />
      <text
        :v-if="basicText"
        :style="bodyTextStyle"
        :y="
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
      </text>
      <text
        v-if="!isScheme && immediateText"
        :style="bodyTextStyle"
        :y="
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
          :dy="index ? bodyTextStyle.fontSize * 1.1 : 0"
          :x="index ? bottomPanelPadding : null"
          :key="index"
        >
          {{ line }}
        </tspan>
      </text>
      <text
        v-if="!isScheme && duringText"
        :style="bodyTextStyle"
        :y="
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
          :dy="index ? bodyTextStyle.fontSize * 1.1 : 0"
          :x="index ? bottomPanelPadding : null"
          :key="index"
        >
          {{ line }}
        </tspan>
      </text>
      <text
        v-if="!isScheme && afterText"
        :style="bodyTextStyle"
        :y="
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
          :dy="index ? bodyTextStyle.fontSize * 1.1 : 0"
          :x="index ? bottomPanelPadding : null"
          :key="index"
        >
          {{ line }}
        </tspan>
      </text>
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
      </g>
      <text
        x="52.5"
        :y="height - 2 * outerBorderWidth - 1.5"
        text-anchor="end"
        :style="bottomCornerStyle"
      >
        {{ deckName }}
      </text>
      <line
        :x1="53.25"
        :y1="height - 2 * outerBorderWidth - 0.8"
        :x2="53.25"
        :y2="height - 2 * outerBorderWidth - 1.5 - 2.2"
        stroke-width="0.3"
        stroke="#fff"
      />
      <text
        x="54"
        :y="height - 2 * outerBorderWidth - 1.5"
        :style="quantityStyle"
      >
        x{{ cardQuantity }}
      </text>
    </g>
  </svg>
</template>

<script>
import * as svg from "save-svg-as-png";
import SvgUnmatchedCardIcon from "@/components/SvgUnmatchedCardIcon.vue";

import api from "@/api";

export default {
  name: "SvgUnmatchedCard",
  components: { SvgUnmatchedCardIcon },
  props: {
    afterText: {
      type: String
    },
    basicText: {
      type: String
    },
    boostValue: {
      type: Number
    },
    cardQuantity: {
      type: Number
    },
    cardTitle: {
      type: String
    },
    cardType: {
      type: String
    },
    cardValue: {
      type: Number,
      default: 2
    },
    characterName: {
      type: String
    },
    cornerRadius: {
      type: Number,
      default: 2.5
    },
    deckName: {
      type: String
    },
    duringText: {
      type: String
    },
    imageUrl: {
      type: String,
      default: null
    },
    immediateText: {
      type: String
    },
    outerBorderColour: {
      default: "#f7eadb"
    },
    outerBorderWidth: {
      type: Number,
      default: 3
    },
    height: {
      type: Number,
      default: 88
    },
    width: {
      type: Number,
      default: 63
    }
  },
  data() {
    return {
      hRuleThickness: 0.8,
      // cantonAdjust: -17,
      innerCornerRadius: 1.5,
      boostCircleRadius: 3.75
    };
  },
  methods: {
    save() {
      svg.saveSvgAsPng(this.$refs.svg, "test.png", { scale: 2000 / 63 });
    },
    getTextWidth(text, font) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = font;
      return context.measureText(text).width;
    },
    wrapLines(words, font, maxLength, indent = 0) {
      var line = "";
      var i;
      for (i = 0; i < words.length; i++) {
        line = words.slice(0, words.length - i).join(" ");
        if (this.getTextWidth(line, font) <= maxLength - indent) break;
      }
      const remainingWords =
        i === words.length ? words.slice(1) : words.slice(words.length - i);
      if (i && remainingWords.length) {
        return [line, ...this.wrapLines(remainingWords, font, maxLength)];
      }
      return [line];
    }
  },
  asyncComputed: {
    dataUri() {
      if (this.imageUrl) {
        return api.getDataUri({ url: this.imageUrl });
      }
      return null;
    }
  },
  computed: {
    isScheme() {
      return this.cardType === "scheme";
    },
    bottomPanelHeight() {
      const textHeight =
        this.bodyTextStyle.fontSize * 0.8 +
        6 * this.wrapCardTitle.length +
        this.bodyTextStyle.fontSize *
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
    maxTextLength() {
      return this.bottomPanelWidth - 2 * this.bottomPanelPadding;
    },
    wrapBasicText() {
      if (!(this.basicText && this.basicText.trim())) return [];
      const lines = this.basicText
        .trim()
        .split(/\r?\n/)
        .map(line => {
          return this.wrapLines(
            line.split(" "),
            this.bodyTextStyle.font,
            this.maxTextLength
          );
        });
      return lines.flat();
    },
    wrapImmediateText() {
      if (!(this.immediateText && this.immediateText.trim())) return [];
      const indent = this.getTextWidth(
        "IMMEDIATELY: ",
        this.sectionHeadingStyle.font
      );
      const lines = this.immediateText
        .trim()
        .split(/\r?\n/)
        .map((line, index) => {
          return this.wrapLines(
            line.split(" "),
            this.bodyTextStyle.font,
            this.maxTextLength,
            index === 0 ? indent : 0
          );
        });
      return lines.flat();
    },
    wrapDuringText() {
      if (!(this.duringText && this.duringText.trim())) return [];
      const indent = this.getTextWidth(
        "DURING COMBAT: ",
        this.sectionHeadingStyle.font
      );
      const lines = this.duringText
        .trim()
        .split(/\r?\n/)
        .map((line, index) => {
          return this.wrapLines(
            line.split(" "),
            this.bodyTextStyle.font,
            this.maxTextLength,
            index === 0 ? indent : 0
          );
        });
      return lines.flat();
    },
    wrapAfterText() {
      if (!(this.afterText && this.afterText.trim())) return [];
      const indent = this.getTextWidth(
        "AFTER COMBAT: ",
        this.sectionHeadingStyle.font
      );
      const lines = this.afterText
        .trim()
        .split(/\r?\n/)
        .map((line, index) => {
          return this.wrapLines(
            line.split(" "),
            this.bodyTextStyle.font,
            this.maxTextLength,
            index === 0 ? indent : 0
          );
        });
      return lines.flat();
    },
    wrapCardTitle() {
      return this.wrapLines(
        this.cardTitle.split(" "),
        this.titleTextStyle.font,
        this.maxTextLength
      );
    },
    cantonAdjust() {
      const width = this.getTextWidth(
        this.characterName,
        "6px BebasNeueRegular"
      );
      const adjust = width - 22.1;
      return adjust < 0 ? adjust : 0;
    },
    outerBorderStyle() {
      return {
        fill: this.outerBorderColour
      };
    },
    innerWidth() {
      return this.width - 2 * this.outerBorderWidth;
    },
    topPanelWidth() {
      return this.innerWidth;
    },
    topPanelHeight() {
      return (
        this.height -
        2 * this.outerBorderWidth -
        this.bottomPanelHeight -
        this.hRuleThickness
      );
    },
    topPanelStyle() {
      return { fill: "#fff" };
    },
    bottomPanelWidth() {
      return this.innerWidth;
    },
    bottomPanelPadding() {
      return 3;
    },
    bottomPanelY() {
      return this.topPanelHeight + this.hRuleThickness;
    },
    bottomPanelStyle() {
      return { fill: "#000" };
    },
    border() {
      return {
        fill: this.outerBorderColour
      };
    },
    namePanel() {
      return {
        fill: "#000"
      };
    },
    cardValueStyle() {
      return {
        fill: "#fff",
        "font-family": "BebasNeueRegular",
        "font-size": "7.8px"
      };
    },
    characterNameStyle() {
      return {
        fill: "#fff",
        "font-family": "BebasNeueRegular",
        "font-size": "6px"
      };
    },
    boostValueStyle() {
      return {
        fill: "#fff",
        "font-family": "BebasNeueRegular",
        "font-size": "5px"
      };
    },
    bottomCornerStyle() {
      return {
        fill: "#fff",
        "font-family": "BebasNeueRegular",
        "font-size": "1.8px"
      };
    },
    quantityStyle() {
      return {
        fill: "#fff",
        "font-family": "League Gothic",
        "font-size": "1.8px"
      };
    },
    titleTextStyle() {
      const fontSize = 5;
      return {
        fill: "#fff",
        font: `${fontSize}px BebasNeueRegular`,
        fontSize
      };
    },
    bodyTextStyle() {
      const fontSize = 3.3;
      return {
        fill: "#fff",
        font: `${fontSize}px Archivo Narrow`,
        fontSize
      };
    },
    sectionHeadingStyle() {
      const fontSize = 4;
      return {
        fill: "#fff",
        font: `${fontSize}px BebasNeueRegular`,
        fontSize
      };
    }
  }
};
</script>

<style lang="less">
@defence-blue: #2c76ac;
@attack-red: #dc3034;
@versatile-violet: #6c4e8d;
@scheme-yellow: #fcbd71;
.attack {
  fill: @attack-red;
}
.defence {
  fill: @defence-blue;
}
.versatile {
  fill: @versatile-violet;
}
.scheme {
  fill: @scheme-yellow;
}
</style>
