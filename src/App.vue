<template lang="pug">
	main#app
		nav.mobile-nav.valign-wrapper(v-show="showMobileNav")
			a.brand-logo
				h3.center-align Alexis and Erik
			a(v-side-nav:demo="" class="left" href="#" style="margin-left: 10px;") 
				i.material-icons(style="font-size: 40px") list
		v-side-nav(id="demo" v-bind:fixed="true" v-show="showNav")
			li.logo
				// this will force a refresh for the home page, restoring the background image
				a.center-align(href="/") 
					img(src="./assets/cat-small-transparent-bg.png" alt="logo")
				.separator
			li(v-bind:class="{active: $route.fullPath === '/details'}")
				router-link(to="/details" v-bind:class="{active: $route.fullPath === '/details'}") Wedding Details

			li(v-bind:class="{active: $route.fullPath === '/gallery'}")
				router-link(to="/gallery" v-bind:class="{active: $route.fullPath === '/gallery'}") Photo Gallery

			li(v-bind:class="{active: $route.fullPath === '/tour'}")
				router-link(to="/tour" v-bind:class="{active: $route.fullPath === '/tour'}") Tour

			li(v-bind:class="{active: $route.fullPath === '/venue'}")
				router-link(to="/venue" v-bind:class="{active: $route.fullPath === '/venue'}") Venue

			li(v-bind:class="{active: $route.fullPath === '/our-story'}")
				router-link(to="/our-story" v-bind:class="{active: $route.fullPath === '/our-story'}") Our Story
				
			li(v-bind:class="{active: $route.fullPath === '/rsvp'}")
				router-link(to="/rsvp" v-bind:class="{active: $route.fullPath === '/rsvp'}") RSVP
		transition(name="fade")
			router-view
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			viewportWidth: 0,
		};
	},
	mounted() {
		this.$nextTick(function () {
			window.addEventListener('resize', this.setViewportWidth);
			this.setViewportWidth();
		});
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setViewportWidth);
	},
	methods: {
		setViewportWidth() {
			this.viewportWidth = document.documentElement.clientWidth;
		},
	},
	computed: {
		showNav() {
			return this.$route.fullPath !== '/';
		},
		showMobileNav() {
			return (
				this.showNav &&
				this.viewportWidth <= 992
			);
		},
	},
};
</script>

<style lang="scss">
$roboto-font-path: '../static/materialize-css/fonts/roboto/';
$great-vibes-font-path: '../static/materialize-css/fonts/great-vibes/';
@import '../static/materialize-css/sass/materialize.scss';

.container {
	background-color: rgba(255,255,255, 1);
	margin-left: 220px
}

 .mobile-nav {
	 min-height: 81px;
 }

.side-nav {
	width: 200px;
	background-color: $primary-color;
	li {
		&.logo {
			a {
				display: block;
				height: 210px;
			}

			.separator {
				width: 75%;
				display: block;
				margin: auto;
				border-bottom: 1px dashed $secondary-color;
				margin-bottom: 20px;
			}
		}

		a {
			color: #fff;
		}
	}
	
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

@media only screen and (max-width : 992px) {
   .container {
     margin-left: auto;
   }
 }

 @media only screen and (max-width : 540px) {
	 .mobile-nav {
		 h3 {
			 font-size: 2rem;
		 }
	 }
 }
</style>
