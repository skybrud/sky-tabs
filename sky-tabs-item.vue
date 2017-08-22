<script>
	export default {
		name: 'sky-tabs-item',
		props: ['title'],
		mounted() {
			if (this.$parent.activeTab === 0) {
				this.$parent.activeTab = this._uid;
			}

			this.$parent.tabs.push({
				_uid: this._uid,
				title: this.title,
				content: this.$el.innerHTML,
			});

			this.$el.setAttribute('data-id', this._uid);
		},
	};
</script>

<template src="./sky-tabs-item.html"></template>
