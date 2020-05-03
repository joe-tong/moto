<template>
	<view class="page-index">
<!-- 		<view class="header">
		</view> -->

		<view class="container">
			<view class="demo-avatar">
					<cl-row type="flex">
						<cl-avatar></cl-avatar>
					</cl-row>
				</cl-card>
			</view>
		</view>
		
		<view class="demo-button ">
				<cl-row>
					<cl-col v-for="(item, index) in list" :key="index" :span="6">
						<cl-button :type="item.value" :class="generateClassName(index)" round>
							<text>{{ item.label }}</text>
						</cl-button>
					</cl-col>
				</cl-row>
			</cl-card>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					label: "接单",
					value: "warning"
				}
			]
		};
	},

	methods: {
		toDemo({ key }, item) {
			if (item.path) {
				uni.navigateTo({
					url: `/pages/demo/${key}/${item.path}`
				});
			} else {
				this.$refs["toast"].open(`${item.label}开发中`);
			}
		},
		generateClassName(index) {
		  // 调用方法，动态生成index
		  return `fixed-${index}`;
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}

.page-index {
	// background-color: #57545f;
	padding-top: env(safe-area-inset-top);
	padding-bottom: env(safe-area-inset-bottom);
	.header {
		padding: 20rpx 50rpx;

		.logo {
			height: 91rpx;
			width: 397rpx;
			margin: 20rpx 0;
		}

		.desc {
			font-size: 28rpx;
			color: #909ca2;
		}
	}

	.container {
		background-color: #57545f;
		padding: 20rpx 33rpx;
		box-sizing: border-box;

		.item {
			&__label {
				display: inline-block;
				height: 70rpx;
				line-height: 70rpx;
				padding: 0 30rpx;
				font-size: 28rpx;
				color: #909ca2;
			}

			&__container {
				.block {
					display: flex;
					align-items: center;
					height: 80rpx;
					padding: 0 30rpx;
					margin-bottom: 30rpx;
					font-size: 26rpx;
					background-color: #f7f7f7;
					border-radius: 80rpx;

					&:active {
						background-color: #eee;
					}

					.label {
						flex: 1;
					}
				}
			}
		}
	}
	.demo-button {
		.cl-button {
			margin-bottom: 20rpx;
			position:fixed;
			bottom:0px;
		}
	}
	.fixed-0{
		width: 25vw;
		height: 25vw;
		border-radius: 50%;
		left: 40%;
        text-align: center;
		line-height: 25vw;
		font-size: 5vw;
	}
	.fixed-1{
		right: 10%;
	    border-radius: 50%;
		text-align: center;
		width: 12vw;
		height: 12vw;
		line-height: 12vw;
		font-size: 3.8vw;
		background-color: #4f3b34;
	}
	.fixed-1 text{
		margin-left: -1.5vw;
	}
}
</style>
