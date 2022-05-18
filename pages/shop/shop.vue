<template>
	<view>
		<view>
			<text class="title">商城</text>
		</view>
		<view class="box">
			<uni-row>
				<uni-col :span="21">
					<uni-search-bar class="uni-mt-10" radius="100" placeholder="输入想要购买的商品名称" clearButton="none"
						cancelButton="none" @confirm="search" />
					</uni-section>
				</uni-col>
				<uni-col :span="3">
					<image src="../../static/shopcar.png" mode="aspectFit"
						style=" margin-left: 10rpx; margin-top: 60rpx; width: 50rpx; height: 50rpx;"></image>
				</uni-col>
			</uni-row>
			<uni-grid @change="clickSort" :column="3" :showBorder="false" style=" margin-top: 20rpx;">

				<uni-grid-item style="height:130rpx;text-align: center;">
					<image src="../../static/device.png" mode="aspectFit"
						style="width: 80rpx; height: 80rpx; margin: 0 auto;"></image>
					<text class="text" style="font-weight: bolder; font-size: 30rpx;">智能设备</text>
				</uni-grid-item>
				<uni-grid-item style="height:130rpx; text-align: center;">
					<image src="../../static/drug.png" mode="aspectFit"
						style="width: 70rpx; height: 80rpx; margin: 0 auto;"></image>
					<text class="text" style="fon	t-weight: bolder; font-size: 30rpx;">常用药</text>
				</uni-grid-item>
				<uni-grid-item style="height:130rpx; text-align: center;">
					<image src="../../static/cooperation.png" mode="aspectFit"
						style="width: 60rpx; height: 80rpx; margin: 0 auto;"></image>
					<text class="text" style="font-weight: bolder; font-size: 30rpx;">联系我们</text>
				</uni-grid-item>
			</uni-grid>
			<image src="../../static/shop1.png" mode="aspectFit" style="width: 750rpx;"></image>
		</view>
		<uni-list v-for="item in drugs">
			<uni-list-item>
				<template v-slot:header>
					<view class="uni-thumb shop-picture">
						<image :src="item.drugImg" mode="aspectFill" style="width: 250rpx; height: 250rpx;">
						</image>
					</view>
				</template>

				<view slot="body">
					<view>
						<view>
							<uni-tag :text="item.drugType" type="error" style="color: white; font-weight: bolder;" />
							<text
								style="margin-left: 15rpx; border: #000000; font-weight: bolder;">{{item.drugTitle}}</text>
							<text
								style="margin-left: 15rpx; border: #000000; font-weight: bolder;">{{item.drugUse}}</text>
						</view>
						<view>
							<view class="example-body" style="display: inline-flex;justify-content: space-around;"
								v-for="item1 in item.drugTags">
								<view class="tag-view" style="margin-left: 10rpx; font-weight:bolder;">
									<uni-tag :text="item1" type="success" />
								</view>
							</view>
						</view>
					</view>
					<view>
						<view
							style="margin-left: 15rpx; margin-top:10rpx;color: red; font-weight: bolder;font-size: 40rpx;">
							<text>{{item.drugPriece}}</text>

						</view>
						<view style="margin-left: 15rpx; font-size: 20rpx;"> 月销量 {{item.drugSale}}</view>
						<view style="margin-left: 15rpx; font-size: 20rpx;">
							<text style="font-weight: bolder;">{{item.drugShop}}</text>
							<text style="margin-left: 240rpx; font-size: 25rpx;">进店 ></text>
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
				drugs: [{
						drugImg: '../../static/amxl.jpg',
						drugType: '自营',
						drugTitle: '【仁和】阿莫西林胶囊',
						drugUse: '250mg *40粒/盒',
						drugTags: ['抗生素', '处方药', '咽炎'],
						drugPriece: '￥12.5',
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
						drugPriece: '￥12.5',
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
			clickSort(e) {
				let {
					index
				} = e.detail
				uni.navigateTo({
					url: this.links[index]
				})
			}
		}

	}
</script>

<style>
	.title {
		font-size: 50rpx;
		color: white;
		background-color: #11A0F1;
		width: 250rpx;
		height: 100rpx;
		border-radius: 40rpx;
		margin: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 150rpx;
	}
</style>
