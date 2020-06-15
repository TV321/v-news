<template>
  	<div class="home">
    	<img alt="Vue logo" src="../assets/logo.png">
    	<Caro1 />
		<Caro2 />
  	</div>
</template>

<script>

import Caro1 from '@/components/Caro1.vue'
import Caro2 from '@/components/Caro2.vue'

export default {
  	name: 'Home',
  	components: {
		Caro1,
		Caro2
  	}
}
</script>
