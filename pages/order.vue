<template>
	<div id='order'>
		<div class='order_item' v-for="(item,index) in orderList" :key="index" 
		:class="[(orderList.length-1)==index?'last':'']"
		 hover-class="hover" :hover-stay-time="150" @tap="detail">
			<span class="tel">{{item.tel}}</span>
			<span class="distance">{{item.distance}}米</span>
			<button class="state_bt_un" v-if="item.status===0">抢单</button>
			<button class="state_bt_ok" v-else='item.status ===2'>完成</button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageIndex: 1,
				orderList: [{
						tel: '15797862806',
						status: 0,
						distance: 100
					}, {
						tel: '15797862806',
						status: 2,
						distance: 100
					}, {
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					},
					{
						tel: '15797862806',
						status: 2,
						distance: 100
					}
				],
				loadding: false,
				pullUpOn: true
			}
		},
		//页面相关事件处理函数--监听用户下拉动作
		onPullDownRefresh: function() {
	
		},

		// 页面上拉触底事件的处理函数
		onReachBottom: function() {
		
		}
	}
</script>

<style>
	.order_item {
		display: -webkit-flex;
		display: flex;
		height: 15vw;
		width: 100%;
		background-color: #C5C1AA;
		border-radius: 3vw;
	}

	.tel {
		height: 15vw;
		width: 50%;
		text-align: center;
		line-height: 15vw;
	}

	.distance {
		height: 15vw;
		width: 20%;
		text-align: center;
		line-height: 15vw;
		color: ;
	}

	.state_bt_un {
		height: 10vw;
		width: 30%;
		margin: auto 3%;
		background-color: #3CB371;
		text-align: center;
		line-height: 10vw;
		font-size: 6vw;
		color: #FFFFFF;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.state_bt_ok {
		height: 10vw;
		width: 30%;
		margin: auto 3%;
		background-color: #3CB371;
		text-align: center;
		line-height: 10vw;
		font-size: 6vw;
		color: #FFFFFF;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
