<template>
	<view class="test2">
		<uni-row >
			<uni-col :span="9">
				<image @click="to1" class="uimg" :src="imgadd" mode="aspectFit" style="border-radius: 50%;"></image>
			</uni-col>
			<uni-col :span="10">
				<view style="width: 350rpx;" @click="to1">
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
			<uni-grid-item style="height:200rpx;" >
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

		<uni-list style="background: transparent;">
			<uni-list-item style="background: transparent;" title="我的订单" rightText=">>">
			</uni-list-item>
			<uni-list-item style="background: transparent;" title="我的咨询" rightText=">>">
			</uni-list-item>
			<uni-list-item style="background: transparent;" title="亲友管理" rightText=">>">
			</uni-list-item>
			<uni-list-item style="background: transparent;" title="病历上传" rightText=">>">
			</uni-list-item>

			<uni-list-item style="background: transparent;">
				<!-- 自定义 header -->
				<template v-slot:header>
					<view class="slot-box">
						
					</view>
				</template>
				<!-- 自定义 body -->
				<template v-slot:body>
				</template>
				<!-- 自定义 footer-->
				<template v-slot:footer>
					<image class="slot-image"  mode="widthFix" style="height:650rpx;"></image>
				</template>
			</uni-list-item>
		</uni-list>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgadd: "/static/touxiang.jpg",
				uname: "王同学",
				usignature: "早睡早起，健康每一天"
			}
		},
		methods:{
			to()
			{
				uni.navigateTo({
					url:'./set'
				})
			},
			to1()
			{
				uni.navigateTo({
					url:'./personal'
				})
			},
			to2(){
				uni.navigateTo({
					url:'./vip'
				})
			},
			to3(){
				uni.navigateTo({
					url:'./question'
				})
			},
			to4(){
				uni.navigateTo({
					url:'./collect'
				})
			}
		}

	}
</script>

<style>
	.test2 {
		background-image: url('/static/background.jpg');
		
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
		margin-top: 125rpx;
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
</style>
