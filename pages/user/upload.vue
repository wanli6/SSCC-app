<template>
	<view>
		<view v-if="this.isOld==false">
			<!--添加文字-->
			<view style="height: 50rpx;margin-top: 20rpx;">请上传您的病历（病历，诊断结果，化验单等）</view>
			<view class="text-box">
				<textarea maxlength="-1" class="text-style" placeholder="请输入说明"></textarea>
			</view>
			<!-- 上传图片 -->
			<view class="up-page">
				<!--图片-->
				<view class="show-box" v-for="(item,index) in imageList" :key="index">
					<image class="full" :src="item" :data-src="image" @tap="previewImage(item)">
					</image>
					<view class="delect-icon" @tap="delect(index)">
						<image class="full" :src="clearIcon" mode=""></image>
						<!--图片上传成功了，点击右上角叉号-->
					</view>
				</view>

				<view v-if="ImagesShow" @tap="chooseImages()" class="box-mode">
					<image class="full" :src="selectfile" mode=""></image>
				</view>
			</view>

			<button class="btn" type="primaray" @click="submitBtn" @tap="send">发布</button>
		</view>
		<view v-if="this.isOld==true">
			<!--添加文字-->
			<text style="height: 100rpx;margin-top: 20rpx; font-size: 43rpx;">请上传您的病历\n(病历，诊断结果，化验单等)</text>
			<view class="text-box">
				<textarea maxlength="-1" class="text-style" placeholder="请输入说明"></textarea>
			</view>
			<!-- 上传图片 -->
			<view class="up-page">
				<!--图片-->
				<view class="show-box" v-for="(item,index) in imageList" :key="index">
					<image class="full" :src="item" :data-src="image" @tap="previewImage(item)">
					</image>
					<view class="delect-icon" @tap="delect(index)">
						<image class="full" :src="clearIcon" mode=""></image>
						<!--图片上传成功了，点击右上角叉号-->
					</view>
				</view>

				<view v-if="ImagesShow" @tap="chooseImages()" class="box-mode">
					<image class="full" :src="selectfile" mode=""></image>
				</view>
			</view>

			<button class="btn" type="primaray" @click="submitBtn" @tap="send">提交</button>
		</view>
	</view>
</template>


