<template>
  <main>
    <header class="header">
      <h1>vue-uno-card</h1>
      <h2>Vue.js UNO card</h2>
    </header>

    <section>
      <div class="uno-component">
        <span v-for="(color) in ['red', 'yellow', 'green', 'blue']">
          <span v-for="(_, number) in Array(10)">
            <vue-uno-card type="number" :number="number" :color="color"/>
          </span>
        </span>
        <div>
          <span v-for="(color) in ['red', 'yellow', 'green', 'blue']">
            <vue-uno-card type="block" :color="color"/>
          </span>
        </div>
        <div>
          <span v-for="(color) in ['red', 'yellow', 'green', 'blue']">
            <vue-uno-card type="reverse" :color="color"/>
          </span>
        </div>
        <div>
          <span v-for="(color) in ['red', 'yellow', 'green', 'blue']">
            <vue-uno-card type="draw-2" :color="color"/>
          </span>
        </div>
        <div>
          <span v-for="(color) in ['red', 'yellow', 'green', 'blue', 'none']">
            <vue-uno-card type="draw-4" :color="color"/>
          </span>
        </div>
        <div>
          <span v-for="(color) in ['red', 'yellow', 'green', 'blue', 'none']">
            <vue-uno-card type="wild" :color="color"/>
          </span>
        </div>
      </div>
    </section>

    <section class="documentation">
      <article>
        <div class="column">
          <p>
            This code:
          </p>
          <div>
            <pre class="code"><code>&lt;vue-uno-card type="{{type}}" :number="{{filteredNumber}}" color="{{color}}"/&gt;</code></pre>
          </div>
          <p>
            Change the attributes bellow to live-preview:
          </p>
          <div>
            <div class="field">
              <label>Color</label>
              <select v-model="color">
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="none">none</option>
              </select>
            </div>
            <div class="field">
              <label>Type</label>
              <select v-model="type">
                <option value="reverse">reverse</option>
                <option value="number">number</option>
                <option value="draw-2">draw-2</option>
                <option value="draw-4">draw-4</option>
                <option value="wild">wild</option>
              </select>
            </div>
            <div class="field">
              <label>Number</label>
              <input type="number" min="0" max="9" v-model="number"/>
            </div>
          </div>
        </div>
        <div class="column">
          <p>
            Output this:
          </p>
          <vue-uno-card :type="type" :number="filteredNumber" :color="color"/>
        </div>
      </article>
    </section>

    <footer class="footer">
      <a href="https://github.com/filipemeneses/vue-uno-card">Git</a>
    </footer>
  </main>
</template>

<script>
import VueUnoCard from './vue-uno-card'

export default {
  name: 'app',
  components: {
    VueUnoCard
  },
  data () {
    return {
      type: 'number',
      number: 0,
      color: 'blue'
    }
  },
  computed: {
    filteredNumber () {
      let number = parseInt(this.number)
      if (number > 9) number = 9
      if (number < 0 || isNaN(number)) number = 0
      return number
    }
  }
}
</script>

<style media="screen" lang="scss">
  html, body {
    padding:0;
    margin:0;
    background-color: #FFFFFF;
  }
  h1, h2, h3, p, div, a {
    margin: 0;
    color: #444;
    font-family: Helvetica, Arial, sans-serif;
  }
  h2, h3 {
    font-weight: 400;
    font-size: 16px;
  }

  .header {
    background-color: #F7F7F7;
    text-align: center;
    padding: 96px 0 32px 0;

    h2 {
      margin: 8px;
    }
  }

  section {
    padding: 32px;

    h3 {
      margin: 16px 0 32px 0;
    }
  }

  article {
    background-color: #FFF;
    width: 100%;
    margin: 0 auto;
    &::after {
      content: "";
      display: block;
      clear: both;
    }

    .column {
      float: left;

      &:first-child {
        min-width: calc(75% - 64px);
        width: calc(75% - 64px);
        padding: 0 64px 0 0;
      }
      &:last-child {
        min-width: 25%;
        width: 25%;
      }
    }

    .code {
      padding: 16px;
      background-color: #282C34;
      color: #A2A5AD;
    }

    .field {
      margin: 16px 0 ;

      label {
      }
      select, input {
        position: relative;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 100%;
        display: block;
        min-height: 24px;
        line-height: 24px;
        border-radius: 2px;
        padding: 8px 0 8px 16px;
        border: 1px solid #999;
        box-sizing: border-box;
        background: white;
        user-select: none;
      }
      select::after {
        position: absolute;
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
        &:active {
          border-color: transparent transparent #fff transparent;
          top: 7px;
        }
      }
    }

    .vue-uno-card {
      width: 200px;
      svg {
        filter: drop-shadow( 0 15px 10px rgba(0, 0, 0, 0.2) );
      }
    }
  }

  .uno-component, .documentation {
    width: 800px;
    margin: 0 auto;
    border: 1px solid #E0E0E0;
  }

  .footer {
    background-color: #F7F7F7;
    text-align: center;
    padding: 32px;

    a, a:link, a:visited, a:active {
      text-decoration: none;
      color:#444;
    }
    a:hover{
      color:#555;
    }
  }
</style>
