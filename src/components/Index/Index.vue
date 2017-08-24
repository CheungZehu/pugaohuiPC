<template>
	<div>
		<!-- <img src="../../../static/images/lunbo.png" alt=""> -->
		<div class="carousel">
			<el-carousel :height="height">
				<el-carousel-item v-for="item in imgList" :key="item">
					<!-- <h3>{{item}}</h3> -->
					<img class="carou" :src="item" alt="">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="main">

			<div class="about">
				<p class="title">ABOUT / 公司简介</p>
				<p class="title-text">广东普高会体育发展有限公司简称“普高会”PGH，是一个普及高尔夫文化的商务社交平台。秉持“倡导健康文化运动、宣扬高尔夫精神”的理念，旨在建立一个以广东为中心并辐射全国地区的高尔夫球人际生态平台， 为商协会、校友会、高尔夫球队、银行金融机构等组织提供聚会、练球、商务路演、组织球队、比赛等活动，宣传和普及高尔夫运动，以球会友，在享受健康快乐之时，促进大家交流整合，增进友谊，推动高尔夫慈善事业，并在此基础上创造更广泛的合作平台。
				</p>
				<ul>
					<li>
						<svg class="icon" aria-hidden="true">
						    <use xlink:href="#icon-zongzhi"></use>
						</svg>
						<span class="name">宗旨</span>
						<span class="text">普及高尔夫的商务平台。</span>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
						    <use xlink:href="#icon-linian"></use>
						</svg>
						<span class="name">理念</span>
						<span class="text">倡导健康生活运动， 宣扬高尔夫精神。</span>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
						    <use xlink:href="#icon-yuanjing"></use>
						</svg>
						<span class="name">愿景</span>
						<span class="text">打造高尔夫行业标杆</span>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
						    <use xlink:href="#icon-dingwei"></use>
						</svg>
						<span class="name">定位</span>
						<span class="text">1000万企业家，5年以后 普及3亿中产阶级。</span>
					</li>
				</ul>
			</div>

			<div class="activity">
				<div class="content">
					<p class="title">ACTIVITIES / 最新活动</p>
					<div class="graphic">
						<router-link tag="div" class="graphic-item" v-for="item in Activity" :key="item.id" :to="{name: 'ActivityDetail', params: {id: item.id}}">
							<graphic :title="item.title" :imgUrl="img + item.imgUrl" :time="item.startTime" :status="item.signMsg" :iHeight="iHeight"></graphic>
						</router-link>
					</div>
					<p class="button">
						<router-link tag="span" to="/activity">查看更多</router-link>
					</p>
				</div>
			</div>
			<div class="news">
				<p class="title">NEWS CENTER / 新闻资讯</p>
				<div class="news-item">
					<router-link tag="div" class="news-title" v-for="item in News" :key="item.id" :to="{name: 'NewsDetail', params: {id: item.id}}">
						<news-title :title="item.title" :time="item.createTime" :intro="item.introInfo" :src="img + item.thumbnailUrl" :nHeight="nHeight"></news-title>
					</router-link>
				</div>
				<p class="button">
					<router-link tag="span" to="/news">查看更多</router-link>
				</p>
			</div>
			<div class="coachs">
				<div class="content">
					<p class="title">OUR COACHS / 我们的教练</p>
					<div class="coachs-item">
						<div class="coachs-title" v-for="item in Coach" :key="item.id">
							<coachs-title :title="item.title" :src="img + item.imgurl" :intro="item.introInfo" :cHeight="cHeight"></coachs-title>
						</div>
						
						<!-- <router-link tag="div" to="/coach" class="coachs-title">
							<coachs-title></coachs-title>
						</router-link> -->
					</div>
					<p class="button">
					<router-link tag="span" to="/coach">查看更多</router-link>
				</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import api from '../../api/api'
	import Graphic from '../Common/Graphic'
	import NewsTitle from '../Common/NewsTitle'
	import CoachsTitle from '../Common/CoachsTitle'

	export default {
		components: {
			Graphic, NewsTitle, CoachsTitle
		},
		data () {
			return {
				Imgs: [
					'../../../static/images/lunbo.png',
					'../../../static/images/lunbo.png',
					'../../../static/images/lunbo.png',
					'../../../static/images/lunbo.png',
					'../../../static/images/lunbo.png',
				],
				height: '',
				clientWidth: 0,
				img: 'http://s1.wego168.com/imgApp',
				imgList: [],
				Activity: [],
				News: [],
				Coach: [],
				iHeight: 0,
				nHeight: 0,
				cHeight: 0,
			}
		},
		created () {
			this.getIndexCarousel()
			this.getActivityList()
			this.imgHeight()
			this.getNews()
			document.body.scrollTop = 0
		},

		mounted () {
			window.onresize = () => {
				this.offset()
				this.imgHeight()
			}
		},
		methods: {
			offset () {
				let img = document.querySelector('.carou')
				if (img.offsetHeight > 599) {
					this.height = '600px'
				} else {
					this.height = img.offsetHeight + 'px'
				}
				
			},
			getIndexCarousel () {
				api.getCarousel({ categoryId: 'indexPC' }).then(res => {
					if (res.data) {
						console.log(res.data)
						let ImgData = res.data
						ImgData.map(item => {
							this.imgList.push(this.img + item.path)
						})
						if (this.imgList.length > 0) {
							setTimeout(() => {
								this.offset()
							}, 500)
						}
						// setTimeout(() => {
						// 	this.offset()
						// }, 500)
					}
				})
			},
			getActivityList () {
				api.ActivityList({pageNumber: 1}).then(res => {
					if (res.data) {
						// console.log(res.data)
						this.Activity = res.data.list.slice(0, 6)
						// console.log(this.Activity)
					}
				})
			},
			imgHeight () {
				if (window.innerWidth <= 1024) {
					this.iHeight = window.innerWidth/5
					this.nHeight = window.innerWidth/5
					this.cHeight = window.innerWidth/5
				} else if (window.innerWidth > 1024) {
					this.iHeight = 200
					this.nHeight = 200
					this.cHeight = 200
				}
			},
			getNews () {
				api.getIndexNews().then(res => {
					if (res.data) {
						console.log(res.data)
						let objData = res.data
						objData.map(item => {
							switch (item.code) {
								case 'News':
									this.News = item.newsList.slice(0, 3)
									break
								case 'JL':
									this.Coach = item.newsList.slice(0, 4)
									break
								default:
							}
						})
					}
				})
			},
		},
	}
