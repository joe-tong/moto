<template>
	<div id='order'>
		<div  v-for="(item,index) in orderList" :key="index" 
		:class="[(orderList.length-1)==index?'last':'']"
		hover-class="hover" :hover-stay-time="150" >
		     <div class='order_item'>
				 <div class="tel">{{item.tel}} <image class='tel_ico' src="../static/tel.png"></image></div>
				 <div class="address">{{item.address}}</div>
				 <div class="distance">相距{{item.distance}}米<image class="map" src="../static/map.png"></image></div>
				 <button class="state_bt_un" >抢单</button>
		     </div>
		</div>
	</div>
</template>

<script>
	import request from '@/common/js/request.js'
	
	export default {
		data() {
			return {
				pageIndex: 1,
				orderList: [],
				loadding: false,
				pullUpOn: true
			}
		},
		onLoad() {
			var param = {
			          'pageNum':this.pageIndex,
			        };
			request.get("/driver/order/list",param).
			then(res => {
				this.orderList = res.data;
				console.log("orderList",this.orderList)
			}).
			catch(e => console.log(e)) // 请求任务的结果处理
		},
		methods: {
			getOrderList: function(){
				var param = {
				          'pageNum':this.pageIndex,
				        };
				request.get("/driver/order/list",param).
				then(res => {
					this.orderList = res.data;
					console.log("orderList",this.orderList)
				}).
				catch(e => console.log(e)) // 请求任务的结果处理
			}
		},
		//页面相关事件处理函数--监听用户下拉动作
		onPullDownRefresh: function() {
			//延时为了看效果
			setTimeout(() => {
				getOrderList()
				this.pageIndex = 1;
				this.pullUpOn = true;
				this.loadding = false;
				uni.stopPullDownRefresh();
				this.tui.toast("刷新成功");
			}, 200)
		},

		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
			getOrderList();
			if (!this.pullUpOn) return;
			this.loadding = true;
			if (this.pageIndex == 3) {
				this.loadding = false;
				this.pullUpOn = false;
			} else {
				this.orderList = this.orderList.concat(this.orderList);
				this.pageIndex = this.pageIndex + 1;
			}
		}
	}
</script>

<style>
	.order_item {
		height: 57;
		width: 100%;
		background-color: #a8c572;
		border-radius: 5vw;
	}
	.tel_ico {
		margin-left: 33%;
		height: 8vw;
		width: 7vw;
	}
	.tel_ico:hover {
		margin-left: 33%;
		height: 10vw;
		width: 9vw;
	}
	.address{
		padding-top: 4vw;
		height: 15vw;
		width: 80%;
		padding-left: 5%;
		font-size: 5vw;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	
	}
	.tel {
		height: 15vw;
		width: 100%;
		padding-left: 5%;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		line-height: 15vw;
		font-size: 8vw;
		background-color: #dedeff;
		border-radius: 4vw;
	}
	.map {
		height: 9vw;
		width: 8vw;
	}
	.distance {
		height: 14vw;
		width: 100%;
		margin-left: 65%;
		line-height: 20vw;
		font-size: 4vw;
		font-weight: 500;
	}

	.state_bt_un {
		height: 13vw;
		width: 100%;
		background-color: #005500;
		text-align: center;
		line-height: 10vw;
		font-size: 6vw;
		color: #FFFFFF;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.state_bt_ok {
		height: 13vw;
		width: 100%;
		background-color: #005500;
		text-align: center;
		line-height: 13vw;
		font-size: 6vw;
		color: #FFFFFF;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
