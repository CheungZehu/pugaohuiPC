<template>
	<div>
		<div class="bg">
			<div class="img">
				<img src="../../../static/images/qiu.png" alt="">
			</div>
			<p class="title" :style="{ width: titleHeight + 'px' }">活动锦集  ACTIVE DIRECTORY</p>
		</div>
		<div class="activity-detail">
			<div class="top">
				<div class="position">
					<!-- <p> -->
						<span>当前位置：</span>
						<router-link to="/index" tag="span">首页</router-link>
						<span> > </span>
						<router-link to="/activity" tag="span">活动集锦</router-link>
						<span> > </span>
						<span>活动详情</span>
					<!-- </p> -->
				</div>
				<div class="title">
					<p class="text">{{activityDetail.title}}</p>
					<span class="time">{{activityDetail.showDate}}</span>
					<span class="author">{{activityDetail.author}}</span>
				</div>
			</div>
			<div class="content">
				<div class="img">
					<img src="../../../static/images/middle.png" alt="">
				</div>
				<div class="info">
					<p><span>报名截止：</span><span>{{activityDetail.signEndTime}}</span></p>
					<p><span>活动时间：</span><span>{{activityDetail.startTime}}</span></p>
					<p v-if="activityDetail.fee"><span>活动费用：</span><span>￥{{activityDetail.fee}}/人</span></p>
					<p><span>活动地点：</span><span>{{activityDetail.place}}</span></p>
					<p><span>活动人数：</span><span>已有7人报名（上限500人）</span></p>
					<p><span>活动状态：</span><span>报名中</span></p>
				</div>
				<div class="text" v-html="detailContent">
					<!-- <div></div>
					近两年内儿童行业迎来了快速的发展，儿童娱乐教育是次于游戏的非常有前景的应用行业之一；人工智能/AR/VR等技术都在儿童行业找到了落地的场景，并且推广迅速；新需求则催生了新的儿童娱乐教育产品，成为了教育界和技术界的宠儿。活动宗旨：联合儿童相关的优秀企业及机构，打造行业资源跨平台，推动联盟成员之间开展更多业态合作邀请单位：包括动漫IP，读物玩具，童星影视，机器人(19.950, 0.22, 1.12%)，VR/ AR， 游乐设施，旅游，等相关儿童娱乐产业主办方：广东省创投协会、中科招商、零壹金服、舜会资本、港粤资本、君泽君律师事务所等。拟出席嘉宾：楼海光：中科零壹文创加速器副总经理，零壹金服运营部总经理，专注创投圈社群建设和生态运维，资源组合者。肖泽云：中信证券(17.350, 0.07, 0.41%)投行部，从事投行和投资业务，专注教育体育和文化娱乐行业。张伟：舜会资本合伙人， 10年从业经验，擅长早期项目的孵化运作、商业模式构造。刘泽山：港粤资本创始人＆CEO、潮创会广州分会会长、深圳粤港董事，专注文创、儿童教育产业投资。吕和争：昊源集团-广州洪德文化传媒有限公司董事总经理，专注儿童影视领域投资，中国国际儿童电影节独家协办运营方。姚建丞：稀饭动漫创始人，拟打造一个儿童陪伴成长机制的IP动画剧集《小神兽阿力》。李巧环：上境留学：副总经理。海外升学、海外教育合作办学机构。王莉瑄 野果空间总经理，专注环境自然教育，孵化器服务。郑卉雯：早期教育研究会付秘书长、从教20余年，多家教育机构创始人。需将教育与健康结二为一，为早教从业者搭建技术、服务、师资平台。杨雪茹：童星汇创始人，中国儿童文娱成长生态圈。尹志东：广东经鼎原创科技有限公司董事长（首席战略官），泛娱乐人工智能（文童教育）儿童娱乐游乐园产业链合作推广。陈凯博：广东经鼎原创科技有限公司总经理。泛娱乐人工智能（文童教育）儿童娱乐游乐园产业链合作推广。 -->
				</div>
				<div class="code">
					<p class="baoming">活动报名</p>
					<div class="qrcontent">
						<div id="qrcode"></div>
					</div>
					
					<p>扫描活动二维码即可参与报名</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import api from '../../api/api'
	import QRCode from 'qrcodejs2'

	export default {
		data () {
			return {
				titleHeight: 0,
				activityDetail: {},
				detailContent: {},
			}
		},
		created () {
			this.title()
			this.getDetail()
			
		},
		mounted () {
			window.onresize = () => {
				this.title()
			}
			this.qrCode()
		},
		methods: {
			qrCode () {
				console.log(document.getElementById('qrcode'))
				let qrcode = new QRCode(document.getElementById('qrcode'), {
					width: 150,
					height: 150,
					text: `http://wfx.wego168.com/wx7d3c9e2d28015f9c/wechat/newsBase/activity!accredit.action?oauthTypeBase=false&id=${this.$route.params.id}`
				})
			},
			title () {
				if (window.innerWidth <= 1024) {
					this.titleHeight = window.innerWidth - 30
				} else {
					this.titleHeight = 1024
				}
			},
			getDetail () {
				api.ActivityDetail({id: this.$route.params.id}).then(res => {
					if (res.data) {
						console.log(res.data)
						this.activityDetail = res.data.list[0]
						this.detailContent = this.activityDetail.content
						if (/<img style="display:inline;/.test(this.detailContent)) {
							var strs = this.detailContent.split('<img style="display:inline;"')
							var text = '<img style="display:inline;position:relative;left:50%;transform:translate(-50%,0)"'
							for (var i = 0; i < strs.length - 1; i++) {
								strs[i] += text
							}
							function append (oVal, nVal) {
								return oVal + nVal
							}
							this.detailContent = strs.reduce(append)
						}
					}
				})
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
	.activity-detail {
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
				}
				.time {
					margin-right: 5px;
				}
			}
		}
		.content {
			.img {
				text-align: center;
				padding: 20px 0;
			}
			.info {
				p {
					span:first-child {
						color: #666;
					}
					span:last-child {
						color: #333;
					}
				}
			}
			.text {
				padding: 20px 0;
			}
			.code {
				border-top: 1px solid #ddd;
				text-align: center;
				position: relative;
				padding-bottom: 20px;
				.baoming {
					position: absolute;
					top: -30px;
					left: 50%;
					transform: translate(-50%, 0);
					background: #fff;
					font-size: 18px;
					padding: 0 20px;
				}
				.qrcontent {
					display: flex;
					padding-top: 20px;
				}
				img {
					padding-top: 20px;
				}
			}
		}
	}
	#qrcode {
		margin: 0 auto;
		img {
			text-align: center;
		}
	}
</style>