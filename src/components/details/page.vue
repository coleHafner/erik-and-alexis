<template lang="pug">
	.container.sidenav-offset
		.col.s12.left-align
			h3 Welcome, wedding guests!
			img.right(src="../../../static/gallery-pics/birding-at-tahkenitch.jpg")
			p
				| It is our pleasure to extend an invitation to join us in celebration of our marriage at Hanley Farm at
				| 1053 Hanley Rd. in Central Point, Oregon, on June 16, 2018 at 4:00 p.m.
			p
				| Please, keep in mind that we are planning an outdoor ceremony and reception. We recommend leaving the formal wear and high
				| heels at home, instead opting for garden party attire. Please, dress in layers as summertime temperatures in Rogue Valley
				| commonly exceed 90 degrees during the day and drop below 50 degrees at night.

			p
				| After the ceremony, we will be enjoying hor d’oeuvres and yard games during a cocktail hour followed by barbeque, cake, and
				| dancing; beer, wine, and other non-alcoholic drinks will be provided.

			p
				| Please, use the 
				router-link(to="/rsvp") RSVP page 
				| on this website to RSVP before May 26th, 2018.

			p
				| We would like to end on a few notes of gratitude:

			ul
				li
					| To our parents, for their boundless love and for the overwhelming generosity they have provided during the wedding planning 
					| process.
				li
					| To our closest friends and family who will be joining us from parts both near and far, to say that your love and support over 
					| the years has been indelible is to understate the truth.
				li
					| To those who have made significant impacts on our lives but are unable to attend, we will continue to remember and honor 
					| you during life’s milestones as well as in our day-to-day.
				li
					| To all those who offered their artistic talents in designing our wedding “brand,” including Duke Stebbins and Kailee McMurran 
					| of Design by Goats and Cole Hafner Web Design, thanks for the services, but, more importantly, thanks for the memories, old 
					| friends.
			p
				| We look forward to seeing all of you at the party!
			p 
				h6 - Erik and Alexis
</template>

<script>
export default {
	name: 'vue-details-page',
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>

ul {
	> li {
		list-style: disc;
	}
	li {
		margin-bottom: 25px;
		margin-left: 50px;
	}
}
</style>
