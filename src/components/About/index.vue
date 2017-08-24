<template>
	<div>
		<div class="bg">
			<div class="img">
				<img src="../../../static/images/about.png" alt="">
			</div>
			
			<div class="toast">
				<h1 class="title" :style="{ fontSize: titleSize + 'px' }">普高会</h1>
				<p class="text" :style="{ fontSize: textSize + 'px' }">您的商务社交平台!</p>
			</div>
		</div>
		<div class="about">
			<p class="title">ABOUT / 普高会简介</p>
			<p class="text">广东普高会体育发展有限公司简称“普高会”PGH，是一个普及高尔夫文化的商务社交平台。秉持“倡导健康文化运动、宣扬高尔夫精神”的理念，旨在建立一个以广东为中心并辐射全国地区的高尔夫球人际生态平台， 为商协会、校友会、高尔夫球队、银行金融机构等组织提供聚会、练球、商务路演、组织球队、比赛等活动，宣传和普及高尔夫运动，以球会友，在享受健康快乐之时，促进大家交流整合，增进友谊，推动高尔夫慈善事业，并在此基础上创造更广泛的合作平台。</p>
			<div class="pic">
				<div class="img-box">
					<img src="../../../static/images/about_1.png" alt="">
				</div>
				<div class="img-box">
					<img src="../../../static/images/about_2.png" alt="">
				</div>
				<div class="img-box">
					<img src="../../../static/images/about_3.png" alt="">
				</div>
				<div class="img-box">
					<img src="../../../static/images/about_4.png" alt="">
				</div>
				<!-- <img src="../../../static/images/about_1.png" alt="">
				<img src="../../../static/images/about_2.png" alt="">
				<img src="../../../static/images/about_3.png" alt="">
				<img src="../../../static/images/about_4.png" alt=""> -->
			</div>
		</div>
		<div class="culture">
			<div class="culture-item">
				<p class="title">CULTURE / 企业文化</p>
				<div class="text">
					<img src="../../../static/images/culture1.png" alt="">
				</div>
			</div>
		</div>
		<div class="introduction">
			<div class="top">
				<p>中国首个高尔夫文化的生态平台</p>
				<div class="white"></div>
			</div>
			<div class="content">
				<div class="text">
					<h4>普高会能提供什么？</h4>
					<p>1. 聚会点。线下增加会员情感、交流聚会点，倡导健康文化，以球会友;</p>
					<p>2. 练高尔夫球免费;</p>
					<p>3. 教学体验。不懂高尔夫的成员，可提供教练体验式指导服务；</p>
					<p>4. 商务路演、会议功能。具备40人左右路演、会议功能（可组织理事会及各种宣传会议）;</p>
					<p>5. 增值服务：对接普高会的增值服务，提供给商会成员，合作共赢。产品推广：商会成员的好产品，可提供到普高会的平台推广;</p>
					<p>6. 球队组建。协助商会组织高尔夫球队，增强商会影响力;</p>
				</div>
				<div class="pic">
					<div class="pic-item" v-for="(item, index) in pic" :key="item.index">
						<intro :src="img + item.src" :text="item.text"></intro>
					</div>
				</div>
				<div class="address">
					<h4>普高会高尔夫会所分布在哪里？</h4>
					<div class="address-content">
						<div class="address-item" v-for="(item, index) in address" :key="item.index">
							<address-item :src="img + item.src" :title="item.title" :text="item.text"></address-item>
						</div>
					</div>
				</div>
				<div class="aims">
					<h4>俱乐部分店目标？</h4>
					<p>计划在广州及佛山拓展5家分店，分别为：</p>
					<div class="aims-content">
						<div class="aims-item" v-for="(item, index) in aims" :key="item.index">
							<aims :src="img + item.src" :text="item.text"></aims>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Intro from '../Common/Intro'
