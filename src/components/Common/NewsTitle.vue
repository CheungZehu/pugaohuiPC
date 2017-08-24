<template>
	<div>
		<div class="content">
			<p class="title">{{title}}</p>
			<p class="time">2017.08.08</p>
			<p class="text">{{intro}}</p>
		</div>
			
		<div class="img" :style="{height: nHeight + 'px'}">
			<!-- <img src="../../../static/images/coach.png" alt=""> -->
			<img :src="src" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'time', 'intro', 'src', 'nHeight']
	}
</script>

<style lang="less">
	@import '../../assets/CSS/main.less';

	.news-title {
		cursor: pointer;
		box-sizing: border-box;
		overflow: hidden;
		width: 32.3%;
		margin: 0 1.5% 1.5% 0;
		position: relative;
		background: #f8f8f8;
		&:nth-child(3n) {
			margin-right: 0;
		}
		.content {
			padding: 0 10px;
			.title {
				font-size: 18px;
				color: #454545;
				text-align: justify;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				height: 55px;
			}
			.time {
				font-size: 14px;
				color: #888;
				margin-bottom: 1.5em;
			}
			.text {
				color: #999;
				margin-bottom: 2em;
				text-align: justify;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
				height: 70px;
			}
		}
		.img {
			overflow: hidden;
			img {
				width: 100%;
				transition: @transition;
				&:hover {
					transform: @transform;
				}
			}
		}
	}
</style>