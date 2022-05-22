<template>
	<uni-list>
		<uni-list-item>
			<template v-slot:header>
				<view style="height: 70rpx;" @click="to">
					<text style="font-size:33rpx; font-weight: bolder; margin-left: 20rpx;">个人资料</text>
					<text
						style="margin-left: 480rpx; font-size: 35rpx;font-weight: bolder;line-height: 80rpx; ">></text>
				</view>
			</template>
		</uni-list-item>
		<uni-list-item>
			<template v-slot:body>
				<view style="height: 70rpx;">
					<text
						style="font-size:33rpx; font-weight: bolder; margin-left: 20rpx; line-height: 70rpx;">广告推送</text>
					<switch checked style="margin-left: 425rpx;" />
				</view>
			</template>
		</uni-list-item>
		
		<uni-list-item >
			<template v-slot:body>
				<view style="height: 70rpx;">
					<text
						style="font-size:33rpx; font-weight: bolder; margin-left: 20rpx; line-height: 70rpx;">老人模式</text>
					<switch :checked="isOld" style="margin-left: 425rpx;" @change="swich" />
				</view>
			</template>
		</uni-list-item>
	</uni-list>

</template>

<script>
	export default {
		onShow() {
			this.getIsOld()
		},
		data() {
			return {
				isOld: ''
			}
		},
		methods: {			
			swich: function(e) {
				if (e.detail.value == true){
					getApp().globalData.isOld = true
					this.old=true}
				else{
					getApp().globalData.isOld = false
					this.old=true}
				console.log(getApp().globalData.isOld)
			},
			to() {
				uni.navigateTo({
					url: './personal'
				})
			},
			getIsOld() {
				this.isOld = getApp().globalData.isOld
			}
		}
	}
</script>

<style>
</style>