<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	];
	export default {
		onLoad() {
			this.getIsOld()
		},
		data() {
			return {
				// 图标
				clearIcon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDE2YTQgNCAwIDAgMSA0IDR2MTZINGE0IDQgMCAwIDEtNC00VjB6IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBmaWxsLW9wYWNpdHk9Ii45OCIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfYikiLz48cGF0aCBkPSJNMTAuOTQgOS45OTlsMi44NjMtMi44NTdhLjY2OS42NjkgMCAxIDAtLjk0Ni0uOTQ2TDEwIDkuMDYgNy4xNDMgNi4xOTZhLjY2OS42NjkgMCAwIDAtLjk0Ni45NDZsMi44NjQgMi44NTctMi44NjQgMi44NTdhLjY2Ni42NjYgMCAwIDAgLjIxNyAxLjA5Mi42NjQuNjY0IDAgMCAwIC43MjktLjE0NkwxMCAxMC45MzhsMi44NTcgMi44NjRhLjY2Ny42NjcgMCAwIDAgMS4wOTItLjIxNy42NjYuNjY2IDAgMCAwLS4xNDYtLjcyOUwxMC45MzkgMTB6IiBmaWxsPSIjZmZmIi8+PGRlZnM+PGZpbHRlciBpZD0iZmlsdGVyMF9iIiB4PSItNCIgeT0iLTQiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlR2F1c3NpYW5CbHVyIGluPSJCYWNrZ3JvdW5kSW1hZ2UiIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbXBvc2l0ZSBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iaW4iIHJlc3VsdD0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1ciIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfYmFja2dyb3VuZEJsdXIiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIyMCIgeDI9IjE1LjU4NiIgeTI9IjIyLjk0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzBEMUUyOCIgc3RvcC1vcGFjaXR5PSIuOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA1MEUxMiIgc3RvcC1vcGFjaXR5PSIuNjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=',
				selectfile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIuMjUiIHk9Ii4yNSIgd2lkdGg9IjYzLjUiIGhlaWdodD0iNjMuNSIgcng9IjMuNzUiIGZpbGw9IiNGMkYyRjIiIHN0cm9rZT0iI0YyRjJGMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxyZWN0IHg9IjE2IiB5PSIzMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjQkZCRkJGIi8+PHJlY3QgeD0iMzMiIHk9IjE2IiB3aWR0aD0iMzIiIGhlaWdodD0iMiIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDMzIDE2KSIgZmlsbD0iI0JGQkZCRiIvPjwvc3ZnPg==',
				ImagesShow: true, // 页面图片数量超出后，拍照按钮隐藏
				imageList: [], //存放图片的地址
				sourceType: ['拍摄', '相册', '拍摄或相册'],
				sourceTypeIndex: 2,
				cameraList: [{
					value: 'back',
					name: '后置摄像头',
					checked: 'true'
				}, {
					value: 'front',
					name: '前置摄像头'
				}],
				maxCount: 9 //图片允许上传的总数
			}
		},
		onUnload() {
			(this.imageList = []), (this.sourceTypeIndex = 2), (this.sourceType = ['拍摄', '相册', '拍摄或相册']);
		},
		methods: {
			//上传图片
			getIsOld() {
				this.isOld = getApp().globalData.isOld
			},
			chooseImages() {
				uni.chooseImage({
					count: this.maxCount, //允许选择的数量
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: res => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						//console.log(this.imageList)
						if (this.imageList.length == this.maxCount) {
							this.ImagesShow = false; //图片上传数量和count一样时，让点击拍照按钮消失
						}
					}
				})
			},
			//预览图片
			previewImage: function(e) {
				console.log(e)
				uni.previewImage({
					current: e,
					urls: this.imageList
				});
			},
			// 删除图片
			delect(index) {
				uni.showModal({
					title: '提示',
					content: '是否要删除该图片',
					success: res => {
						if (res.confirm) {
							this.imageList.splice(index, 1);
						}
						if (this.imageList.length == this.maxCount) {
							this.ImagesShow = false;
						} else {
							this.ImagesShow = true;
						}
					}
				});
			},
			send() { //发送反馈
				console.log('开始发现');
				if (this.imageList.length === 0) {
					uni.showModal({
						content: '至少选择一张图片',
						showCancel: false
					})}
				else{
					uni.showModal({
						title:"提交成功！"
					})
					uni.switchTab({
						url:'user'
					})
				}
				
			},
			submitBtn() {
				console.log(this.imageList)
			},
		}
	}
</script>
<style lang="scss">
	.text-box {
		display: flex;
		margin-top: 10rpx;
		margin-left: 0px;
		width: 100%;
		height: 200rpx;
		background-color: s#cccccc;
	}

	.text-style {
		background-color: #ffffff;
		margin-bottom: 20rpx;
		width: 100%;
		height: auto;
		overflow: visible;
		word-wrap: break-word;
		word-break: normal;
		font-size: 43rpx;
	}

	/* 统一上传后显示的盒子宽高比 */
	.box-mode {
		width: 27vw;
		height: 27vw;

		border-radius: 8rpx;
		overflow: hidden;
	}

	.full {
		width: 100%;
		height: 100%;
	}

	.up-page {
		display: flex;
		flex-wrap: wrap;
		display: flex;
		width: 100%;

		.show-box:nth-child(3n) {
			margin-right: 0;
		}

		.show-box {
			position: relative;
			margin-bottom: 4vw;
			margin-right: 4vw;
			@extend .box-mode;

			.delect-icon {
				height: 40rpx;
				width: 40rpx;
				position: absolute;
				right: 0rpx;
				top: 0rpx;
				z-index: 1000;
			}
		}
	}

	.btn {
		position: fixed;
		height: 90rpx;
		font-size: 50rpx;
		width: 100%;
		text-align: center;
		line-height: 90rpx;
		border-radius: 50px;
		color: #fdfdfd;
		background: #55aa7f;
	}
</style>
