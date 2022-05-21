<template>
	<view>
		<button @click="toNormal(1)" class="button b1" type="primary">老人版本</button>
		<button @click="toNormal(2)" class="button b2" type="primary">家属版本</button>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				
			}
		},
		
		methods: {
			
			toNormal(a){
				if(a == 2){
					getApp().globalData.isOld = false
				}
				console.log(this.isOld)
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
