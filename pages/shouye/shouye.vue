<template>
	<view>
		<view v-if="isOld==false">
			<view>
				<text class="title">健康主页 </text>
			</view>
			<view
				style="margin: auto;margin-top: 30rpx;padding-bottom: 30rpx; width:90%;border: 5rpx #11A0F1 solid;  box-shadow: 8rpx 10rpx black;">
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
						<button class="detail" @click="xueya">详情</button>
					</uni-col>
				</uni-row>

				<uni-row>
					<uni-col :span="7">
						<text class="text2">今日血糖达标，仍要注意每日涉糖量</text>
					</uni-col>
					<uni-col :span="17">
						<image class="contentimage" src="../../static/xuetangimg.png" mode="aspectFit">
						</image>
					</uni-col>
				</uni-row>
			</view>
		</view>

		<view v-if="isOld==true">
			<view>
				<text class="title">健康主页 </text>
			</view>
			<view
				style="margin: auto;margin-top: 30rpx;padding-bottom: 30rpx; width:90%;border: 5rpx #11A0F1 solid;  box-shadow: 8rpx 10rpx black;">
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
						<button class="detail" @click="xueya">详情</button>
					</uni-col>
				</uni-row>

				<uni-row>
					<uni-col :span="7">
						<text class="text2">今日血糖达标，仍要注意每日涉糖量</text>
					</uni-col>
					<uni-col :span="17">
						<image class="contentimage" src="../../static/xuetangimg.png" mode="aspectFit">
						</image>
					</uni-col>
				</uni-row>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				index1: 1,
				index2: 1,
				time: 3,
				states: ["正常", "不正常"],
				states1: ["正常", "不正常"],
			}
		},
		methods: {
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
	.text2 {}

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

	.state {
		font-size: 40rpx;
		color: black;
	}

	.contentimage {
		height: 192rpx;
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

	,
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
</style>
