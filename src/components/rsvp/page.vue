<template lang="pug">
	.container
b		// h3.center-align RSVP
		.row
			.col.s2
				| &nbsp;

			.col.s8
				.error.center-align(v-show="error")
					| {{ error }}
			.col.s2
				| &nbsp;
		.row
			.col.s2
				| &nbsp;

			.col.s8.rsvp-form
				.row
					.col.s12
						.input-field
							v-icon(prefix="") group
							v-text-input#party-name(name="partyName" v-model="form.partyName")
							label(for="party-name") Party Name

				.row
					.col.s12
						.input-field
							v-icon(prefix="") face
							v-text-input#total-adults(name="totalAdults" v-model="form.totalAdults")
							label(for="total-adults") Total Adults
				.row
					.col.s12
						.input-field
							v-icon(prefix="") child_care
							v-text-input#total-children(name="totalChildren" v-model="form.totalChildren")
							label(for="total-children") Total Children (10 and under)
			.col.s2
				| &nbsp;
		.row
			.col.s12.center-align
				.btn-large(v-on:click="submit")
					v-icon.left(prefix="") check
					| RSVP Now
</template>

<script>
export default {
	name: 'vue-rsvp-page',
	data() {
		return {
			error: '',
			form: {
				partyName: '',
				totalAdults: '',
				totalChildren: '',
			},
		};
	},
	methods: {
		submit() {
			this.error = '';

			if (
				!this.form.partyName ||
				!this.form.totalAdults
			) {
				console.log('here');
				this.error = 'You must fill in all fields';
				return false;
			}

			// submit...
			this.$http.get('http://google.com')
				.then((reply) => {
					console.log('this is reply...', reply);
				});
			return '';
		},
	},
};
</script>

<style lang="scss" scoped>
.rsvp-form {
	padding-top: 20px;
	padding-bottom: 40px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

.container {
	margin-top: 50px;
}

.error {
	background-color: red;
	border-radius: 5px;
	font-weight: bold;
	padding: 10px;
	color: #fff;
}
</style>
