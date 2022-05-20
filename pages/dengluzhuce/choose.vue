<template>
	<view>
		<button @click="toNormal()" class="button b1" type="primary">老人版本</button>
		<button @click="toNormal" class="button b2" type="primary">家属版本</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
			toNormal(){
				uni.switchTab({
					url:'/pages/shouye/shouye'
				})
			},
		}
	}
</script>

<style>
	.button{
		background-color: #50b3b0;;
		margin-top: 50rpx;
		width: 60%;
	}
	.b1{
		margin-top: 40%;
	}
</style>
