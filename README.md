# calendly-vue

A simple Vue.js component to embed calendly in your web app.

## Install
`npm i calendly-vue`

## Usage

Import and add to your components section
``` javascript
import CalendlyVue from "calendly-vue"

export default {
    components: {
        CalendlyVue
    },
    methods: {
        logEvent(evt) {
            console.log(evt)
        }
    }
}
```

Use in your HTML section:
``` html
    <calendly-vue url="someone-123" @event="logEvent" @event-details="logEvent" @error="logEvent"></calendly-vue>
```

url prop refers to your personal/business link of calendly, buy only the variable part, i.e https://calendly.com/someone-123, we only need the someone-123 segment.




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Tutorial followed to create this package
https://5balloons.info/create-publish-you-first-vue-plugin-on-npm-the-right-way/