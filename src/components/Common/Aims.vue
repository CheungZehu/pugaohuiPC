<template>
	<div>
		<div class="img">
			<img :src="src" alt="">
		</div>
		
		<p>{{text}}</p>
	</div>
</template>

<script>
	export default {
		props: ['src', 'text']
	}
</script>

<style lang="less">
	@import '../../assets/CSS/main.less';

	.aims-item {
		width: 15%;
		.img {
			overflow: hidden;
			border-radius: 50%;
			img {
				width: 100%;
				border-radius: 50%;
				transition: @transition;
				&:hover {
					transform: @transform;
				}
			}
		}
			
		p {
			color: #666;
			text-align: center;
			padding: 0 10px;
		}
	}
</style>