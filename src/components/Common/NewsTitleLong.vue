<template>
	<div class="news-item">
		<!-- <div class="img" :style="{width: iWidth + 'px', height: iHeight + 'px'}">
			<img :src="src" alt="">
		</div> -->
		<router-link tag="div" class="img" :to="{name: 'NewsDetail', params: {id: id}}" :style="{width: iWidth + 'px', height: iHeight + 'px'}">
			<img :src="src" alt="">
		</router-link>
		<div class="text">
			<!-- <p class="title">{{title}}</p> -->
			<router-link tag="p" class="title" :to="{name: 'NewsDetail', params: {id: id}}">{{title}}</router-link>
			<p class="info">
				<!-- <span class="type">[行业资讯]</span> -->
				<span class="time">时间：{{time}}</span>
				<!-- <span class="dianji">点击 1000</span> -->
			</p>
			<p class="content">{{intro}}</p>
			<router-link :to="{name: 'NewsDetail', params: {id: id}}" class="more">查看全文</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'time', 'intro', 'src', 'id', 'iWidth', 'iHeight']
	}
</script>

<style lang="less" scoped>
	@import '../../assets/CSS/main.less';

	.news-item {
		padding: 20px 0;
		border-bottom: 1px solid #d2d2d2;
		display: flex;
		.img {
			line-height: 0;
			overflow: hidden;
			flex-shrink: 0;
			width: 270px;
			height: 160px;
			img {
				width: 100%;
				transition: @transition;
				&:hover {
					transform: @transform;
					cursor: pointer;
				}
			}
		}
		.text {
			margin-left: 20px;
			.title {
				font-size: 18px;
				margin: 0;
				text-align: justify;
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
			    height: 50px;
			    transition: all .3s ease-out;
			    &:hover {
			    	cursor: pointer;
			    	text-decoration: underline;
			    	color: #00377e;
			    }
			}
			.info {
				font-size: 14px;
				color: #666;
				margin: 5px 0 0 0;
			}
			.content {
				color: #666;
				text-align: justify;
			    display: -webkit-box;
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
			    overflow: hidden;
			    margin: 10px 0;
			    height: 45px;
			}
			.more {
				text-decoration: none;
				color: #00377e;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>