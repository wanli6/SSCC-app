<template>
	<view>
		<view class="head">
			<view class="picTxt acea-row row-between-wrapper">
				<view style="display: flex; ">
					<image src="/static/use/vip/back.png" mode="aspectFit"
						style="height: 175rpx; width: 20rpx; margin-left: 30rpx;" @click="back()"></image>
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
		<uni-row
			style=" margin-top: -75rpx; background-color: white;border-radius: 20rpx; background-color: #F1F1F1; width: 680rpx; margin-left: 40rpx;">
			<uni-col style="width: 136rpx;" v-for="(item,index) in list2">
				<template>
					<view @click="change(index)" class="row2" :class="{'active':Isselect==index} ">
						<text class="text3">{{item.name}}\n</text>
						<text class="text4">{{item.num}}</text>
					</view>
				</template>
			</uni-col>
		</uni-row>

		<view v-if="Isselect==0" style="margin-top: 15rpx;">
			<view v-for="(item,index) in shopper">
				<uni-list :border="false" class="list1">
					<uni-list-item
						style="background-color: #8bd7ff; border-top-right-radius: 20rpx;border-top-left-radius: 20rpx;">
						<template v-slot:header>
							<view>
								<text class="texttime">{{item.time}}</text>
								<text class="status"> 待付款</text>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
				<uni-row class="list1 row1" style="margin: auto;">
					<uni-col :span="6">
						<image class="shop1" :src="item.img" mode="aspectFit"></image>
					</uni-col>
					<uni-col :span="12" class="shopname">
						<text space="ensp" style="font-size: 35rpx;">{{item.shopname}}</text>
					</uni-col>
					<uni-col :span="5" class="price">
						<text space="emsp">￥{{item.price}}\n x{{item.num}}</text>
					</uni-col>
				</uni-row>
				<view class="sum">
					<text class="zongji">共{{item.num}}件商品，总金额</text>
					<text class="sumprice">￥{{item.price*item.num}}</text>
				</view>
				<view class="btnview">
					<uni-row>
						<uni-col :span="9" style="margin-left: 170rpx; margin-bottom: 10rpx;">
							<button class="btn" style="background-color: #F1F1F1;color: #8F939C;">取消订单</button>
						</uni-col>
						<uni-col :span="9">
							<button class="btn">立即付款</button>
						</uni-col>
					</uni-row>
				</view>
			</view>
		</view>


		<view v-if="Isselect==1" style="margin-top: 15rpx;">
			<view v-for="(item,index) in shopper">
				<uni-list :border="false" class="list1">
					<uni-list-item
						style="background-color: #8bd7ff; border-top-right-radius: 20rpx;border-top-left-radius: 20rpx;">
						<template v-slot:header>
							<view>
								<text class="texttime">{{item.time}}</text>
								<text class="status"> 待发货</text>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
				<uni-row class="list1 row1" style="margin: auto;">
					<uni-col :span="6">
						<image class="shop1" :src="item.img" mode="aspectFit"></image>
					</uni-col>
					<uni-col :span="12" class="shopname">
						<text space="ensp" style="font-size: 35rpx;">{{item.shopname}}</text>
					</uni-col>
					<uni-col :span="5" class="price">
						<text space="emsp">￥{{item.price}}\n x{{item.num}}</text>
					</uni-col>
				</uni-row>
				<view class="sum">
					<text class="zongji">共{{item.num}}件商品，总金额</text>
					<text class="sumprice">￥{{item.price*item.num}}</text>
				</view>
				<view class="btnview">
					<uni-row>

						<uni-col :span="9">
							<button class="btn" style="margin-left: 450rpx;">查看订单</button>
						</uni-col>
					</uni-row>
				</view>
			</view>
		</view>

		<view v-if="Isselect==2" style="margin-top: 15rpx;">
			<view v-for="(item,index) in shopper">
				<uni-list :border="false" class="list1">
					<uni-list-item
						style="background-color: #8bd7ff; border-top-right-radius: 20rpx;border-top-left-radius: 20rpx;">
						<template v-slot:header>
							<view>
								<text class="texttime">{{item.time}}</text>
								<text class="status"> 待收货</text>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
				<uni-row class="list1 row1" style="margin: auto;">
					<uni-col :span="6">
						<image class="shop1" :src="item.img" mode="aspectFit"></image>
					</uni-col>
					<uni-col :span="12" class="shopname">
						<text space="ensp" style="font-size: 35rpx;">{{item.shopname}}</text>
					</uni-col>
					<uni-col :span="5" class="price">
						<text space="emsp">￥{{item.price}}\n x{{item.num}}</text>
					</uni-col>
				</uni-row>
				<view class="sum">
					<text class="zongji">共{{item.num}}件商品，总金额</text>
					<text class="sumprice">￥{{item.price*item.num}}</text>
				</view>
				<view class="btnview">
					<uni-row>
						<uni-col :span="9" style="margin-left: 170rpx; margin-bottom: 10rpx;">
							<button class="btn" style="background-color: #F1F1F1;color: #8F939C;">退货/售后</button>
						</uni-col>
						<uni-col :span="9">
							<button class="btn">查看物流</button>
						</uni-col>
					</uni-row>
				</view>
			</view>
		</view>

		<view v-if="Isselect==3" style="margin-top: 15rpx;">
			<view v-for="(item,index) in shopper">
				<uni-list :border="false" class="list1">
					<uni-list-item
						style="background-color: #8bd7ff; border-top-right-radius: 20rpx;border-top-left-radius: 20rpx;">
						<template v-slot:header>
							<view>
								<text class="texttime">{{item.time}}</text>
								<text class="status"> 待评价</text>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
				<uni-row class="list1 row1" style="margin: auto;">
					<uni-col :span="6">
						<image class="shop1" :src="item.img" mode="aspectFit"></image>
					</uni-col>
					<uni-col :span="12" class="shopname">
						<text space="ensp" style="font-size: 35rpx;">{{item.shopname}}</text>
					</uni-col>
					<uni-col :span="5" class="price">
						<text space="emsp">￥{{item.price}}\n x{{item.num}}</text>
					</uni-col>
				</uni-row>
				<view class="sum">
					<text class="zongji">共{{item.num}}件商品，总金额</text>
					<text class="sumprice">￥{{item.price*item.num}}</text>
				</view>
				<view class="btnview">
					<uni-row>

						<uni-col :span="9">
							<button class="btn" style="margin-left: 450rpx;">去评价</button>
						</uni-col>
					</uni-row>
				</view>
			</view>
		</view>

		<view v-if="Isselect==4" style="margin-top: 15rpx;">
			<view v-for="(item,index) in shopper">
				<uni-list :border="false" class="list1">
					<uni-list-item
						style="background-color: #8bd7ff; border-top-right-radius: 20rpx;border-top-left-radius: 20rpx;">
						<template v-slot:header>
							<view>
								<text class="texttime">{{item.time}}</text>
								<text class="status"> 已完成</text>
							</view>
						</template>
					</uni-list-item>
				</uni-list>
				<uni-row class="list1 row1" style="margin: auto;">
					<uni-col :span="6">
						<image class="shop1" :src="item.img" mode="aspectFit"></image>
					</uni-col>
					<uni-col :span="12" class="shopname">
						<text space="ensp" style="font-size: 35rpx;">{{item.shopname}}</text>
					</uni-col>
					<uni-col :span="5" class="price">
						<text space="emsp">￥{{item.price}}\n x{{item.num}}</text>
					</uni-col>
				</uni-row>
				<view class="sum"
					style="margin-bottom: 15rpx ;border-bottom-right-radius: 20rpx;border-bottom-left-radius: 20rpx;">
					<text class="zongji">共{{item.num}}件商品，总金额</text>
					<text class="sumprice">￥{{item.price*item.num}}</text>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_count: "15",
				sum_price: "200",
				Isselect: 0,
				list2: [{
						name: "待付款",
						num: "2"
					},
					{
						name: "待发货",
						num: "3"
					},
					{
						name: "待收货",
						num: "4"
					},
					{
						name: "待评价",
						num: "5"
					}, {
						name: "已完成",
						num: "6"
					}
				],
				shopper: [{
						time: "2022/04/21 15:31",
						img: "/static/Rjiangzhong.jpg",
						shopname: "【江中】健胃消食片\n 12片/盒",
						price: "15.2",
						num: "1"
					},
					{
						time: "2022/04/18 08:19",
						img: "/static/chuangketie.jpg",
						shopname: "【云南白药】创可贴\n 100片/盒",
						price: "20.3",
						num: "4"
					},
					{
						time: "2022/04/15 10:21",
						img: "/static/Rjiangzhong.jpg",
						shopname: "【999】感冒灵颗粒\n 10g*9袋/盒",
						price: "39.9",
						num: "2"
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
			change(index) {
				this.Isselect = index;
			}
		}
	};
