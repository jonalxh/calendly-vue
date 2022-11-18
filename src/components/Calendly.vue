<template>
	<div class="calendly-container" data-auto-load="false" style="`width: ${width}; height: ${height};"></div>
</template>

<script>
export default {
	name: "CalendlyVue",
	props: {
		url: {
			type: String,
			required: true,
		},
		width: {
			type: String,
			default: "auto"
		},
		height: {
			type: String,
			default: "auto"
		}
	},
	methods: {
		importCalendly() {
			if (typeof window !== "undefined") {
				return new Promise((resolve) => {
					if (document.getElementById("calendly-script")) {
						// Avoid loading the script twice
						resolve(this.createCalendlyInstance());
					} else {
						let script = document.createElement("script");
						script.onload = () => {
							resolve(this.createCalendlyInstance());
						};
						script.async = true;
						script.id = "calendly-script";
						script.src = "https://assets.calendly.com/assets/external/widget.js";
						document.head.appendChild(script);
					}
				});
			}
		},
		createCalendlyInstance() {
			if (typeof window !== "undefined") {
				try {
					window.Calendly.initInlineWidget({
						url: `https://calendly.com/${this.url}?hide_gdpr_banner=1`,
						parentElement: document.querySelector(".calendly-container"),
						prefill: {}, //TODO: Add prefill functionality
					});

					this.listenToEvents();
				} catch (error) {
					this.$emit("error", error);
				}
			}
		},
		isCalendlyEvent(e) {
			return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
		},
		listenToEvents() {
			if (typeof window !== "undefined") {
				window.addEventListener("message", (e) => {
					if (this.isCalendlyEvent(e)) {
						this.$emit("event", e.data.event);

						if (e.data.payload) {
							this.$emit("eventDetails", e.data.payload);
						}
					}
				});
			}
		},
	},
	mounted() {
		this.importCalendly();
	},
};
</script>

<style scoped>
.calendly-container {
	min-width: 320px;
	min-height: 300px;
}
</style>
