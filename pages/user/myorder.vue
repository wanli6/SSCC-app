<template>
	<view>
		<view class="head">
			<view class="picTxt acea-row row-between-wrapper">
				<view style="display: flex; ">
					<image src="/static/use/vip/back.png" mode="aspectFit"
						style="height: 125rpx; width: 20rpx; margin-left: 30rpx;" @click="back"></image>
					<view class="name">个人订单</view>
				</view>
			</view>
			<uni-row style="height: 250rpx;">
				<uni-col :span="18">
					<view class="name1">订单详情</view>
					<text class="text1" space="emsp">消费订单：{{order_count || 0 }} 总消费：￥{{sum_price || 0 }}</text>
				</uni-col>
				<uni-col :span="6">
					<image src="/static/use/myorder/bill.png" mode="aspectFit" style="width: 100rpx;height: 100rpx;">
					</image>
				</uni-col>
			</uni-row>
		</view>
		<uni-row  style=" margin-top: -75rpx; background-color: white;border-radius: 20rpx; background-color: #F1F1F1; width: 680rpx; margin-left: 40rpx;">
			<uni-col style="width: 136rpx;" v-for="(item,index) in list2">
				<template>
					<view class="row1" :class="{'active':Isselect==index} ">
						<text class="text3">{{item.name}}\n</text>
						<text class="text4">{{item.num}}</text>
					</view>
				</template>
			</uni-col>
			
		</uni-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_count: "15",
				sum_price: "200",
				Isselect:0,
				list2:[
					{
						name:"待付款",
						num:"2"
					},
					{
						name:"待发货",
						num:"3"
					},
					{
						name:"待收货",
						num:"4"
					},
					{
						name:"待评价",
						num:"5"
					},{
						name:"已完成",
						num:"6"
					}
					
					
				]
			};
		},
		methods: {
			back() {
				uni.switchTab({
					url: 'user'
				})
			},
			isActive(){
				
			}
		}
	};
</script>

<style>
	.name {
		font-size: 50rpx;
		margin: auto;
		font-weight: bolder;
		font-family: kaiti;
		line-height: 125rpx;
	}

	,
	.name1 {
		margin-left: 30rpx;
		font-size: 40rpx;
		font-weight: bold;
		color: white;
		font-family: songti;
	}

	,
	.grid1 {
		position: absolute;
		margin-top: -100rpx;

	}

	,
	.head {
		background-image: url('/static/use/myorder/bg1.jpg');
	}

	,
	.text1 {
		font-size: 32rpx;
		margin-left: 30rpx;
		color: white;
		line-height: 75rpx;
	}

	.text3 {
		font-size: 35rpx;
		margin-left: 17rpx;
		line-height: 80rpx;

	}

	.text4 {
		margin-left: 55rpx;
		font-size: 35rpx;
		line-height: 60rpx;
	}

	.row1 {
	}
	.row1.active{
		border-bottom: 5rpx red solid;
		border-bottom-width: 80rpx;
	}
</style>
