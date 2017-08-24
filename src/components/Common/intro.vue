<template>
	<div>
		<div class="img-box">
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

	.pic-item {
		margin: 0;
		background: #f2f2f2;
		box-sizing: border-box;
		overflow: hidden;
		width: 31.33%;
		margin: 0 3% 2% 0;
		&:nth-child(3n) {
			margin-right: 0;
		}
		.img-box {
			overflow: hidden;
			img {
				width: 100%;
				transition: @transition;
				&:hover {
					transform: @transform;
				}
			}
		}
		p {
			padding: 0 10px;
			height: 90px;
			color: #666;
		}
	}
</style>