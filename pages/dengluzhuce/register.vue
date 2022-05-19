<template>
	<view class="content">

		<!-- <view class="login_img"><image mode="aspectFill" src="/static/image/iamhe.png"></image></view> -->

		<view class="login_from">

			<view class="login_from_input">
				<view class="login_from_name">用户名</view>
				<view class="login_from_fun">
					<input type="text" v-model="username" placeholder="请输入正确的用户名">
				</view>
			</view>

			<view class="login_from_input">
				<view class="login_from_name">手机号</view>
				<view class="login_from_fun"><input type="digit" maxlength="11" v-model="phoneNumer"
						placeholder="请输入正确的手机号"></view>
			</view>

			<view class="login_from_input">
				<view class="login_from_name">年龄</view>
				<view class="login_from_fun">
					<picker mode="selector" @change="bindPickerChange" :value="index" :range="num">
						<view>{{num[index]}}</view>
					</picker>
				</view>
			</view>


			<view class="login_from_input">
				<view class="login_from_name">密码</view>
				<view class="login_from_fun">
					<input type="digit" password="true" v-model="password" placeholder="请输入登录密码">
					<label class="cuIcon-scan cuicon"></label>
				</view>
			</view>

			<view class="login_from_input">
				<view>
				</view>
				<view class="login_from_name">请确认</view>
				<view class="login_from_fun">
					<input type="digit" password="true" v-model="password2" placeholder="请确认登录密码">
				</view>
			</view>

		</view>


		<view class="login_from_dl">
			<button @click="register1">注册</button>
		</view>

		<view class="logo_xieyi">
			<checkbox-group @change="checkboxChange">
				<label>
					<checkbox style="transform: scale(0.7)" :checked="gouxSta" />
				</label>
			</checkbox-group>
			<view class="logo_text">请勾选并阅读<text>《注册协议》</text>及<text>《隐私政策》</text></view>
		</view>

	</view>

	</view>
</template>
<script>
	export default {

		data() {
			return {
				index: '0',
				username: '',
				phoneNumer: '',
				password: '',
				password2: '',
				gouxSta: false,
				num: ['请选择', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
					27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
					52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
					77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
				]

			}
		},
		onLoad() {},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				this.index = e.detail.value
			},
			checkboxChange(e) {
				this.gouxSta = !this.gouxSta;
				console.log(this.gouxSta);
			},
			register() {
				if (this.gouxSta == false) {
					uni.showToast({
						"title": "请阅读并勾选用户协议",
						"icon": 'none'
					})
					return
				}
				if (!/^[a-zA-Z0-9_-]{3,15}$/.test(this.username)) {
					uni.showToast({
						title: '用户名只能包含数字,字母以及-、_，且长度在3-15之间',
						icon: "error",
						duration: 2000
					})
					return
				}
				if (!/^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(this.phoneNumer)) {
					uni.showToast({
						title: '输入正确的手机号',
						icon: "error",
						duration: 2000
					})
					return
				}
				if (this.password != this.password2) {
					uni.showToast({
						title: '两次密码必须相同',
						icon: "error",
						duration: 2000
					})
					return
				}
				if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(this.password)) {
					uni.showToast({
						title: '密码必须包含大小写字母且长度不小于8',
						icon: "error",
						duration: 2000
					})
					return
				}
				let len = this.users.length
				let user = {
					username: this.username,
					password: this.password
				}
				if (this.users.push(user) == len + 1) {
					uni.showToast({
						title: '注册成功',
						icon: "success",
						duration: 2000
					})
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/dengluzhuce/download'
						})
					}, 1000)
					return
				}

			},
			register1(){
				
				uni.showToast({
					title: '注册成功',
					icon: "success",
					duration: 2000
				})
				setTimeout(() => {
					uni.navigateTo({
						url: '/pages/dengluzhuce/choose'
					})
				}, 1000)
				return
			}
		}
	}
</script>
<style>
	page {
		background: #fff;
	}

	.login_img {
		width: 100%;
		height: auto;
		margin-top: 90upx;
	}

	.login_img image {
		width: 170upx;
		height: 170upx;
		display: block;
		margin: 0px auto;
		border-radius: 50%;
	}

	.login_from {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		margin-top: 100rpx;
		padding: 20upx 8%;
	}

	.login_from_input {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px #eee solid;
		padding: 40upx 0px;
		margin: 0px auto;
	}

	.login_from_name {
		width: 20%;
		background-color: #ffffff;
	}

	.login_from_fun {
		width: 80%;
		display: flex;
		flex-direction: row;
		/* justify-content: flex-end; */
		align-items: center;
		background-color: #ffffff;
	}

	.login_from_fun input {
		width: 100%;
		text-align: left;
		font-size: 14px;
	}

	//.login_from_identify input{ width: 60%;  }

	.login_from_dl {
		width: 100%;
		height: 50px;
		line-height: 50px;
		margin-top: 150upx;
	}

	.login_from_dl button {
		width: 60%;
		height: 80rpx;
		line-height: 80rpx;
		background: #50b3b0;
		color: white;
		border-radius: 50px;
	}

	.logo_xieyi {
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: flex;
		flex-direction: row;
		margin-top: 30upx;
		align-items: center;
		color: #444;
		font-size: 14px;
		justify-content: center;
	}

	.logo_xieyi label {
		font-size: 18px;
		margin-right: 1%;
	}

	.logo_text text {
		color: #ff0000;
	}

	.getyzm {
		margin-top: 20rpx;
		width: 100%;
		height: 50rpx;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		color: #FF3B00;
	}

	.cuicon {
		font-size: 18px;
	}

	.checked-box {}
</style>
