<template>
	<div>
		<div class="bg">
			<div class="img">
				<img src="../../../static/images/join.png" alt="">
			</div>
			<div class="bottom" :style="{width: bottomWidth + 'px', height: bottomHeight + 'px'}"></div>
		</div>
		<div class="join">
			<div class="content">
				<p class="title">JOIN US / 加入我们</p>
				<p class="text">
					喜欢高尔夫吗？爱高尔夫吗？是否喜爱一路上那独一无二的风景？旅行中会不会遇到各种各样的问题但是却没有人在身边提供帮助？那就欢迎你加入进来，加入我们得到的会是全国各地驴友的帮助。游天下。不单只是旅游，还可以聊些别的，其实大部分都是一帮人在瞎聊，畅所欲言。认识更多的人，了解更多的事，欢乐大家分享，悲伤与你共同承担。 
					加入我们得到的会是全国各地驴友的帮助。游天下。不单只是旅游，还可以聊些别的，其实大部分都是一帮人在瞎聊，畅所欲言。认识更多的人，了解更多的事，欢乐大家分享，悲伤与你共同承担。
					还等什么？快来加入我们吧！
				</p>
				<div class="position-item">
					<p class="item-title">web前端工程师（2人）</p>
					<div class="item-text">
						<div class="text-title">
							<p>岗位描述：</p>
						</div>
						<div class="text-content">
							<p>1.参与项目的前端架构设计，编写合理的设计方案</p>
							<p>2.参与项目的编码，按照产品需求和技术需求实现，保障产品高效稳定运行岗位要求：</p>
						</div>
					</div>
					<div class="item-text">
						<div class="text-title">
							<p>岗位要求：</p>
						</div>
						<div class="text-content">
							<p>1. 精通 JavaScript、CSS、HTML 语义化标签</p>
							<p>2. 熟练掌握 jQuery、lodash 等常用辅助库</p>
							<p>3. 熟练掌握 Grunt、Gulp、Webpack、FIS 其中任意一项构建工具的使用和配置</p>
							<p>4. 熟练掌握 Chrome 开发者工具，至少掌握一种抓包工具如 Fiddler 或 Charles</p>
							<p>5. 了解并实践过 Angular、Vue、React 类框架</p>
							<p>6. 熟悉 HTTP 协议及缓存，了解基本的浏览器渲染及网络传输过程</p>
							<p>7. 至少掌握一门后端语言，如 Java、Python、Ruby，了解服务端编程</p>
							<p>8. 具备良好的学习能力和问题分析能力，关注社区动态及技术发展趋势，参与开源项目维护者优先</p>
							<p>9. 有良好的产品意识，关注移动互联网</p>
							<p>10.熟悉 Node.js 的优先</p>
						</div>
					</div>
				</div>
				<div class="position-item">
					<p class="item-title">web前端工程师（2人）</p>
					<div class="item-text">
						<div class="text-title">
							<p>岗位描述：</p>
						</div>
						<div class="text-content">
							<p>1.参与项目的前端架构设计，编写合理的设计方案</p>
							<p>2.参与项目的编码，按照产品需求和技术需求实现，保障产品高效稳定运行岗位要求：</p>
						</div>
					</div>
					<div class="item-text">
						<div class="text-title">
							<p>岗位要求：</p>
						</div>
						<div class="text-content">
							<p>1. 精通 JavaScript、CSS、HTML 语义化标签</p>
							<p>2. 熟练掌握 jQuery、lodash 等常用辅助库</p>
							<p>3. 熟练掌握 Grunt、Gulp、Webpack、FIS 其中任意一项构建工具的使用和配置</p>
							<p>4. 熟练掌握 Chrome 开发者工具，至少掌握一种抓包工具如 Fiddler 或 Charles</p>
							<p>5. 了解并实践过 Angular、Vue、React 类框架</p>
							<p>6. 熟悉 HTTP 协议及缓存，了解基本的浏览器渲染及网络传输过程</p>
							<p>7. 至少掌握一门后端语言，如 Java、Python、Ruby，了解服务端编程</p>
							<p>8. 具备良好的学习能力和问题分析能力，关注社区动态及技术发展趋势，参与开源项目维护者优先</p>
							<p>9. 有良好的产品意识，关注移动互联网</p>
							<p>10.熟悉 Node.js 的优先</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				bottomWidth: 0,
				bottomHeight: 0,
			}
		},
		created () {
			this.bottom()
			document.body.scrollTop = 0
		},
		mounted () {
			window.onresize = () => {
				this.bottom()
			}
		},
		methods: {
			bottom () {
				if (window.innerWidth <= 1024) {
					this.bottomWidth = window.innerWidth
					this.bottomHeight = window.innerWidth/15
				} else {
					this.bottomWidth = 1024
					this.bottomHeight = 80
				}
			}
		}
	}
</script>

<style lang="less">
@import '../../assets/CSS/main.less';

	.bg {
		position: relative;
		.img {
			line-height: 0;
			img {
				width: 100%;
			}
		}
		.bottom {
			width: @max-width;
			height: 80px;
			background: #fff;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}
	.join {
		background: #f9f9f9;
		padding-bottom: 50px;
		.content {
			max-width: @max-width;
			margin: 0 auto;
			background: #fff;
			position: relative;

			.title {
				text-align: center;
				margin: -10px 0 0 0;
				font-size: 24px;
				position: absolute;
				top: -30px;
				left: 50%;
				transform: translate(-50%, 0);
				white-space: nowrap;
			}
			.text {
				padding: 0 50px;
				text-indent: 2em;
    		text-align: justify;
			}
			.position-item {
				padding: 20px 50px 0 50px;
				&:last-child {
					padding-bottom: 30px;
				}
				.item-title {
					background: #f8f8f8;
					padding: 10px;
					font-size: 18px;
					font-weight: bold;
				}
				.item-text {
					.text-title {
						font-weight:bold;
					}
				}
			}
		}
	}
</style>