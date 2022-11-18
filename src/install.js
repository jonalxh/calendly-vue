import CalendlyVue from "./components/Calendly.vue";
let installed = false;

const CalendlySimple = {
    install(Vue) {
        if (installed) {
            return
        }
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("calendly-vue", CalendlyVue);
        installed = true
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(CalendlySimple);
}

export default CalendlySimple;