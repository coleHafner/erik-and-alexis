<template lang="pug">
.page-home
	.col.s12.center-align
		h1.hide-on-small-only Alexis Brickner and Erik Larsen
		h1.hide-on-med-and-up Alexis and Erik
		h5 Saturday, June 16th, 2018
		router-link.btn-large.hollow(to="/details") Enter Site
		router-link.btn-large.hollow(to="/rsvp") RSVP Now
</template>

<script>
export default {
	name: 'vue-splash-page',
	created() {
		document.title = `Welcome | ${process.env.SITE_NAME}`;
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
};
</script>

<style lang="scss" scoped>
h1 {
	margin-top: 0;
	padding-top: 2.1rem;
}
</style>