import AddressItem from '../Common/AddressItem'
import Aims from '../Common/Aims'

	export default {
		components: {
			Intro, AddressItem, Aims
		},
		data () {
			return {
				titleSize: 0,
				textSize: 0,
				img: 'http://www.pgh168.com/pghpc/static/images/',
				pic: [
					{
						src: 'i_1.png',
						text: '1. 聚会点。线下增加会员情感、交流聚会点，倡导健康文化，以球会友;'
					},
					{
						src: 'i_2.png',
						text: '2. 练高尔夫球免费;'
					},
					{
						src: 'i_3.png',
						text: '3. 教学体验。不懂高尔夫的成员，可提供教练体验式指导服务；'
					},
					{
						src: 'i_4.png',
						text: '4. 商务路演、会议功能。具备40人左右路演、会议功能（可组织理事会及各种宣传会议）。'
					},
					{
						src: 'i_5.png',
						text: '5.增值服务：对接普高会的增值服务，提供给商会成员，合作共赢。产品推广：商会成员的好产品，可提供到普高会的平台推广。'
					},
					{
						src: 'i_6.png',
						text: '6.球队组建。协助商会组织高尔夫球队，增强商会影响力。'
					},
				],
				address: [
					{
						src: 'a_1.png',
						title: '同泰壹号高尔夫练习场',
						text: '地处广州市白云区中心地带，东临白云山和南湖国家级风景区，华南快速干线“同泰”出口，方便快捷，地铁3号线“白云大道北站”B出口，20米即到；距珠江新城约十分钟车程。',
					},
					{
						src: 'a_2.png',
						title: '马场七十二杆练习场',
						text: '广州市历史最悠久、营业时间最长、交通最便利的高尔夫练习场，地处珠江新城广州赛马场商业圈内集运动、休闲、娱乐、社交于一体的高档商务和大众化并兼的七十二杆练习场。',
					},
					{
						src: 'a_3.png',
						title: '月亮湖高尔夫练习场',
						text: '月亮湖体育会座落于智慧广州示范区、引领潮流先行区和幸福生活体验区的天河智慧城中心地带，周邻广州众多大学城府，近邻广东省奥林匹克体育中心，邻近广州科学城，位居地铁四号线黄村站十分钟路程',
					},
				],
				aims: [
					{
						src: 'aims_1.png',
						text: '广州萝岗冠景高尔夫练习场',
					},
					{
						src: 'aims_2.png',
						text: '番禺南国奥园高尔夫练习场',
					},
					{
						src: 'aims_3.png',
						text: '广州汇景新城高尔夫练习场',
					},
					{
						src: 'aims_4.png',
						text: '佛山万科水晶城高尔夫练习场',
					},
					{
						src: 'aims_5.png',
						text: '佛山桂城二月花高尔夫练习场',
					},
				]
			}
		},
		created () {
			setTimeout(() => {
				this.toast()
			}, 200)
			document.body.scrollTop = 0
		},
		mounted () {
			window.onresize = () => {
				this.toast()
				// console.log(window.innerWidth)
			}
		},
		methods: {
			toast () {
				let toast = document.querySelector('.toast')
				if (window.innerWidth <= 1600) {
					// this.titleSize = toast.offsetHeight/4
					// this.textSize = toast.offsetHeight/5.5
					this.titleSize = window.innerWidth/40
					this.textSize = window.innerWidth/50.5
				}	else {
					this.titleSize = 60
					this.textSize = 40
				}
				
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
		.toast {
			position: absolute;
			background: rgba(255, 255, 255, .3);
			color: #fff;
			text-align: center;
			padding: 2% 3%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			transition: all .3s;
			.title {
				margin: 0;
				padding-bottom: 10px;
			}
			.text {
				font-size: 40px;
				margin: 0;
			}
		}
	}
	.about {
		max-width: @max-width;
		margin: 0 auto;
		padding: 30px 10px;
		.title {
			font-size: 24px;
			text-align: center;
		}
		.text {
			line-height: 1.5;
			text-indent:2em;
			text-align: justify;
		}
		.pic {
			padding: 20px 0 30px 0;
			display: flex;
			justify-content: space-between;
			
			.img-box {
				overflow: hidden;
				img {
					transition: @transition;
					&:hover {
						transform: @transform;
					}
				}
			}
				
		}
	}
	.culture {
		background: #f2f2f2;
		.culture-item {
			max-width: @max-width;
			margin: 0 auto;
			padding: 30px 10px;
			.title {
				font-size: 24px;
				text-align: center;
			}
			.text {
				text-align: center;
				padding: 20px 0 50px 0;
				position: relative;
				img {
					width: 100%;
				}
				.text-item {
					text-align: left;
					background: #fff;
					width: 210px;
					height: 80px;
					padding: 0 20px;
					position: absolute;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.t1 {
					top: 51px;
					left: -60px;
				}
				.t2 {
					top: 24px;
					right: -7px;
				}
				.t3 {
					bottom: 40px;
					left: -50px;
				}
				.t4 {
					right: -60px;
					bottom: 133px;
				}
			}
		}
	}
	.introduction {
		.top {
			height: 130px;
			background: #7b8ba5;
			position: relative;
			p {
				text-align: center;
				font-size: 24px;
				color: #fff;
				margin: 0;
				padding-top: 30px;
			}
			.white {
				position: absolute;
				width: @max-width;
				height: 50px;
				background: #fff;
				bottom: 0;
				left: 50%;
				transform: translate(-50%, 0);
			}
		}
		.content {
			max-width: @max-width;
			margin: 0 auto;
			background: #fff;
			position: relative;
			top: -15px;
			.text {
				padding: 0 30px;
				color: #333;
			}
			.pic {
				padding: 30px;
				display: flex;
				flex-flow: row wrap;
			}
			.address {
				padding: 0 30px;
				.address-content {
					display: flex;
					flex-flow: row wrap;
				}
			}
			.aims {
				padding: 0 30px;
				p {
					color: #666;
				}
				.aims-content {
					padding: 30px 0;
					display: flex;
					flex-flow: row wrap;
					justify-content: space-between;
				}
			}
		}
	}
</style>