<template>
	<div class="main">
		<div class="bottom">
			<div class="left">
				<ul>
					<!-- <li><span>首页</span></li>
					<li><span>关于我们</span></li>
					<li><span>活动集锦</span></li>
					<li><span>首页</span></li>
					<li><span>首页</span></li>
					<li><span>首页</span></li> -->
					<router-link to="/index" tag='li'>首页</router-link>
					<router-link to="/about" tag='li'>关于我们</router-link>
					<router-link to="/activity" tag='li'>活动集锦</router-link>
					<router-link to="/news" tag='li'>最新资讯</router-link>
					<router-link to="/coach" tag='li'>高球教练</router-link>
					<router-link to="/join" tag='li'>加入我们</router-link>
				</ul>
				<div class="phone">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-dianhua"></use>
					</svg>
					<span>020-22043858</span>
					<svg class="icon last" aria-hidden="true">
						<use xlink:href="#icon-shouji"></use>
					</svg>
					<span>188 5656 3559<span class="name">(李先生)</span></span>
				</div>
				<p>Copyright   2006-2017广东普高会体育发展有限公司版权所有 粤ICP备12053576号-4</p>
				<p>地址：广州天河区马场路赛马场内七十二杆高尔夫练习场二楼普高会</p>
			</div>
			<div class="right">
				<!-- <figure>
					<img src="../../../static/images/pgh.png" alt="普高会微信公众号" title="扫一扫关注">
					<p>普高会微信公众号</p>
				</figure> -->
				<div class="img">
					<img src="../../../static/images/pgh.png" alt="普高会微信公众号" title="扫一扫关注">
					<p>普高会微信公众号</p>
				</div>
				<!-- <figure>
					<img src="../../../static/images/gongsi.png" alt="">
					<p>公司微信公众号</p>
				</figure> -->
			</div>
		</div>
	</div>
		
</template>

<style lang="less" scoped>
	@import '../../assets/CSS/main.less';

	.main {
		background: #323232;
		.bottom {
			max-width: @max-width;
			margin: 0 auto;
			padding: 40px 0;
			display: flex;
			justify-content: space-between;
			.left {
				color: #989898;
				ul {
					display: flex;
					li {
						cursor: pointer;
						padding: 0 25px;
						border-left: 1px solid #989898;
						transition: all .3s ease-out;
						&:first-child {
							padding-left: 0;
							border-left: none;
						}
						&:hover {
							color: #fff;
						}
					}
				}
				.phone {
					margin: 20px 0;
					font-weight: bold;
					span {
						font-size: 20px;
						.name {
							font-size: 16px;
							font-weight: 100;
							margin-left: 10px;
						}
					}
					.icon {
						font-size: 25px;
						margin-right: 10px;
					}
					.last {
						margin-left: 40px;
					}
				}
			}
			.right {
				display: flex;
				flex-flow: row nowrap;
				border-left: 2px solid #989898;
				.img {
					padding: 0 15%;
					margin: 0;
					text-align: center;
					color: #989898;
					max-width: 200px;
					overflow: hidden;
					img {
						width: 100%;
					}
				}
			}
		}
	}
</style>