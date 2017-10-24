<template lang="pug">
	.container
		// h3.center-align RSVP
		.row
			.col.s2
				| &nbsp;

			.col.s8
				.message.center-align(v-show="message" v-bind:class="messageClass")
					| {{ message }}
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

				.row.attending
					.col.s12
						v-icon.left(prefix="") date_range
						v-switch.left(v-model="form.amAttending" on="Yes!" off="No")

				.row(v-show="form.amAttending")
					.col.s12
						.input-field
							v-icon(prefix="") face
							v-text-input#total-adults(name="totalAdults" v-model="form.totalAdults")
							label(for="total-adults") Total Adults
				.row(v-show="form.amAttending")
					.col.s12
						.input-field
							v-icon(prefix="") child_care
							v-text-input#total-children(name="totalChildren" v-model="form.totalChildren")
							label(for="total-children") Total Children (10 and under)

				.row(v-show="form.amAttending")
					.col.s12
						.input-field
							v-icon(prefix="") local_phone
							v-text-input#phone(name="phone" v-model="form.phone")
							label(for="phone") Contact Phone Number
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
	created() {
		document.title = `RSVP | ${process.env.SITE_NAME}`;
	},
	data() {
		return {
			message: '',
			success: false,
			form: {
				partyName: '',
				totalAdults: '',
				totalChildren: '',
				amAttending: false,
			},
		};
	},
	computed: {
		messageClass() {
			return this.success === false ? 'error' : 'success';
		},
	},
	methods: {
		submit() {
			this.message = '';
			this.success = false;

			if (
				!this.form.partyName
			) {
				this.message = 'You must fill in all fields';
				return false;
			}

			if (this.form.amAttending) {
				if (!this.form.totalAdults) {
					this.message = 'Please specify the number of adults in your party';
					return false;
				}

				if (!this.form.phone) {
					this.message = 'Please specify your phone number.';
					return false;
				}
			}

			// set default values
			this.form.totalAdults = this.form.totalAdults || 0;
			this.form.totalChildren = this.form.totalChildren || 0;
			this.form.phone = this.form.phone || '';

			// submit...
			this.$http.post(`${process.env.RSVP_BASE_URL}/api/rsvps`, this.form)
				.then(() => {
					// reset form
					this.form.totalChildren = '';
					this.form.totalAdults = '';
					this.form.partyName = '';
					this.form.phone = '';
					this.form.amAttending = false;

					this.success = true;
					this.message = 'RSVP Successful!';
				})
				.catch((err) => {
					this.message = err.bodyText || err.body;
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

	.attending {
		padding-bottom: 15px;

		.material-icons {
			font-size: 2rem;
		}

		.switch.left {
			label {
				font-size: 14px !important;
			}
		}
	}
}

.container {
	margin-top: 50px;
}

.message {
	border-radius: 5px;
	font-weight: bold;
	padding: 10px;
	color: rgba(0, 0, 0, .87);
	border: 1px solid #000;
}

.error {
	border-color: red;
}

.success {
	border-color: green;
}
</style>
