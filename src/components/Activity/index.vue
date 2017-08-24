<template>
	<div>
		<div class="bg">
			<div class="img">
				<img src="../../../static/images/qiu.png" alt="">
			</div>
			<p class="title" :style="{ width: titleHeight + 'px' }">活动锦集  ACTIVE DIRECTORY</p>
		</div>
		<div class="activity">
			<div class="activity-content">
				<router-link tag="div" class="graphic-item" v-for="item in ActivityData" :key="item.id" :to="{name: 'ActivityDetail', params: {id: item.id}}" @click.native="aa(item.id)">
					<graphic :title="item.title" :imgUrl="img + item.imgUrl" :time="item.startTime" :status="item.signMsg" :iHeight="iHeight"></graphic>
				</router-link>
<!-- 				<router-link tag="div" to="/activity/activitydetail" class="graphic-item">
					<graphic></graphic>
				</router-link>
				<router-link tag="div" to="/activity/activitydetail" class="graphic-item">
					<graphic></graphic>
				</router-link>
				<router-link tag="div" to="/activity/activitydetail" class="graphic-item">
					<graphic></graphic>
				</router-link>
				<router-link tag="div" to="/activity/activitydetail" class="graphic-item">
					<graphic></graphic>
				</router-link>
				<router-link tag="div" to="/activity/activitydetail" class="graphic-item">
					<graphic></graphic>
				</router-link> -->
			</div>
			<div class="pager">
				<pager :total="total" :size="size" @pageNumber="getActivityList" ></pager>
			</div>
		</div>
	</div>
</template>

<script>
  import Graphic from '../Common/Graphic'
  import Pager from '../Common/Pager'
  import api from '../../api/api'

	export default {
		components: {
			Graphic, Pager
		},
		data () {
			return {
				titleHeight: 0,
				img: 'http://s1.wego168.com/imgApp',
				ActivityData: [],
				curPage: 1,
				total: 0,
				size: 0,
				iHeight: 0,
			}
		},
		created () {
			this.title()
			this.getActivityList()
			this.imgHeight()
			document.body.scrollTop = 0
		},
		mounted () {
			window.onresize = () => {
				this.title()
				this.imgHeight()
			}
		},
		activated () {
			document.body.scrollTop = 0
		},
		methods: {
			title () {
				if (window.innerWidth <= 1024) {
					this.titleHeight = window.innerWidth - 30
				} else {
					this.titleHeight = 1024
				}
			},
			getActivityList (val) {
				this.curPage = val
				let params = { pageNumber: val || 1, num: 9 }
				api.ActivityList(params).then(res => {
					if (res.data) {
						console.log(res.data)
						document.body.scrollTop = 0
						this.total = res.data.fullListSize
						this.size = res.data.pageSize
						this.ActivityData = res.data.list
						// window.body.scrollTop = 0
					}
				})
			},
			imgHeight () {
				if (window.innerWidth <= 1000) {
					this.iHeight = window.innerWidth/5
				} else if (window.innerWidth > 1000) {
					this.iHeight = 200
				}
			},
			aa (id) {
				console.log(id)
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
	.activity {
		background: #f3f3f3;
		.activity-content {
			max-width: @max-width;
			margin: 0 auto;
			padding: 60px 10px;
			display: flex;
			flex-flow: row wrap;
		}
		.pager {
			text-align: center;
			padding-bottom: 80px;
		}
	}
</style>