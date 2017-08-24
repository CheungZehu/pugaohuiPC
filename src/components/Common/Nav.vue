<template>
	<div class="nav">
		<div class="img">
			<img src="../../../static/images/logo1.png" alt="">
		</div>
		
		<ul>
			<router-link to="/index" tag='li'>首页</router-link>
			<router-link to="/about" tag='li'>关于我们</router-link>
			<router-link to="/activity" tag='li'>活动集锦</router-link>
			<router-link to="/news" tag='li'>最新资讯</router-link>
			<router-link to="/coach" tag='li'>高球教练</router-link>
			<router-link to="/join" tag='li'>加入我们</router-link>
			<!-- <li>首页</li>
			<li>关于我们</li>
			<li>活动集锦</li>
			<li>最新资讯</li>
			<li>高球教练</li>
			<li>加入我们</li> -->
		</ul>
		<p class="lang">
			<!-- <span @click="lang('zh')" :class="{active: status}">中文</span>
			<span class="shu"></span>
			<span @click="lang('en')" :class="{active: !status}">EN</span> -->

			<span :class="{active: status}">中文</span>
			<span class="shu"></span>
			<span @click="more" :class="{active: !status}">EN</span>
		</p>
		<!-- img -->
	</div>
</template>

<script>
	export default {
		data () {
			return {
				status: true
			}
		},
		methods: {
			lang (val) {
				// console.log(val)
				if (this.$i18n.locale !== val) {
					this.$i18n.locale = val
					this.status = !this.status
				}
			},
			more () {
				this.$router.push('/index/more')
			},
		}
	}
</script>

<style lang="less" scoped>
	.nav {
		max-width: 1024px;
		height: 100px;
		margin: 0 auto;
		padding: 0 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.img {
			height: 80px;
			/*padding: 10px 0;*/
			img {
				height: 100%;
				/*width: 100%;*/
			}
		}
		ul {
			display: flex;
			width: 65%;
			justify-content: space-between;
			padding: 0;
			li {
				color: #000;
				font-size: 16px;
				cursor: pointer;
				padding: 10px;
				border-radius: 20px;
				text-align: center;
				width: 70px;
				transition: all .3s ease-out;
				&:hover {
					color: #fff !important;
					background: #00377e;
				}
			}
		}
		.lang {
			display: inline-flex;
			align-items: center;
			span {
				transition: all .3s;
				&:hover {
					color: #00377e;
					cursor: pointer;
				}
			}
			.active {
				color: #00377e;
				font-weight: bold;
			}
			.shu {
				margin: 0 15px;
				width: 3px;
				height: 18px;
				background: #898989;
				display: inline-block;
			}
		}
	}
	.router-link-active {
		color: #fff !important;
		background: #00377e;

	}
</style>