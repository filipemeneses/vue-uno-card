<template>
  <div class="vue-uno-card" :class="classes">
    <span v-html="cards[type][number]" v-if="type === 'number'"></span>
    <span v-html="cards[type]" v-if="type !== 'number'"></span>
  </div>
</template>

<script>
export default {
  name: 'vue-uno-card',
  props: {
    type: {
      type: String,
      required: true,
      validator: (val) => ['number', 'block', 'reverse', 'draw-2', 'draw-4', 'wild'].includes(val)
    },
    number: {
      type: Number,
      required: false,
      validator: (val) => val >= 0 && val <= 9
    },
    color: {
      type: String,
      required: true,
      validator: (val) => ['red', 'yellow', 'green', 'blue', 'none'].includes(val)
    }
  },
  data () {
    return {
      cards: {
        number: [
          require('!!raw!./assets/card-0.svg'),
          require('!!raw!./assets/card-1.svg'),
          require('!!raw!./assets/card-2.svg'),
          require('!!raw!./assets/card-3.svg'),
          require('!!raw!./assets/card-4.svg'),
          require('!!raw!./assets/card-5.svg'),
          require('!!raw!./assets/card-6.svg'),
          require('!!raw!./assets/card-7.svg'),
          require('!!raw!./assets/card-8.svg'),
          require('!!raw!./assets/card-9.svg')
        ],
        reverse: require('!!raw!./assets/card-reverse.svg'),
        block: require('!!raw!./assets/card-block.svg'),
        'wild': require('!!raw!./assets/card-wild.svg'),
        'draw-2': require('!!raw!./assets/card-draw-2.svg'),
        'draw-4': require('!!raw!./assets/card-draw-4.svg')
      }
    }
  },
  computed: {
    classes () {
      return {
        'vue-uno-card--red': this.color === 'red',
        'vue-uno-card--yellow': this.color === 'yellow',
        'vue-uno-card--green': this.color === 'green',
        'vue-uno-card--blue': this.color === 'blue'
      }
    }
  }
}
</script>

<style lang="scss">
.vue-uno-card {
  cursor: default;
  display: inline-block;
  width: 80px;

  svg {
    width: auto;
  }

  &--red {
    fill: #f55;
  }
  &--yellow {
    fill: #fa0;
  }
  &--green {
    fill: #5a5;
  }
  &--blue {
    fill: #55f;
  }
}
</style>
