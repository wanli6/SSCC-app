<template>
	<view>
		<view v-if="this.isOld==false">
			<!-- <view>
				<text class="title">健康主页 </text>
			</view> -->
			<view
				style="margin: auto;margin-top: 100rpx;padding-bottom: 30rpx; width:90%;border: 5rpx #11A0F1 solid;  box-shadow: 8rpx 10rpx black;">
				<text class="title1">温馨提示:</text>
				<text style="font-size: 35rpx; margin-left: 75rpx;">血脂高应当少吃多运动\n</text>
				<text class="title2" style="font-size: 35rpx; margin-left: 75rpx;">心衰患者坐卧应当适当抬高下肢</text>
			</view>
			<view
				style="width: 600rpx; margin-left: 60rpx; margin-top: 40rpx;border-style: solid; padding-top: 10rpx; padding-bottom: 10rpx; border-color: #11A0F1; border-width: 20rpx; ">
				<view>
					<text class="text1" space="emsp">距离下次服药还有 {{time}}个小时\n</text>
					<text class="text1" space="emsp">中午需要吃的药有：\n</text>
					<text class="text2" space="emsp">①奥美拉唑肠溶胶囊2个\n</text>
					<text class="text2" space="emsp">②奥美拉唑肠溶胶囊2个\n</text>
					<text class="text2" space="emsp">③奥美拉唑肠溶胶囊2个\n</text>
					<image src="../../static/825.png"
						style="height: 100rpx; width: 75rpx; position: absolute; margin-left: 520rpx ;margin-top:-100rpx">
					</image>
				</view>
			</view>

			<view class="border">
				<uni-row :span="24">
					<uni-col :span="6">
						<image class="image2" mode="aspectFit" src="../../static/xueya.png">
						</image>
					</uni-col>
					<uni-col :span="13">
						<text class="claim">今日血压:
						</text>
						<text class="claim state">{{states[index1]}}</text>
					</uni-col>

					<uni-col :span="5">
						<button class="detail" @click="xueya">详情</button>
					</uni-col>
				</uni-row>

				<uni-row>
					<uni-col :span="7">
						<text class="text2">您是高血压患者，即便今日血压正常也要坚持服药哦!</text>
					</uni-col>
					<uni-col :span="17">
						<image class="contentimage" src="../../static/xueyaimg.png" mode="aspectFit">
						</image>
					</uni-col>
				</uni-row>
			</view>

			<view class="border">
				<uni-row :span="24">
					<uni-col :span="6">
						<image class="image2" mode="aspectFit" src="../../static/xuetang.jpg">
						</image>
					</uni-col>
					<uni-col :span="13">
						<text class="claim">今日血糖:
						</text>
						<text class="claim state">{{states1[index2]}}</text>
					</uni-col>

					<uni-col :span="5">
						<button class="detail" @click="xuetang">详情</button>
					</uni-col>
				</uni-row>

				<uni-row>
					<uni-col :span="7">
						<text class="text2">今日血糖达标，仍要注意每日摄糖量</text>
					</uni-col>
					<uni-col :span="17">
						<image class="contentimage" src="../../static/xuetangimg.png" mode="aspectFit">
						</image>
					</uni-col>
				</uni-row>
			</view>
		</view>

		<view v-if="this.isOld==true">
			<!-- <view>
				<text class="title">健康主页 </text>
			</view> -->
			<view
				style="margin: auto;margin-top: 100rpx;padding-bottom: 30rpx; width:90%;border: 5rpx #11A0F1 solid;  box-shadow: 8rpx 10rpx black;">
				<text class="title1  oldtitle1">温馨提示:</text>
				<text style="font-size: 43rpx; margin-left: 70rpx;">血脂高应当少吃多运动\n</text>
				<text class="title2" style="font-size: 43rpx; margin-left: 70rpx;">心衰患者坐卧应当适当抬高下肢</text>
			</view>
			<view
				style="width: 600rpx; margin-left: 60rpx; margin-top: 40rpx;border-style: solid; padding-top: 10rpx; padding-bottom: 10rpx; border-color: #11A0F1; border-width: 20rpx; ">
				<view>
					<text class="oldtext1" space="emsp">距离下次服药还有 {{time}}个小时\n</text>
					<text class="oldtext1" space="emsp">中午需要吃的药有：\n</text>
					<text class="oldtext2" space="emsp">①奥美拉唑肠溶胶囊2个\n</text>
					<text class="oldtext2" space="emsp">②咳喘灵2颗\n</text>
					<text class="oldtext2" space="emsp">③阿莫西林胶囊2个\n</text>
					<image src="../../static/825.png"
						style="height: 100rpx; width: 75rpx; position: absolute; margin-left: 520rpx ;margin-top:-100rpx">
					</image>
				</view>
			</view>

			<view class="border">
				<uni-row :span="24">
					<uni-col :span="6">
						<image class="image2" mode="aspectFit" src="../../static/xueya.png">
						</image>
					</uni-col>
					<uni-col :span="13">
						<text class="claim oldclaim">今日血压:
						</text>
						<text class="claim oldclaim state">{{states[index1]}}</text>
					</uni-col>

					<uni-col :span="5">
						<button class="detail oldclaim" @click="xueya">详情</button>
					</uni-col>
				</uni-row>

				<image class="contentimage" style="height: 250rpx;" src="../../static/xueyaimg.png" mode="aspectFit">
				</image>

				<view style="margin-left: 20rpx; width: 630rpx;">
					<text class="oldtext2" style="font-weight: bold;">您是高血压患者，即便今日血压正常也要坚持服药哦!</text>
				</view>
			</view>

			<view class="border">
				<uni-row :span="24">
					<uni-col :span="6">
						<image class="image2"  mode="aspectFit" src="../../static/xuetang.jpg">
						</image>
					</uni-col>
					<uni-col :span="13">
						<text class="claim">今日血糖:
						</text>
						<text class="claim state">{{states1[index2]}}</text>
					</uni-col>

					<uni-col :span="5">
						<button class="detail" @click="xuetang()">详情</button>
					</uni-col>
				</uni-row>
				<view style="margin-left: 20rpx; width: 630rpx;">
					<image class="contentimage" style="height: 250rpx;" src="../../static/xuetangimg.png" mode="aspectFit" />
					<text class="oldtext2" style="font-weight: bold;">今日血糖达标，仍要注意每日摄糖量</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isOld: true,
				index1: 1,
				index2: 1,
				time: 3,
				states: ["不正常", "正常"],
				states1: ["不正常", "正常"],
			}
		},
		onShow() {
			this.getIsOld()
		},
		methods: {
			getIsOld(){
				this.isOld = getApp().globalData.isOld
			},
			xueya() {
				uni.navigateTo({
					url: "./xueya"
				})
			},
			xuetang() {
				uni.navigateTo({
					url: "./xuetang"
				})
			}
		}
	}
