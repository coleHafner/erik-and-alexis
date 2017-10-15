<template lang="pug">
	.container
		template(v-for="picChunk in pics")
			.row
				.s3.col(v-for="pic in picChunk")
					.pic-inner(v-bind:class="generateClassname(pic)")
						| &nbsp;
</template>

<script>
export default {
	name: 'vue-gallery-page',
	data() {
		return {
			path: '../../static/gallery-pics',
			pics: [
				[
					'alexis-salmon.jpg',
					'beach.jpg',
					'birding-at-tahkenitch.jpg',
					'camping.jpg',
				],
				[
					'ched-n-fin.jpg',
					'colorado-2.jpg',
					'colorado.jpg',
					'erik-hunt.jpg',
				],
				[
					'free-state.jpg',
					'greenhnouse.jpg',
					'halloween.jpg',
					'hunting.jpg',
				],
				[
					'la-canoe.jpg',
					'potatoes.jpg',
					'rip-city.jpg',
					'st-croix.jpg',
				],
				[
					'wine.jpg',
					'yurt.jpg',
				],
			],
		};
	},
	methods: {
		generateClassname(pic) {
			console.log('paaaac', pic);
			return pic
				? pic.split('.')[0]
				: 'nope';
		},
	},
};
</script>

<style lang="scss" scoped>

.container {
	padding-top: 30px;
}

.row .s3.col {
	.pic-inner {
		background-size: cover;
		height: 200px;
	}
}

.alexis-salmon {
	background: url(../../../static/gallery-pics/alexis-salmon.jpg) center center no-repeat;
}
			
.beach {
	background: url(../../../static/gallery-pics/beach.jpg) center center no-repeat;
}
			
.birding-at-tahkenitch {
	background: url(../../../static/gallery-pics/birding-at-tahkenitch.jpg) center center no-repeat;
}
			
.camping {
	background: url(../../../static/gallery-pics/camping.jpg) center center no-repeat;
}
			
.ched-n-fin {
	background: url(../../../static/gallery-pics/ched-n-fin.jpg) center center no-repeat;
}
			
.colorado-2 {
	background: url(../../../static/gallery-pics/colorado-2.jpg) center center no-repeat;
}

.colorado {
	background: url(../../../static/gallery-pics/colorado.jpg) center center no-repeat;
}
			
.erik-hunt {
	background: url(../../../static/gallery-pics/erik-hunt.jpg) center center no-repeat;
}
			
.free-state {
	background: url(../../../static/gallery-pics/free-state.jpg) center center no-repeat;
}
			
.greenhnouse {
	background: url(../../../static/gallery-pics/greenhnouse.jpg) center center no-repeat;
}
			
.halloween {
	background: url(../../../static/gallery-pics/halloween.jpg) center center no-repeat;
}
			
.hunting {
	background: url(../../../static/gallery-pics/hunting.jpg) center center no-repeat;
}
			
.la-canoe {
	background: url(../../../static/gallery-pics/la-canoe.jpg) center center no-repeat;
}
			
.potatoes {
	background: url(../../../static/gallery-pics/potatoes.jpg) center center no-repeat;
}
			
.rip-city {
	background: url(../../../static/gallery-pics/rip-city.jpg) center center no-repeat;
}

			
.st-croix {
	background: url(../../../static/gallery-pics/st-croix.jpg) center center no-repeat;
}
			
.wine {
	background: url(../../../static/gallery-pics/wine.jpg) center center no-repeat;
}
			
.yurt {
	background: url(../../../static/gallery-pics/yurt.jpg) center center no-repeat;
}
				
</style>
