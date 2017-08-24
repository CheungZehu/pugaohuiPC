<template>
	<div>
		<nav-top></nav-top>
		<keep-alive>
		    <router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<bottom></bottom>
	</div>
	
</template>

<script>
	import NavTop from './Common/Nav'
	import Bottom from './Common/Bottom'

	export default {
		components: {
			NavTop, Bottom
		},
		// created: function () {
	 //      console.log(1)
	 //    },
	 //    mounted: function () {
	 //      console.log(2)
	 //    },
	 //    activated: function () {
	 //      console.log(3)
	 //    },
	 //    deactivated: function () {
	 //      console.log(4)
	 //    }


	}
</script>