</script>

<style>
	.border {
		position: relative;
		width: 90%;
		margin: auto;

		margin-top: 35rpx;
		border: 4rpx #11A0F1 solid;
	}

	.image2 {
		height: 150rpx;
		width: 150rpx;
	}

	.claim {
		font-size: 50rpx;
		font-family: kaiti;
		line-height: 150rpx;
		font-weight: bolder;
		color: #11A0F1;
	}

	.oldclaim {
		font-size: 55rpx;
	}

	.oldtext1 {
		margin-left: 15rpx;
		font-size: 43rpx;
		font-weight: bold;
	}

	.state {
		font-size: 40rpx;
		color: black;
	}

	.contentimage {
		height: 200rpx;
		width: 100%;
	}

	.detail {
		font-size: 30rpx;
		line-height: 150rpx;
		background-color: transparent;
	}

	button::after {
		border: none;
	}

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
		margin-top: 100rpx;
	}

	,
	.title1 {
		font-size: 40rpx;
		color: white;
		background-color: #11A0F1;
		width: 220rpx;
		height: 60rpx;
		border-radius: 40rpx;
		text-align: center;
		display: block;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 50rpx;
		margin-top: 30rpx;
	}

	,
	.oldtitle1 {
		font-size: 45rpx;
	}

	,
	.text1 {
		margin-left: 50rpx;
		font-size: 30rpx;
		font-weight: 550;
	}

	,
	.text2 {
		margin-left: 15rpx;
		font-size: 30rpx;
		font-weight: 550;
	}

	,
	.oldtext2 {
		margin-left: 15rpx;
		font-size: 43rpx;
		font-weight: 550;
	}
</style>
