<template lang="pug">
	.container
		.row
			.s12
				.card(v-for="pic in pics")
					.card-image
						img(v-bind:src="'' + path + '/' + pic + ''")
</template>

<script>
export default {
	name: 'vue-gallery-page',
	data() {
		return {
			path: '../../static/gallery-pics',
			pics: [
				'alexis-salmon.jpg',
				'beach-cliffs.JPG',
				'beach.jpg',
				'birding-at-tahkenitch.jpg',
				'camping.jpg',
				'ched-n-fin.jpg',
				'colorado-2.jpg',
				'colorado.jpg',
				'erik-hunt.jpg',
				'free-state.jpg',
				'greenhnouse.jpg',
				'halloween.jpg',
				'hunting.jpg',
				'la-canoe.jpg',
				'potatoes.jpg',
				'rip-city.jpg',
				'st-croix.jpg',
				'wine.jpg',
				'yurt.jpg',
			],
		};
	},
};
</script>
