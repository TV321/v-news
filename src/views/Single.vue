<template>
  	<div class="single">
        <Header />
        <Description />
  	</div>
</template>

<script>
import Header from '@/components/single/Header.vue'
import Description from '@/components/single/Description.vue'
export default {
    name: 'Single',
  	components: {
        Header,
        Description
  	}
}
</script>