<template>
	<div>
		<div class="bg">
			<div class="img">
				<img src="../../../static/images/qiu.png" alt="">
			</div>
			<p class="title" :style="{ width: titleHeight + 'px' }">高球教练  GOLF COACHS</p>
		</div>
		<div class="coach">
			<div class="content">
				<router-link tag="div" class="coachs-title" v-for="item in coachData" :key="item.id" :to="{name: 'CoachDetail', params: {id: item.id}}">
					<coachs-title :title="item.title" :src="img + item.imgUrl" :intro="item.shortContent" :cHeight="cHeight"></coachs-title>
				</router-link>
				<!-- <div class="coachs-title" v-for="item in coachData" :key="item.id">
					<coachs-title :title="item.title" :src="img + item.imgUrl" :intro="item.shortContent" :cHeight="cHeight"></coachs-title>
				</div> -->
			</div>
			<div class="pager">
				<pager :total="total" :size='size' @pageNumber="getCoach"></pager>
			</div>	
		</div>

	</div>
</template>

<script>
  import CoachsTitle from '../Common/CoachsTitle'
  import Pager from '../Common/Pager'
  import api from '../../api/api'

	export default {
		components: {
			CoachsTitle, Pager
		},
		data () {
			return {
				titleHeight: 0,
				curPage: 0,
				total: 0,
				size: 0,
				coachData: [],
				cHeight: 0,
				img: 'http://s1.wego168.com/imgApp',
			}
		},
		created () {
			this.title()
			this.getCoach()
			document.body.scrollTop = 0
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
					this.cHeight = window.innerWidth/5
				} else {
					this.titleHeight = 1024
					this.cHeight = 200
				}
			},
			getCoach (val) {
				this.curPage = val || 1
				let params = { pageNumber: val || 1, type: 'JL'}
				api.getNews(params).then(res => {
					if (res.data) {
						document.body.scrollTop = 0
						this.total = res.data.fullListSize
						this.size = res.data.objectsPerPage
						this.coachData = res.data.list

					}
				})
			},
			// getNews (val) {
			// 	this.curPage = val || 1
			// 	let params = { pageNumber: val || 1, type: 'News'}
			// 	api.getNews(params).then(res => {
			// 		if (res.data) {
			// 			// console.log(res.data)
			// 			document.body.scrollTop = 0
			// 			this.total = res.data.fullListSize
			// 			this.size = res.data.objectsPerPage
			// 			this.newsData = res.data.list
			// 		}
			// 	})
			// },
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
	.coach {
		background: #f3f3f3;
		padding: 50px 10px;
		.content {
			max-width: @max-width;
			margin: 0 auto;
			display: flex;
			flex-flow: row wrap;
		}
		.pager {
			text-align: center;
			padding-top: 20px;
		}	
	}
</style>