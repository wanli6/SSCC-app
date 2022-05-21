<template>
	<view>
		<uni-list v-for="(item,index) in smartDevices" :key="index">
			<uni-list-item>
				<template v-slot:header>
					<view class="uni-thumb">
						<image class="shop-picture" :src="item.drugImg" mode="aspectFill">
						</image>
					</view>
				</template>

				<view slot="body">
					<view>
						<view>
							<uni-tag :text="item.drugType" type="error"
								style="margin-left: 10rpx; color: white; height: ;" />
							<text style=" border: #000000; font-weight: bolder;line-hight:30rpx;">{{item.drugTitle}}</text>
							<text
								style="margin-left: 15rpx; border: #000000; font-weight: bolder;">{{item.drugUse}}</text>
						</view>
						<view style="height: 18rpx;"></view>
					</view>
					<view>
						<view
							style="margin-left: 15rpx; margin-top:10rpx;color: red; font-weight: bolder;font-size: 40rpx;">
							<text>{{item.drugPriece}}</text>

						</view>
						<view style="margin-left: 15rpx; font-size: 20rpx;">{{item.drugSale}}</view>
						<view style="margin-left: 15rpx; font-size: 20rpx;">
							<text style="font-weight: bolder;">{{item.drugShop}}</text>
							<text style="margin-left: 180rpx; font-size: 25rpx;">进店</text>
						</view>
					</view>
				</view>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				smartDevices: [{
						drugImg: '../../static/shop/smartDevice/xueyaji.jpg',
						drugType: '天猫',
						drugTitle: '【鱼跃】腕式电子血压计',
						drugUse: '',
						drugTags: ['抗生素', '处方药', '咽炎'],
						drugPriece: '￥139',
						drugSale: '2000+人付款',
						drugShop: '鱼跃亦乐专卖店'
					},
					{
						drugImg: '../../static/shop/smartDevice/xueyaji2.jpg',
						drugType: '天猫',
						drugTitle: '【鱼跃】臂式电子血压计',
						drugUse: '',
						drugTags: ['抗生素', '处方药', '咽炎'],
						drugPriece: '￥199',
						drugSale: '4万+人付款',
						drugShop: '鱼跃官方旗舰店'
					},
					{
						drugImg: '../../static/shop/smartDevice/shoubiao.jpg',
						drugType: '公益宝贝',
						drugTitle: '【金亿帝】腕式电子血压计（血压手表）',
						drugUse: '',
						drugTags: ['抗生素', '处方药', '咽炎'],
						drugPriece: '￥1798',
						drugSale: '13人付款',
						drugShop: '金亿官方旗舰店'
					},
					{
						drugImg: '../../static/shop/smartDevice/zhiyangji.jpg',
						drugType: '天猫',
						drugTitle: '【欧姆龙】家用吸氧机老人',
						drugUse: '',
						drugTags: ['抗生素', '处方药', '咽炎'],
						drugPriece: '￥3880',
						drugSale: '2000+人付款',
						drugShop: '欧姆官方旗舰店'
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.shop-picture {
		width: 250rpx;
		height: 250rpx;
		border: 2rpx #d8d8d8 solid;
	}
</style>
