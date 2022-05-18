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
						style="font-size:33rpx; font-weight: bolder; margin-left: 20rpx; line-height: 70rpx;">消息推送</text>
					<switch checked style="margin-left: 425rpx;" />
				</view>
			</template>
		</uni-list-item>
	</uni-list>

</template>

<script>
	export default {
		methods: {
			to(){
				uni.navigateTo({
					url:'./personal'
				})
			}
		}
	}
</script>

<style>
</style>
