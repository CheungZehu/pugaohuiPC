<template>
	<div>
		<div class="content">
			<p class="title">{{title}}</p>
			<p class="text">{{text}}</p>
		</div>
		<div class="img">
			<img :src="src" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		props: ['src', 'title', 'text']
	}
</script>

<style lang="less">
	@import '../../assets/CSS/main.less';

	.address-item {
		margin: 0;
		background: #f2f2f2;
		box-sizing: border-box;
		overflow: hidden;
		width: 31.33%;
		margin: 0 3% 2% 0;
		&:nth-child(3n) {
			margin-right: 0;
		}
		.img {
			font-size: 0;
			overflow: hidden;
			img {
				width: 100%;
				transition: @transition;
				&:hover {
					transform: @transform;
				}
			}
		}
		.content {
			height: 180px;
			padding: 10px 20px;
			.title {
				color: #454545;
				font-size: 18px;
			}
			.text {
				color: #999;
			}
		}
	}
</style>