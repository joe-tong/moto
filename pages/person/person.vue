<template>
	<view class="demo-list">
		<cl-card label="" padding="0">
			<cl-list label="">
				<view class="cs-block">
					<cl-avatar :src="avatarUrl" class="headIamge" :size="90"></cl-avatar>
					<text>155****9810</text>
				</view>
			</cl-list>

			<cl-list label="20元/月" type="success">
				<image
					slot="icon"
					:src="require('@/assets/icon/stats.png')"
					alt=""
				/>
			<cl-card label="" class="payClass">
				<cl-row>
					<cl-col :span="6">
						<cl-button :type=" pay.value"  round>
							<text>{{ pay.label }}</text>
						</cl-button>
					</cl-col>
				</cl-row>
			</cl-card>
			</cl-list>
		</cl-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			avatarUrl: require("@/assets/images/avatar.jpg"),
			pay:{
				label: "充值",
				value: "error"
			}
		};
	},

	methods: {
		chooseImage() {
			uni.chooseImage({
				count: 1,
				success: res => {
					this.$refs["cs-list"].restore();
					this.avatarUrl = res.tempFilePaths[0];
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.demo-list {
	/deep/.cl-card__container {
		padding: 0;
	}
	
	.payClass{
				display: block;
				margin-bottom: 4vw;
				height: 10vw;
				margin-right: 5vw;
	}

	.cs-block {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 0rpx 10rpx 0rpx 10rpx;
		height: 20vw;

		/deep/.cl-avatar {
			height: 100rpx;
			width: 100rpx;
			margin-right: 30rpx;
			border-radius: 10rpx;
		};
		.headIamge {
			border-radius:50%;
		}
	}

	.append {
		display: flex;
		align-items: center;
		height: 100%;

		.primary-btn,
		.error-btn {
			border-radius: 0;
			height: 100rpx;
			width: 130rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 26rpx;
			color: #fff;
			box-sizing: border-box;
			margin: 0;

			&::after {
				border: 0;
			}
		}

		.primary-btn {
			background-color: $uni-color-primary;
		}

		.error-btn {
			background-color: $uni-color-error;
		}
	}
}
</style>
