<template>
	<view>
		<view v-if="this.isOld==false">
			<image src="/static/lantian.jpg" style="width: 750rpx; margin-top: -20rpx;"></image>
			<uni-list>
				<uni-list-item>
					<template v-slot:header>
						<view class="uni-thumb">
							<image src="../../static/touxiang.jpg" mode="aspectFill"
								style="border-radius:50%;width: 200rpx;height: 200rpx;"></image>
						</view>
					</template>
					<template v-slot:body>
						<view style="margin-top: 40rpx;">
							<text style=" margin-left: 50rpx; font-size: 50rpx;  ">王同学\n</text>
							<text style=" margin-left: 50rpx; font-size: 35rpx; ">个性签名: \n</text>
							<text style=" margin-left: 53rpx; font-size: 30rpx; ">早起早睡，健康每一天</text>
						</view>
					</template>
				</uni-list-item>
			</uni-list>
			<text style=" margin-left: 30rpx; font-size: 40rpx; ">性别: </text>
			<text style=" margin-left: 145rpx; font-size: 40rpx; ">男\n</text>
			<text style=" margin-left: 30rpx; font-size: 40rpx; ">用户ID: </text>
			<text style=" margin-left: 100rpx; font-size: 40rpx; ">57824615\n</text>
			<text style=" margin-left: 30rpx; font-size: 40rpx; ">手机号: </text>
			<text style=" margin-left: 100rpx; font-size: 40rpx; ">135****359\n</text>
			<text style=" margin-left: 30rpx; font-size: 40rpx; ">邮箱: </text>
			<text style=" margin-left: 145rpx; font-size: 40rpx; ">795***12@qq.com\n</text>
		</view>
		<view v-if="this.isOld==true">
			<image src="/static/lantian.jpg" style="width: 750rpx; margin-top: -20rpx;"></image>
			<uni-list>
				<uni-list-item>
					<template v-slot:header>
						<view class="uni-thumb">
							<image src="../../static/oldtouxiang.png" mode="aspectFill"
								style="border-radius:50%;width: 200rpx;height: 200rpx;"></image>
						</view>
					</template>
					<template v-slot:body>
						<view style="margin-top: 40rpx;">
							<text style=" margin-left: 50rpx; font-size: 50rpx;  ">王老头\n</text>
							<text style=" margin-left: 50rpx; font-size: 35rpx; ">个性签名: \n</text>
							<text style=" margin-left: 53rpx; font-size: 30rpx; ">早起早睡，健康每一天</text>
						</view>
					</template>
				</uni-list-item>
			</uni-list>
			<text style=" margin-left: 30rpx; font-size: 40rpx; ">性别: </text>
			<text style=" margin-left: 145rpx; font-size: 40rpx; ">男\n</text>
			<text style=" margin-left: 30rpx; font-size: 40rpx; ">用户ID: </text>
			<text style=" margin-left: 100rpx; font-size: 40rpx; ">57825967\n</text>
			<text style=" margin-left: 30rpx; font-size: 40rpx; ">手机号: </text>
			<text style=" margin-left: 100rpx; font-size: 40rpx; ">133****479\n</text>
			<text style=" margin-left: 30rpx; font-size: 40rpx; ">邮箱: </text>
			<text style=" margin-left: 145rpx; font-size: 40rpx; ">无</text>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getIsOld()
		},
		methods: {
			getIsOld() {
				this.isOld = getApp().globalData.isOld
			}
		}
	}
</script>

<style>
</style>
