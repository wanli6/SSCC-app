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
							<text style="margin-left: 220rpx; font-size: 25rpx;">进店</text>
						</view>
					</view>
				</view>
			</uni-list-item>
		</uni-list>
		<view>
			<button class="btn1">加入购物车</button>
			<button class="btn1">一键打包</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				smartDevices: [{
							drugImg: '../../static/amxl.jpg',
							drugType: '自营',
							drugTitle: '【仁和】阿莫西林胶囊',
							drugUse: '250mg *40粒/盒',
							drugTags: ['抗生素', '处方药', '咽炎'],
							drugPriece: '￥20.3',
							drugSale: '234',
							drugShop: '键康大药房'
						},
						{
							drugImg: '../../static/999.jpg',
							drugType: '同城速送',
							drugTitle: '【999】感冒灵颗粒',
							drugUse: '10g*9袋/盒',
							drugTags: ['感冒', '头痛', '发热'],
							drugPriece: '￥39.9',
							drugSale: '346',
							drugShop: '键康大药房'
						},
						{
							drugImg: '../../static/Rjiangzhong.jpg',
							drugType: '自营',
							drugTitle: '【江中】健胃消食片',
							drugUse: '8片*4板/盒',
							drugTags: ['消化不良', '积食'],
							drugPriece: '￥12.5',
							drugSale: '500+',
							drugShop: '键康大药房'
						},
						{
							drugImg: '../../static/chuangketie.jpg',
							drugType: '自营',
							drugTitle: '【云南白药】云南白药创可贴',
							drugUse: '1.5cm*2.3cm*100片/盒',
							drugTags: ['皮肤感染', '常备药'],
							drugPriece: '￥18.5',
							drugSale: '500+',
							drugShop: '键康大药房'
						},
					],
					links: [
						'/pages/shop/smartDevice',
						'/pages/shop/smartDevice',
						'/pages/shop/smartDevice'
					]
				}
		},
		methods: {

		}
	}
</script>

<style>
	.btn1{
		display:inline-block;
		margin-top: 20rpx;
		margin-left: 50rpx;
		width: 300rpx;
		background-color: #F3A73F;
		border-radius: 20rpx;
	},
	.shop-picture {
		width: 250rpx;
		height: 250rpx;
		border: 2rpx #d8d8d8 solid;
	}
</style>
