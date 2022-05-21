<template>
	<view>
		<view style="display: flex; ">
			<image src="/static/use/vip/back.png" mode="aspectFit"
				style="height:175rpx; width: 20rpx; margin-left: 30rpx;" @click="back()"></image>
			<text class="a">联系我们</text>
		</view>
		<view>
			<text style=" font-size: 50rpx; margin-left: 50rpx;line-height: 60rpx;" space="emsp">本产品使用uniapp开发，寿寿长春项目开发组参与本项目开发和维护。\n 商城招商相关问题请联系寿寿长春项目组：838086790@qq.com</text>
		</view>
	</view>

</template>

<script>
	export default {

		methods: {
			back() {
				uni.switchTab({
					url: "./shop"
				})
			}
		}

	}
</script>

<style>
	.a {
		width: 650rpx;
		font-size: 75rpx;
		color: red;
		line-height: 175rpx;
		text-align: center;
	}
</style>
