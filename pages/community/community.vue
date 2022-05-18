<template>
	<view>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view>
			<uni-search-bar radius=20 class="search-bar" placeholder="输入关键词" bgColor="#F8F8F8" @confirm="search" />
		</view>
		<view class="sort_nav">
			<view class="flex_between">
				<view class="bottom_title">
					<view class="bottom_item" :class="{'active':isActive==index} " @click="chenked(index)"
						v-for="(item, index) in List_data" :key="index">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		<view>
			<view class="nav_item" v-if="isActive==0">
				<view v-for="(item, index) in locals" :key="index">
					<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" padding="10px 0">
						<template v-slot:title>
							<uni-list>
								<uni-list-item thumb-size="lg" thumb="../../static/tab_icon_8.png"
									:title="item.useNick" />
							</uni-list>
						</template>
						<text class="uni-body uni-mt-5">{{item.content.text}}</text>
						<image style="width: 100%;" :src="item.content.img"></image>

						<view slot="actions" class="card-actions">
							<view class="card-actions-item" @click="actionsClick('分享')">
								<uni-icons type="redo" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">分享</text>
							</view>
							<view class="card-actions-item" @click="actionsClick('点赞')">
								<uni-icons type="heart" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">点赞</text>
							</view>
							<view class="card-actions-item" @click="actionsClick('评论')">
								<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">评论</text>
							</view>
						</view>


					</uni-card>
				</view>

			</view>

			<view class="nav_item" v-if="isActive==1">
				<view class="blank"></view>
				<image class="banner" src="../../static/community/communityBanner.png"></image>

				<view class="blank"></view>
				<view>
					<uni-list class="uni-list">
						<!-- 列表渲染 -->
						<uni-list-item clickable @click="toPostDetail(item.postId)" v-for="(item, index) in posts"
							:key="index">
							<!-- 通过header插槽定义列表左侧图片 -->
							<template v-slot:header>
								<image class="avatar" :src="item.postImg" mode="aspectFit"></image>
							</template>
							<!-- 通过body插槽定义布局 -->
							<template v-slot:body>
								<view class="body">
									<text class="main">{{item.title}}\n</text>
									<text class="desc">{{item.description}}</text>
								</view>
							</template>
						</uni-list-item>
					</uni-list>
				</view>
			</view>
			<view class="blank"></view>
			<view class="blank"></view>
			<view class="nav_item" v-if="isActive==2">
				<view>
					<view class="messagebox">

						<view v-for="(item, index) in contacts" :key="index">
							<view class="list-item">
								<uni-list-chat :title="item.userName" :avatar="item.userAvatar" :note="item.userMessage"
									:time="item.time" @click="messageDetial(index)"></uni-list-chat>
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				List_data: ['同城', '社区', '联系人'],
				title_list: ['同城', '长寿社区', '联系人'],
				title: '长寿社区',
				isActive: 1,
				posts: [{
						postId: 1,
						postImg: '../../static/community/posts/postImg1.png',
						title: '养生',
						description: '养生，动词也，亦可为名词。原指道家过各种方法颈养生命、增强体质、预防疾病，从而达到延年益寿的一种医事活动。'
					},
					{
						postId: 2,
						postImg: '../../static/community/posts/postImg2.png',
						title: '慢性病',
						description: '慢性病共病的情况在老年群体中较为常见，"多病共存"已成为日益严重的公共卫生问题，但目前我国老年人慢性病共病现状及共病模式研究相对缺乏。'
					},
					{
						postId: 3,
						postImg: '../../static/community/posts/postImg3.jpg',
						title: '心脏病',
						description: '心脏病描述的是一系列影响您心脏的病症。心脏病范畴下的疾病包括血管疾病，例如冠状动脉疾病;心率问题（心律失常）;以及出生时就有的心脏缺陷（先天性心脏缺陷）。'
					},
				],
				locals: [{
					userAvatar: '../../static/tab_icon_8.png',
					useNick: '王麻子',
					content: {
						text: '开心大药房的药挺便宜的，种类也挺多。',
						img: '../../static/community/locals/localsImg1.png',
					},
					likeMessage: '山并、心好吃芫菱中、无语、雪娴诗、风再起时、EDG干年老粉、Chi、等48人觉得很赞'
				}, ],
				contacts: [{
						userName: '父亲',
						userAvatar: '../../static/tab_icon_8.png',
						userMessage: '这几天感觉不错',
						time: "2022-05-02 20:20",
						isMe: false
					},
					{
						userName: '母亲',
						userAvatar: '../../static/tab_icon_8.png',
						userMessage: '那就好，记得按时吃药',
						time: "2022-05-02 20:31",
						isMe: false
					},
					{
						userName: '姐姐',
						userAvatar: '../../static/tab_icon_8.png',
						userMessage: '药还有多少，我明天再去买点',
						time: "2022-05-02 20:50",
						isMe: true
					}
				],

			}
		},
		methods: {
			search() {

			},
			toPostDetail(post) {
				uni.navigateTo({
					url: "/pages/shop/postDetial?title=" + post
				})
			},
			messageDetial(index) {
				console.log("click")
				uni.navigateTo({
					url: "/pages/community/chat"
				})
			},
			chenked(type) {
				this.isActive = type
				this.title = this.title_list[type]
			},

		}
	}
