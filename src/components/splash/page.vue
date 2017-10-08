<template lang="pug">
.page-home
	.col.s12.center-align
		h1.hide-on-small-only Alexis Brickner and Erik Larsen
		h1.hide-on-med-and-up Alexis and Erik
		h5 Saturday, June 16th, 2018
		router-link.btn-large.hollow(to="/details") Enter Site
		router-link.btn-large(to="/rsvp") RSVP Now
</template>

<script>
export default {
	name: 'vue-splash-page',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
};
</script>

<style lang="scss">
html {
	background: url(../../assets/splash-screen-1900.png) no-repeat center center fixed !important;
	-webkit-backgorund-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

@media (max-width: 800px) {
	h1 {
		font-size: 3em;
	}
}
</style>
