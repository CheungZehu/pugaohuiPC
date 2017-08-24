<template>
	<div>
		<div class="bg">
			<div class="img">
				<img src="../../../static/images/qiu.png" alt="">
			</div>
			<p class="title" :style="{ width: titleHeight + 'px' }">最新资讯  NEWS AND INFORMATION</p>
		</div>
		<div class="news-detail">
			<div class="top">
				<div class="position">
					<!-- <p> -->
						<span>当前位置：</span>
						<router-link to="/index" tag="span">首页</router-link>
						<span> > </span>
						<router-link to="/news" tag="span">最新资讯</router-link>
						<span> > </span>
						<span>新闻详情</span>
					<!-- </p> -->
				</div>
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
		<div class="btn">
			<p>上一篇：
				<!-- <span>{{prevData.title}}</span> -->
				<router-link @click.native="prev" v-if="prevData" tag="span" :to="{name: 'NewsDetail', params: {id: prevData.id}}">{{prevData.title}}</router-link>
				<!-- <router-link v-if="prevData" tag="span" :to="{name: 'NewsDetail', params: {id: prevData.id}}">{{prevData.title}}</router-link> -->
				<span v-else>没有了</span>
			</p>
			<p>下一篇：
				<router-link @click.native="next" v-if="nextData" tag="span" :key="nextData.id" :to="{name: 'NewsDetail', params: {id: nextData.id}}">{{nextData.title}}</router-link>
				<!-- <router-link @click.native="next1" v-if="nextData" tag="span" :to="{name: 'NewsDetail', params: {id: nextData.id}}">{{nextData.title}}</router-link> -->
				<!-- <span @click="next1" v-if="nextData">{{nextData.title}}</span> -->
				<span v-else>没有了</span>
			</p>
		</div>
	</div>
</template>

<script>
	import api from '../../api/api'
	import { mapActions, mapState } from 'vuex'


	export default {
		// props: ['curPage'],
		data () {
			return {
				titleHeight: 0,
				titleDetail: {},
				newsDetail: {},
				prevData: {},
				nextData: {},
				dataPN: {},
				dataIndex: 0,
				indexBtn: 0,
				nextBtn: false,
				nextData1: {},
				prevStatus: false,
				nextStatus: false,
				newsList: [],
				nextList: [],
				prevList: [],
				id: this.$route.params.id,
				ddd: 0,
			}
		},
		created () {
			this.title()
			this.getDetail()
			console.log(window.localStorage.getItem('pageNumber'))
			console.log(window.localStorage.getItem('pageTotal'))
		},
		computed: mapState({
				pageNumber: function (state) {
					let localData = parseInt(window.localStorage.getItem('pageNumber'))
					if (state.pageNumber === 0 && localData) {
						this.$store.commit('updatePageNumber', {page: localData})
						// this.updatePageNumber(this.pageNumber - 1)
					}
					return state.pageNumber
				},
				pageTotal: function (state) {
					let localData = parseInt(window.localStorage.getItem('pageTotal'))
					if (state.pageTotal === 0 && localData) {
						this.$store.commit('updatePageTotal', {total: localData})
					}
					return state.pageTotal
				},
			}),
		// },
		mounted () {
			window.onresize = () => {
				this.title()
			}
			this.timeNews()
			// this.nextTick(function () {
			//   this.timeNews()
			// })
		},
		watch: {
			'$route': ['getDetail', 'timeNews'],

		},
		methods: {
			...mapActions([
				'updatePageNumber'
			]),

			title () {
				if (window.innerWidth <= 1024) {
					this.titleHeight = window.innerWidth - 30
				} else {
					this.titleHeight = 1024
				}
			},
			getDetail () {
				api.getDetail({id: this.$route.params.id}).then(res => {
					if (res.data) {
						this.titleDetail = res.data
						this.newsDetail = this.titleDetail.content
						if (/<img style="display:inline;/.test(this.newsDetail)) {
							var strs = this.newsDetail.split('<img style="')
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
			},
			// timeIndex () {
			// 	setTimeout(() => {
			// 		this.getIndex()
			// 	})
			// },
			// getIndex () {
			// 	let params = { pageNumber: this.pageNumber, type: 'News'}
			// 	api.getNews(params).then(res => {
			// 		if (res.data) {
			// 			let data = res.data.list
			// 			data.map((item, index) => {
			// 				if (item.id === this.$route.params.id) {
			// 					this.ddd = index
			// 				}
			// 			})
			// 			console.log('ddd')
			// 			console.log(this.ddd)
			// 		}
			// 	})
			// },
			timeNews () {
				setTimeout(() => {
					this.getNews()
				})
			},
			getNews () {
				// console.log('调用')
				let params = { pageNumber: this.pageNumber, type: 'News'}
				api.getNews(params).then(res => {
					if (res.data) {
						this.newsList = res.data.list
						for (var i = 0; i < this.newsList.length; i++) {
							if (this.newsList[i].id === this.$route.params.id) {
								this.dataIndex = i
								// console.log(this.dataIndex)
							}
						}

						// 上
						if (this.dataIndex === 0 && this.pageNumber === 1) {
							// console.log('上00') 
							this.prevData = undefined
							this.prevStatus = false

						} else if (this.dataIndex === 0 && this.pageNumber > 1) {
							// console.log('上01')
							api.getNews({ pageNumber: this.pageNumber - 1, type: 'News' }).then(res => {
								if (res.data) {
									this.prevList = res.data.list
									this.prevData = this.prevList[this.prevList.length - 1]
									this.prevStatus = true
								}
							})
						} else if (this.dataIndex > 0) {
							// console.log('上11')
							this.prevData = this.newsList[this.dataIndex - 1]
							this.prevStatus = false
						}

						// 下
						if (this.dataIndex === this.newsList.length - 1 && this.pageNumber === this.pageTotal) {
							// console.log('下04') 
							this.nextData = undefined
							this.nextStatus = false	

						} else if (this.dataIndex === this.newsList.length - 1 && this.pageNumber < this.pageTotal) {
							// console.log('下14')
							api.getNews({ pageNumber: this.pageNumber + 1, type: 'News' }).then(res => {
								if (res.data) {
									this.nextList = res.data.list
									this.nextData = res.data.list[0]
									this.nextStatus = true	
								}
							})
						} else if (this.dataIndex < this.newsList.length - 1) {
							// console.log('下11')
							this.nextData = this.newsList[this.dataIndex + 1]
							this.nextStatus = false	
						}
					}
				})
			},
			prev () {
				if (this.prevStatus === true) {
					// console.log('----')
					this.updatePageNumber(this.pageNumber - 1)
				} 
			},
			next () {
				if (this.nextStatus === true) {
					// console.log('++++')
					this.updatePageNumber(this.pageNumber + 1)
				} 

			},
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
	.news-detail {
		max-width: @max-width;
		margin: 0 auto;
		padding: 20px 10px;
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