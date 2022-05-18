<template>
	<view>
		<view v-for="(item, index) in list">
			<uni-row style="margin-top: 50rpx;">
				<uni-col :span="17">
					<view class="timu">
						<text space="ensp" style="margin-left: 20rpx; font-size: 35rpx;">{{item.question}}</text>
					</view>
				</uni-col>
				<uni-col :span="2" style="margin-left: 30rpx;">
					<image src="../../static/phone.png" mode="aspectFit" style="width: 70rpx; height: 80rpx;"></image>
				</uni-col>
				<uni-col :span="3" style="line-height: 80rpx; font-size: 30rpx; margin-left: 15rpx;">
					<text>答案></text>
				</uni-col>
			</uni-row>
			<view style="
		border-radius: 10rpx;background-color: #11A0F1;margin: auto ; width: 700rpx;">
				<text space="emsp" class="text3">{{item.answer}} </text>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						question: "1|人体必须的营养物质有哪些？",
						answer: " A 蛋白质\n B 脂肪 \n C 维生素\n D 矿物质"
					},
					{
						question: "2|传染病主要传播途径有哪些？",
						answer: " A 呼吸道传播\n B 肠道传播 \n C 接触传播\n D 虫媒传播"
					},
					{
						question: "3|肺结核的主要症状有哪些？",
						answer: " A 低热\n B 咳嗽、痰中带血 \n C 盗汗\n D 食欲不振"
					}

				]
			}
		}
	}
</script>

<style>
	.timu {
		border: 4rpx #0276f1 solid;
		border-radius: 30px;
		height: 80rpx;
		margin-left: 20rpx;
		line-height: 80rpx;
	}
	,
	.text3 {
		font-size: 40rpx;
		color: white;
		line-height: 80rpx;
	}
</style>