</script>

<style lang="scss">
	@import "@/uview-ui/index.scss";

	.head {}

	.input {
		position: absolute;
		bottom: 200rpx;
	}

	.messageTitle {
		margin: auto;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		text-align: center;
		width: 200rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 30rpx;
		border-radius: 30rpx;
		border: 3px solid #11A0F1;
	}

	.list-item {
		height: 150rpx;
	}

	.slot-box {

		align-items: center;
	}

	.userNick {
		position: absolute;
		font-weight: bold;
		left: 160rpx;
		top: 30rpx;
	}

	.slot-text {

		position: absolute;
		left: 160rpx;
		top: 80rpx;
		font-size: 30rpx;
		margin-right: 10px;
		height: 20rpx;
	}

	.slot-image {
		display: block;
		margin-right: 10px;
		width: 120rpx;
		height: 120rpx;
	}

	.slot-text-right {

		position: absolute;
		right: 160rpx;
		top: 80rpx;
		font-size: 30rpx;
		margin-right: 10px;
		height: 20rpx;
	}

	.slot-image-right {
		display: block;
		margin-right: 10px;
		width: 120rpx;
		height: 120rpx;
	}

	.messagebox {
		margin: auto;
		width: 90%;
		height: 900rpx;
		border: 1rpx solid #11A0F1;
	}

	.slot-image {
		display: block;
		margin-right: 10px;
		width: 120rpx;
		height: 120rpx;
	}

	.card-actions {
		display: flex;
		justify-content: space-around;
	}

	.avatar {
		width: 225rpx;
		height: 200rpx;
	}

	.body {
		width: 525rpx;

	}

	.main {
		font-size: 40rpx;
		color: #11A0F1;
		border-bottom: 2px solid #11A0F1;
	}

	.desc {
		font-size: 30rpx;
	}

	.col {
		margin: auto;
	}

	.banner {
		width: 358px;
		height: 137px;
		margin-left: 10px;
	}

	.title {
		font-size: 50rpx;
		color: white;
		background-color: #11A0F1;
		width: 250rpx;
		height: 100rpx;
		border-radius: 40rpx;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 150rpx;
	}

	.search-bar {
		padding: 0;
		width: 80%;
		margin: auto;
		border-radius: 50rpx;
		margin-top: 40rpx;
		border-style: solid;
		border-width: 5rpx;
		border-color: #11A0F1;
	}

	.blank {
		width: 100%;
		height: 10px;
	}



	.bottom_title {
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		width: 85%;
		font-family: KaiTi;
		font-size: 40rpx;
		margin: auto;
		margin-top: 40rpx;
	}

	.bottom_item {
		padding: 20rpx;
		border-style: solid;
		border-radius: 30rpx;
		border-color: #11A0F1;
		border-width: 5rpx;
	}

	.bottom_title .active {
		color: white;
		background-color: #11A0F1;
	}
</style>
