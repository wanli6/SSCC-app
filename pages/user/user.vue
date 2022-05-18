<template>
	<view class="test2">
		<view style="height: 200rpx;">
			<text class="title">个人主页</text>
		</view>
		<uni-row>
			<uni-col :span="9">
				<image @click="to1" class="uimg" :src="imgadd" mode="aspectFit" style="border-radius: 50%;"></image>
			</uni-col>
			<uni-col :span="10">
				<view style="width: 350rpx;" @click="to1()">
					<text class="uname">{{uname}}</text>
					<text class="usign">{{usignature}}</text>
				</view>
			</uni-col>
			<uni-col :span="5">
				<image src="../../static/setting.png" mode="aspectFit" @click="to"
					style="width: 60rpx; height: 60rpx; margin-left: 380rpx; margin-top: 20rpx;">
				</image>
			</uni-col>
		</uni-row>

		<uni-grid :column="3" :showBorder="false" style="margin-top: 20rpx;">
			<uni-grid-item style="height:200rpx;">
				<view class="grid-item-box" @click="to3()">
					<image src="../../static/question.png" mode="aspectFit" style="width:80rpx; "></image>
					<text class="text" style="font-weight: bolder; font-size: 30rpx;">每日问答</text>
				</view>
			</uni-grid-item>
			<uni-grid-item style="height:200rpx;">
				<view class="grid-item-box" @click="to4()">
					<image src="../../static/collect.png" mode="aspectFit" style="width:80rpx; "></image>
					<text class="text" style="font-weight: bolder; font-size: 30rpx;">个人收藏</text>
				</view>
			</uni-grid-item>
			<uni-grid-item style="height:200rpx;">
				<view class="grid-item-box" @click="to2()">
					<image src="../../static/vip.png" mode="aspectFit" style="width:80rpx; "></image>
					<text class="text" style="font-weight: bolder; font-size: 30rpx;">会员中心</text>
				</view>
			</uni-grid-item>
		</uni-grid>

		<uni-list v-for="(item,index) in listt" style="background: transparent;" >
			<uni-list-item clickable @click="to5()" style="background: transparent;" >
				<template v-slot:body>
					<text class="slot-box slot-text list1" >{{item.name}}</text>
					<text class="slot-box slot-text list1" style="margin-left: 500rpx;">>></text>
				</template>
			</uni-list-item>
		</uni-list>
		<view style="background: transparent; height: 600rpx;"></view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgadd: "/static/touxiang.jpg",
				uname: "王同学",
				usignature: "早睡早起，健康每一天",
				listt:[
					{
						name:"我的订单",
						src: './myorder'
					},
					{
						name:"我的咨询",
						src:''
					},
					{
						name:"亲友管理",
						src:''
					},{
						name:"病历上传",
						src:''
					}
				]
			}
		},
		methods: {
			to() {
				uni.navigateTo({
					url: './set'
				})
			},
			to1() {
				uni.navigateTo({
					url: './personal'
				})
			},
			to2() {
				uni.navigateTo({
					url: './vip'
				})
			},
			to3() {
				uni.navigateTo({
					url: './question'
				})
			},
			to4() {
				uni.navigateTo({
					url: './collect'
				})
			},
			to5() {
				uni.navigateTo({
					url: './myorder'
				})
			}
		}

	}
</script>

<style>
	.test2 {
		background-image: url('/static/background.jpg');

	},
	.list1{
		margin-left: 10rpx;
	}
	,
	.uimg {
		width: 200rpx;
		height: 200rpx;
		margin-top: 20rpx;
		margin-left: 50rpx;
	}

	,
	.uname {
		font-size: 50rpx;
		position: absolute;
		margin-top: 75rpx;
		font-family: kaiti;
		font-weight: bolder;
	}

	,
	.usign {
		font-size: 35rpx;
		position: absolute;
		margin-top: 150rpx;
		margin-left: 10rpx;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		height: 100rpx;
	}

	.title {
		font-size: 50rpx;
		color: white;
		line-height: 100rpx;
		text-align: center;
		background-color: #11A0F1;
		width: 250rpx;
		height: 100rpx;
		border-radius: 40rpx;
		position: absolute;
		margin-left: 250rpx;
		margin-top: 100rpx;
	}
</style>