</script>

<style lang="less" scoped>
@import '../../assets/CSS/main.less';
	.button {
		text-align: center;
		margin-top: 30px;
		span {
			padding: 5px 15px;
			border: 1px solid #7b8ba5;
			border-radius: 20px;
			cursor: pointer;
			&:hover {
				background: #7b8ba5;
				color: #fff;
			}
		}
	}
	.carousel {
  	.el-carousel__item {
			img {
				width: 100%;
			}
		}
	}
	.main {
		.about {
			padding: 20px 10px 30px 10px;
			max-width: @max-width;
			margin: 0 auto;
			.title {
				font-size: 24px;
				text-align: center;
			}
			.title-text {
				line-height: 1.8;
				text-indent: 2em;
    			text-align: justify;
			}
			ul {
				display: flex;
				justify-content: space-around;
				padding-top: 10px;
				li {
					display: flex;
					flex-direction: column;
					text-align: center;
					flex-basis: 160px;
					.iconfont {
						font-size: 80px;
						margin-bottom: 20px;
					}
					.icon {
						font-size: 90px;
						margin: 0 auto 20px auto;
					}
					.name {
						padding-bottom: 20px;
						margin: 0 auto 20px auto;
						border-bottom: 2px solid #999;
						color: #333;
						width: 60px;
						font-size: 18px;
					}
					.text {
						color: #808080;
						line-height: 1.5;
					}
				}
			}
		}
		.activity {
			background: #f3f3f3;
			.content {
				max-width: @max-width;
				margin: 0 auto;
				padding: 20px 10px 30px 10px;
				.title {
					font-size: 24px;
					text-align: center;
				}
				.graphic {
					display: flex;
					flex-flow: row wrap;
				}
				
			}
		}
		.news {
			padding: 20px 10px 30px 10px;
			max-width: @max-width;
			margin: 0 auto;
			.title {
				font-size: 24px;
				text-align: center;
			}
			.news-item {
				display: flex;
				flex-flow: row wrap;
			}
		}
		.coachs {
			background: #f3f3f3;
			.content {
				max-width: @max-width;
				margin: 0 auto;
				padding: 20px 10px 30px 10px;
				.title {
					font-size: 24px;
					text-align: center;
				}
				.coachs-item {
					display: flex;
					flex-flow: row wrap;
				}
			}
		}
	}
</style>