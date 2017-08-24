<template>
	<div>
		<div class="bg">
			<div class="img">
				<img src="../../../static/images/qiu.png" alt="">
			</div>
			<p class="title" :style="{ width: titleHeight + 'px' }">最新资讯  NEWS AND INFORMATION</p>
		</div>
		<div class="news">
			<div class="left">
				<ul>
					<li :class="{active: type}" @click="changeType(0)">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-dongtai"></use>
						</svg>
						公司动态
					</li>
					<li :class="{active: !type}" @click="changeType(1)">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-dongtai"></use>
						</svg>
						行业咨讯
					</li>
				</ul>
			</div>
			<div class="right">
				<p class="title">最新资讯</p>
				<div class="news-content">
	<!-- 				<keep-alive>
						<news-title-long v-for="item in newsData" :key="item.id" :title="item.title" :time="item.createTime" :intro="item.shortContent" :src="img + item.thumbnailUrl" :id="item.id" :iWidth="iWidth" :iHeight="iHeight"></news-title-long>
					</keep-alive> -->
					<news-title-long v-for="item in newsData" :key="item.id" :title="item.title" :time="item.createTime" :intro="item.shortContent" :src="img + item.thumbnailUrl" :id="item.id" :iWidth="iWidth" :iHeight="iHeight" @click.native="setPage"></news-title-long>
				</div>
			</div>
		</div>
		<div class="pager">
			<pager :total="total" :size='size' @pageNumber="getNews"></pager>
		</div>
	</div>
</template>

<script>
  import NewsTitleLong from '../Common/NewsTitleLong'
  import Pager from '../Common/Pager'
  import api from '../../api/api'
  import { mapActions } from 'vuex'

	export default {
		name: 'New',
		components: {
			NewsTitleLong, Pager
		},
		data () {
			return {
				titleHeight: 0,
				newsData: [],
				img: 'http://s1.wego168.com/imgApp',
				iWidth: 0,
				iHeight: 0,
				total: 0,
				size: 0,
				type: true,
				curPage: 1,
				pageTotal: 0,
			}
		},
		created () {
			this.title()
			this.getNews()
			// setTimeout(() => {
			// 	this.setPage()
			// })
			
		},
		mounted () {
			window.onresize = () => {
				this.title()
			}
			// this.setPage()
		},
		activated () {
			document.body.scrollTop = 0
		},
		watch: {

		},
		methods: {
			...mapActions([
				'updatePageTotal', 'updatePageNumber'
			]),
			title () {
				if (window.innerWidth <= 1024) {
					this.titleHeight = window.innerWidth - 30
					this.iWidth = window.innerWidth/4
					this.iHeight = window.innerWidth/6.5
				} else {
					this.titleHeight = 1024
					this.iWidth = 270
					this.iHeight = 160
				}
			},
			getNews (val) {
				this.curPage = val || 1
				let params = { pageNumber: val || 1, type: 'News'}
				api.getNews(params).then(res => {
					if (res.data) {
						// console.log(res.data)
						document.body.scrollTop = 0
						this.total = res.data.fullListSize
						this.size = res.data.objectsPerPage
						this.newsData = res.data.list
					}
				})
			},
			changeType (val) {
				if (val) {
					this.type = false
				} else {
					this.type = true
				}
			},
			setPage () {
				// let pageTotal = 0
				if (0 < this.total%this.size < this.size) {
					this.pageTotal = parseInt(this.total/this.size) + 1
				} else {
					this.pageTotal = parseInt(this.total/this.size)
				}
				// console.log(this.pageTotal)
				this.updatePageTotal(this.pageTotal)
				this.updatePageNumber(this.curPage)
				// console.log(pageTotal)
				// let newsPage = { page: this.curPage, total: pageTotal}
				// localStorage.setItem('newsPage', JSON.stringify(newsPage))
				// localStorage.setItem('newsPage', this.curPage)
			}
		}
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
	.news {
		max-width: @max-width;
		margin: 0 auto;
		padding: 40px 10px;
		display: flex;
		.left {
			margin-right: 50px;
			flex-basis: 190px;
			ul {
				li {
					border-bottom: 1px solid #d2d2d2;
					padding: 15px 30px;
					cursor: pointer;
					transition: all .3s ease-out;
					&:before {
						margin-right: 10px;
					}
					&:hover {
						background: #00377e;
						color: #fff;
						.icon {
							color: #fff;
						}
					}
					.icon {
						color: #666;
					}
				}
				.active {
					color: #fff;
					background: #00377e;
					.icon {
						color: #fff;
					}
				}

			}
		}
		.right {
			width: 100%;
			.title {
				font-size: 20px;
				margin: 0;
				padding-bottom: 10px;
				border-bottom: 1px solid #d2d2d2;
			}
		}
	}
	.pager {
		text-align: center;
		padding-bottom: 50px;
	}
</style>