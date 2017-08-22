<script>
export default {
	data() {
		return {
			tabs: [],
			activeTab: 0,
		};
	},
	methods: {
		setTab(index) {
			this.activeTab = index;
		},
	},
};
</script>

<style src="./sky-tabs.scss"></style>
<template src="./sky-tabs.html"></template>
