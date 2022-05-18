<template>
	<view>

		<uni-list>
			<!-- 垂直排列，略缩图显示大图 -->
			<uni-list-item v-for="(item,index) in List3" direction="column" :note="item.userNickname">
				<template v-slot:header>
					<view class="uni-title" style="margin-left: 15rpx;">{{item.menuName}}</view>
					<view class="uni-thumb uni-content list-picture">
						<image :src="item.imgadd" mode="aspectFill"
							style="margin-left: 30rpx; height: 300rpx;width: 600rpx;">
						</image>
					</view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {

		
		data() {
			return {
				List3: [
					{
						imgadd:"/static/use/collect/99+.jpg",
						menuName:"30岁以后如何养生？有这99条就够了！",
						userNickname:'作者：余小渔'
						
					},
					{
						imgadd:"/static/use/collect/yangsheng.jpg",
						menuName:"每日养生小知识",
						userNickname:'作者：健康小卫士'
					}, 
					{
						imgadd:"/static/use/collect/yszd.jpg",
						menuName:"两个养生黄金期，一个是睡前，一个竟是…",
						userNickname:'作者：养生之道'
					}
				]
			}
		},
		methods: {
		}	
	}
</script>

<style>
</style>
