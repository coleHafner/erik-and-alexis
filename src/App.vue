<template>
	<div id="app">
		<div v-if="!hideNav" class="top-bar">
			This is stuff
			<router-link to="/">Home</router-link>
			<router-link to="/details">Details</router-link>
			<router-link to="/gallery">Gallery</router-link>
			<router-link to="/tour">Tour</router-link>
			<router-link to="/rsvp">RSVP</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	created() {
		console.log(this.$route);
	},
	computed: {
		hideNav() {
			return this.$route.fullPath === '/';
		},
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.top-bar {
	position: fixed;
	background-color: #000;
	left: 0;
	right: 0;
	top: 0;
	padding: 2px;
}
</style>