</script>

<style>
	.btnview {
		width: 700rpx;
		margin: auto;
		background-color: #8bd7ff;
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		margin-bottom: 15rpx;
	}

	.btn {
		width: 250rpx;
		background-color: #E45656;
		height: 70rpx;
		border-radius: 50rpx;
		line-height: 70rpx;
	}

	.row1 {
		background-color: #8bd7ff;
		border-top: 1rpx #000000 solid;
	}

	.list1 {
		width: 700rpx;
		margin: auto;
	}

	.price {
		margin-top: 30rpx;
		color: #808080;
	}

	.zongji {
		font-size: 35rpx;
		margin-left: 200rpx;
	}

	.sumprice {
		color: red;
		font-size: 35rpx;
	}

	.sum {
		background-color: #8bd7ff;
		width: 700rpx;
		margin: auto;

	}

	.shopname {
		margin-left: 10rpx;
		margin-top: 20rpx;
		font-size: 30rpx;
	}

	.shop1 {
		margin-left: 10rpx;
		margin-top: 15rpx;
		width: 180rpx;
		height: 180rpx;
		border-radius: 20rpx;
	}

	.status {

		margin-left: 220rpx;
		color: #ff0000;
		font-weight: bold;
		font-size: 33rpx;
		font-family: kaiti;
	}

	.texttime {
		font-size: 35rpx;
		font-weight: bold;
		width: 450rpx;
		color: white;

	}

	.name {
		font-size: 50rpx;
		margin: auto;
		font-weight: bolder;
		font-family: kaiti;
		line-height: 175rpx;
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

	.row2 {}

	.row2.active {
		border-bottom: 5rpx red solid;
	}
</style>
