<template lang="pug">
	.container.sidenav-offset
		.col.s12.left-align
			h3 Registry
			p 
				| Alexis and Erik are registed at MyRegistry.com.
			a.btn-large(href="https://www.myregistry.com/public/alexisanderik" target="_blank") View Registry

</template>

<script>
export default {
	name: 'vue-registry-page',
	created() {
		document.title = `Gift Registry | ${process.env.SITE_NAME}`;
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
</style>
