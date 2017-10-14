import Vue from 'vue';
import Router from 'vue-router';
import Tour from '@/components/tour/page';
import Rsvp from '@/components/rsvp/page';
import Story from '@/components/story/page';
import Venue from '@/components/venue/page';
import Splash from '@/components/splash/page';
import Details from '@/components/details/page';
import Gallery from '@/components/gallery/page';


Vue.use(Router);
const router = new Router({
	routes: [
		{
			path: '/',
			name: 'Splash',
			component: Splash,
		},
		{
			path: '/our-story',
			name: 'Our Story',
			component: Story,
		},
		{
			path: '/details',
			name: 'Details',
			component: Details,
		},
		{
			path: '/gallery',
			name: 'Gallery',
			component: Gallery,
		},
		{
			path: '/tour',
			name: 'Tour',
			component: Tour,
		},
		{
			path: '/venue',
			name: 'Venue',
			component: Venue,
		},
		{
			path: '/rsvp',
			name: 'RSVP',
			component: Rsvp,
		},
	],
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
