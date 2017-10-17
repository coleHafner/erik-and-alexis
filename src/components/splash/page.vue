<template lang="pug">
.splash-page
	.col.s12.center-align
		// h1.hide-on-small-only Alexis Brickner and Erik Larsen
		// h1.hide-on-med-and-up Alexis and Erik
		h1 Alexis and Erik
		h5 Saturday, June 16th, 2018
		router-link.btn-large.hollow(to="/details") Enter Site
		router-link.btn-large.hollow(to="/rsvp") RSVP Now
</template>

<script>
export default {
	name: 'vue-splash-page',
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.splash-page {
	background-color: transparent;
	position: relative;
	top: 400px;
}
h1 {
	margin: 0;
	padding: 0;
}

h1, h5 {
	color: #fff;
}

.hollow {
	border: 1px solid #fff;
	color: #fff;
}
</style>
