<template>
	<div>
		<div class="img" :style="{height: cHeight + 'px'}">
			<img :src="src" alt="">
		</div>
		<div class="content">
			<p class="title">{{title}}</p>
			<p class="text">{{intro}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'src', 'intro', 'cHeight']
	}
</script>

<style lang="less">
	@import '../../assets/CSS/main.less';

	.coachs-title {
		cursor: pointer;
		box-sizing: border-box;
		overflow: hidden;
		width: 23.87%;
		margin: 0 1.5% 1.5% 0;
		position: relative;
		background: #f8f8f8;
		&:nth-child(4n) {
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
			.title {
				text-align: center;
				background: #e5e5e5;
				margin: 0;
				padding: 15px;
				position: relative;
				&:after {
					content: '';
					width: 0;
					height: 0;
					bottom: -9px;
					left: 50%;
					transform: translate(-50%, 0);
					position: absolute;
					border-left: 13px solid transparent;
					border-right: 13px solid transparent;
					border-top: 9px solid #e5e5e5;
				}
			}
			.text {
				background: #fff;
				padding: 30px 15px;
				margin: 0;
				line-height: 1.5;
				height: 120px;
			}
		}
	}
</style>