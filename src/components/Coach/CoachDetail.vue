<template>
	<div>
		<div class="bg">
			<div class="img">
				<img src="../../../static/images/qiu.png" alt="">
			</div>
			<p class="title" :style="{ width: titleHeight + 'px' }">最新资讯  NEWS AND INFORMATION</p>
		</div>
		<div class="coach-detail">
			<div class="top">
				<!-- <div class="position">
					<span>当前位置：</span>
					<router-link to="/index" tag="span">首页</router-link>
					<span> > </span>
					<router-link to="/news" tag="span">最新资讯</router-link>
					<span> > </span>
					<span>新闻详情</span>
				</div> -->
				<div class="title">
					<p class="text">{{titleDetail.title}}</p>
					<span class="time">时间：{{titleDetail.showDate}}</span>
					<span>来源：{{titleDetail.weixinName}}</span>
					<span class="author" v-if="titleDetail.author">作者：{{titleDetail.author}}</span>
					<!-- <span>点击：236次</span> -->
				</div>
			</div>
			<div class="content" v-html="newsDetail">
				<!-- 离比赛结束还有3分钟时，佛山籍球员霍锦楠利用个人能力长驱直入再进1球扩大领先优势。此时佛山维京只能放手一搏打起了超人战术，30秒便扳回一球，眼看就要绝杀扳平比分时，深圳队16号陈佳泽成功反击，结束了本场比赛，最终深圳碧波科技以3:1取得了国内五人足球历史上的第一个保级战胜利!
        涅磐重生，有幸保级的深圳碧波科技，将在全体队员的努力下、在各大赞助商的帮助下、在各路媒体的关注下、积极努力的按照健康的模式发展壮大。 -->
			</div>
		</div>
		<!-- <div class="btn">
			<p>上一篇：<span>中国体育彩漂天水旗舰店正式开业</span></p>
			<p>下一篇：<span>中国体育彩漂天水旗舰店正式开业</span></p>
		</div> -->
	</div>
</template>

<script>
	import api from '../../api/api'

	export default {
		data () {
			return {
				titleHeight: 0,
				titleDetail: {},
				newsDetail: {},
			}
		},
		created () {
			this.title()
			this.getNews()
		},
		mounted () {
			window.onresize = () => {
				this.title()
			}
		},
		methods: {
			title () {
				if (window.innerWidth <= 1024) {
					this.titleHeight = window.innerWidth - 30
				} else {
					this.titleHeight = 1024
				}
			},
			getNews () {
				api.getDetail({id: this.$route.params.id}).then(res => {
					if (res.data) {
						this.titleDetail = res.data
						this.newsDetail = this.titleDetail.content
						if (/<img style="display:inline;/.test(this.newsDetail)) {
							var strs = this.newsDetail.split('<img style="display:inline;"')
							var text = '<img style="display:inline;position:relative;left:50%;transform:translate(-50%,0)"'
							for (var i = 0; i < strs.length - 1; i++) {
								strs[i] += text
							}
							function append (oVal, nVal) {
								return oVal + nVal
							}
							this.newsDetail = strs.reduce(append)
						}
					}
					
				})
			}
		},
	}
</script>

<style lang="less" scoped>
	@import '../../assets/CSS/main.less';

	.bg {
		position: relative;
		.img {
			line-height: 0;
			img {
				width: 100%;
			}
		}
		p {
			margin: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: #fff;
			font-size: 45px;
			white-space: nowrap;
		}
	}
	.coach-detail {
		max-width: @max-width;
		margin: 0 auto;
		padding-top: 20px;
		.top {
			border-bottom: 1px dashed #999;
			padding-bottom: 10px;
			.position {
				border-bottom: 1px solid #ddd;
				padding-bottom: 5px;
				span {
					color: #666;
					&:not(first-child) {
						cursor: pointer;
					}
				}
			}
			.title {
				.text {
					font-size: 24px;
					color: #454545;
				}
				span {
					color: #999;
					margin-right: 10px;
				}
			}
		}
		.content {
			padding: 30px 0;
		}
	}
	.btn {
		max-width: @max-width;
		margin: 0 auto;
		color: #747474;
		p {
			span {
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
				
			}
		}
	}
</style>