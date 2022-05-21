<script>
	export default {
		globalData:{
			isOld : true
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/static/iconfont.css" ;
	@import '@/uni_modules/uni-scss';
	/*每个页面公共css */
</style>
