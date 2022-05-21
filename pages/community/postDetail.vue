<template>
	<view>
		<view class="article">
			<!-- #ifdef APP-PLUS -->
			<uni-nav-bar :statusBar="true" :border="false"></uni-nav-bar>
			<!-- #endif -->
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				post: [
					{
							postId: 1,
							postTitle: '老年人养生',
							postImg: '',
							
					},
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
