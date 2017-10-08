<template lang="pug">
	#app
		nav.nav-extended(v-if="!hideNav")
			.nav-wrapper
				a.brand-logo(href="#" style="display:block; min-height: 120px;")
					img(src="./assets/cat-small-transparent-bg.png" alt="logo")
			.nav-content
				ul.tabs.tabs-transparent
					li.tab(v-bind:class="{active: $route.fullPath === '/details'}")
						router-link(to="/details" v-bind:class="{active: $route.fullPath === '/details'}") Wedding Details

					li.tab(v-bind:class="{active: $route.fullPath === '/gallery'}")
						router-link(to="/gallery" v-bind:class="{active: $route.fullPath === '/gallery'}") Photo Gallery

					li.tab(v-bind:class="{active: $route.fullPath === '/tour'}")
						router-link(to="/tour" v-bind:class="{active: $route.fullPath === '/tour'}") Venue

					li.tab(v-bind:class="{active: $route.fullPath === '/our-story'}")
						router-link(to="/our-story" v-bind:class="{active: $route.fullPath === '/our-story'}") Our Story
						
					li.tab(v-bind:class="{active: $route.fullPath === '/rsvp'}")
						router-link(to="/rsvp" v-bind:class="{active: $route.fullPath === '/rsvp'}") RSVP
		transition(name="fade")
			router-view
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

<style lang="scss">
$roboto-font-path: '../static/materialize-css/fonts/roboto/';
@import '../static/materialize-css/sass/materialize.scss';

.container {
	background-color: rgba(255,255,255,.33);
}

nav {
	background-color: $secondary-color;
	
	.nav-content {
		background-color: $primary-color;
	}
}


.hollow {
	background-color: transparent;
	border: 1px solid #000;
	color: #000;
	margin-right: 15px;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .5s;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
