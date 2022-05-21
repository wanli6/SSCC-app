<template>
	<view class="whole">
			<text class="date-title" space="nbsp">{{date}}</text>
			<view style="height: 30rpx;"></view>
			<view>
				<image src="../../static/shouye/xueya.png" class="a"></image>
			</view>
			
		</view>
	
</template>

<script>
	export default{
		onLoad() {
			this.getDate()
		},
		data(){
			return{
				date: ''
			}
		},
		methods:{
			getDate(){
				
				var now = new Date();
				var year = now.getFullYear(); //得到年份
				var month = now.getMonth()+1;//得到月份
				var date = now.getDate();//得到日期
				// var day = now.getDay();//得到周几
				var hour= now.getHours()-2;//得到小时数
				var minute= now.getMinutes();//得到分钟数
				var second= now.getSeconds();//得到秒数
				this.date = year+"年"+month+"月"+date+"日\n"+"      "+hour+":"+minute+":"+second
			}
		}
	}
</script>

<style>

	.a {
		z-index: -1;
		width: 750rpx;
		height: 1250rpx;
	}
	.date-title{
		margin-left: 30rpx;
		margin-bottom: 50rpx;
		font-size: 40rpx;
		height: 100rpx;
		font-weight: bold;
	}
	.whole{
		margin: auto;
		
	}
</style>
