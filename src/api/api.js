import axios from 'axios'
import qs from 'qs'

// ErrorDocument 404 /index.html
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = 'http://www.pgh168.com/wx7d3c9e2d28015f9c/wechat/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// post请求
let postData = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.post(url, qs.stringify(params))
		.then(res => {
			resolve(res)
		}, err => {
			reject(err)
		})
		.catch(error => {
			reject(error)
		})
	})
}

// get请求
let getData = (url, params) => {
	return new Promise((resolve, reject) => {
		axios.get(url, {params: params})
		.then(res => {
			resolve(res)
		}, err => {
			reject(err)
		})
		.catch(error => {
			reject(error)
		})
	})
}

// api请求
export default {
	// 轮播图
	getCarousel (params) {
		return getData('/newsBase/newIndex!getRoundPlayImg.action', params)
	},

	// 图文首页
	getIndexNews (params) {
		return getData('/newsBase/newIndex!getDefaultNews.action', params)
	},

	// 新闻
	getNews (params) {
		return getData('/newsBase/newIndex!getNewsList.action', params)
	},

	// 新闻详情
	getDetail (params) {
		return getData('/newsBase/newIndex!getNewsDetail.action', params)
	},

	// 活动列表
	ActivityList (params) {
		return postData('/newsBase/activity!getActivityList.action', params)
	},

	// 活动详情
	ActivityDetail (params) {
		return postData('/newsBase/activity!getDetail.action', params)
	},
}