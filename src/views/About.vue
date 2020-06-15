<template>
  	<div class="about">
    	<h1>{{ titles[+lang] }}</h1>
  	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'About',
	data: () => ({
		titles: [
			'This is an about page',
			'Dies ist eine About-Seite'
		]
	}),
	computed: {
		...mapState([
			'lang'
		])
	}
}
</script>
