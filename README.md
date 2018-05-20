# vue-uno-card

> Vue.js UNO card.

## Install

Install the package.

```bash
$ npm install vue-uno-card
```

Import the component

```js
import Vue from 'vue'
import VueUnoCard from 'vue-uno-card'
```

Then register the component in your javascript:

```js
Vue.component('uno-card', VueUnoCard)
```

You may now use the component in your markup

```html
<uno-card color="red" :number="1" type="number"/>
```

Attribute | Acceppted values
----------|---------------------------------------
color     | red, yellow, green, blue, none
number    | 0 to 9
type      | number, reverse, block, draw-2, draw-4

## Documentation

- [Interactive example](http://blog.filipemeneses.com.br/vue-uno-card/)
