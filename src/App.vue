<template>
	<div id="app">
		<v-nav v-if="!hideNav" v-bind:fixed="true">
			<a href="" class="brand-logo left hide-on-med-and-down show-on-medium" style="float:left !important; position: relative;">This is stuff</a>
			<ul class="right hide-on-med-and-down show-on-medium">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/details">Details</router-link></li>
				<li><router-link to="/gallery">Gallery</router-link></li>
				<li><router-link to="/tour">Tour</router-link></li>
				<li><router-link to="/rsvp">RSVP</router-link></li> 
			</ul>

			<a href="" class="brand-logo hide-on-med-and-up" stlye="display:block;">Mobile Logo</a>
			<v-icon medium v-dropdown:dropdown class="right hide-on-med-and-up">list</v-icon>
			<v-dropdown id="dropdown">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/details">Details</router-link></li>
				<li><router-link to="/gallery">Gallery</router-link></li>
				<li><router-link to="/tour">Tour</router-link></li>
				<li><router-link to="/rsvp">RSVP</router-link></li> 
			</v-dropdown>
		</v-nav>
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
