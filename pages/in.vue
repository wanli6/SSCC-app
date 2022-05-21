<template>
	<view>
		<image src="../static/jinru.png" class="a"></image>
		<button class="b" @click="inzhuye" ></button>
	</view>
</template>

<script>
	export default {
		methods: {
			inzhuye() {
				uni.navigateTo({
					url:'dengluzhuce/download'
				})
				console.log("点击我了");
			}
		}
	}
</script>

<style>
	.a {
		margin-top: 80rpx;
		width: 750rpx;
		height: 1560rpx;
	}
	,
	.b {
		position: absolute;
		margin-top: -670rpx;
		margin-left: 245rpx;
		width: 300rpx;
		height: 85rpx;
		border-radius: 30rpx;
		background-color: transparent;
	}
</style>
