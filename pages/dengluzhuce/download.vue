<template>
	<view class="content">
		<view class="avatorWrapper">
			<view class="avator">
				<image class="img" src="/static/logo.png" mode="widthFix"></image>
			</view>
		</view>
		<view style="text-align: center; font-size: 50rpx; margin-top: 20rpx;">欢迎使用寿寿长春</view>
		<view class="form" style="margin-top: 50rpx;">
			<view class="inputWrapper">
				<input class="input" type="text" v-model="login.username" value="" placeholder="请输入用户名"/>
			</view>
			<view class="inputWrapper">
				<input class="input" type="password" v-model="login.password"  value="" placeholder="请输入密码"/>
			</view>
			<view class="loginBtn" @click="toZhuye()">
				<text class="btnValue" >登录</text>
			</view>
			<view class="forgotBtn">
				
				<text class="btnValue" @click="ToDetail()">注册账号</text>
				
			</view>
		</view>
	</view>
</template>
   
<script>
	export default {
		data() {
			return {
				login: {
					username: '',
					password: '',
				},
				title: '登录'
			}
		},
		onLoad() {
 
		},
		methods: {
			toZhuye(){
				
				let username = this.login.username
				let password = this.login.password
				for(var i=0;i<this.users.length;i++){
					if(this.users[i].username == username){
						if(this.users[i].password == password){
							uni.showToast({
								title:'登录成功',
								icon:"success",
								duration:1000
							})
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/dengluzhuce/choose'
								})
							},1000)
							return
						}
					}
				}
				console.log(this.login.username+ " " + this.login.password)
				if(!/^[a-zA-Z0-9_-]{3,15}$/.test(username)){
					uni.showToast({
						title:'用户名只能包含数字,字母以及-、_，且长度在3-15之间',
						icon:"error",
						duration:2000
					})
					return
				}else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)){
					uni.showToast({
						title:'密码必须包含大小写字母且长度不小于8',
						icon:"error",
						duration:2000
					})
					return
				}
				
			},
			ToDetail(){
				uni.navigateTo({
					url:"/pages/deluzhuce/register"
				})
			}
			
		}
	}
</script>
 
<style>
	.content {
		background: #ffffff;
		width: 100vw;
		height: 100vh;
	}
	.avatorWrapper{
		height: 30vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	.avator{
		width: 200upx;
		height: 200upx;
		overflow: hidden;
	}
	.avator .img{
		width: 100%
	}
	.form{
		padding: 0 100upx;
		margin-top: 80px;
	}
	.inputWrapper{
		width: 100%;
		height: 80upx;
		background:#aafffd;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 25px;
	}
	.inputWrapper .input{
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
	}
	.loginBtn{
		width: 100%;
		height: 80upx;
		background: #50b3b0;
		border-radius: 50upx;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.loginBtn .btnValue{
		color: white;
	}
	.forgotBtn{
		text-align: center;
		color: #50b3b0;
		font-size: 15px;
		margin-top: 20px;
		
	}
</style>
