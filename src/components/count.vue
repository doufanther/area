<template>
	<div class="Endaccount">
		<div class="main">
			<h1>结账</h1>
			<ul>
				<li v-for="(item,index) in Endaccount" >
					<p>服务区名称{{item.SERVERPART_NAME}}</p>
					<p>门店名称{{item.SHOPNAME}}</p>
					<p>客单数量{{item.TICKETCOUNT}}</p>
					<p>销售数量{{item.TOTALCOUNT}}</p>
					<p>销售金额{{item.TOTALSELLAMOUNT}}</p>
					<p>长短款{{item.CASHPAY}}</p>
					<p>移动支付金额{{item.MOBILEPAYMENT}}</p>
					<p>结账时间{{item.ENDACCOUNT_DATE}}</p>
					<p>客单均价{{item.TOTALSELLAMOUNT/item.TICKETCOUNT}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	import axios from 'axios'
	const status=200;
	export default {
		components: {
		   
		},
	    props: {
		    
		},
		data() {
		    return {
		    	url:'http://test.eshangtech.com:6060/HighWay/Handler/handler_ajax.ashx?action_type=getServerPartEndaccount&action_data=',
				Endaccount:'',
				count:'',
			}
		},
		created(){
			this.count=this.$route.params.userId;
			axios.get(this.url+this.count).then((res)=>{
				//console.log(res);
				if(res.status===status){
					this.Endaccount=res.data.EndaccountObject;
				}
			})
		},
		computed: {
		   
		},
		methods: {
			
		}
	}
</script>


<style lang="scss" scoped type="text/css">
	.Endaccount{
		width:100%;
		text-align: center;
		ul{
			
			li{
				margin-bottom: 20px;
				background:#000;
				color: #fff;
			}
		}
	}
</style>