<template>
	<view>
		<view>
			<view class="messageTitle">消息</view>
		</view>
		<view class="messagebox">
			<view class="head">{{currentChat.userName}}</view>
			<view class="body">
				<text>{{currentChat.time}}\n</text>
				<text>{{currentChat.userMessage}}</text>
			</view>
			<view class="footer">
				<input  />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
