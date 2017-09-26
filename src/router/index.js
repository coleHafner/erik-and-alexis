import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/page';
import Tour from '@/components/tour/page';
import Rsvp from '@/components/rsvp/page';
import Details from '@/components/details/page';
import Gallery from '@/components/gallery/page';

Vue.use(Router);
const router = new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
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
