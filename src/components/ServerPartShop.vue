<template>
	<div class="serverpartshop">
		<div class="main">
			<h1>门店</h1>
			<ul>
				<li v-for="(item,index) in serverpartshop" @click="gocount(index)">
					<p>内码{{item.SERVERPARTSHOP_ID}}</p>
					<p>门店名称{{item.SHOPNAME}}</p>
					<p>门店编码{{item.SHOPCODE}}</p>
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
		    	url:'http://test.eshangtech.com:6060/HighWay/Handler/handler_ajax.ashx?action_type=getServerPartShop&action_data=',
				serverpartshop:'',
				shop:''
		    }
		},
		created(){
			this.shop=this.$route.params.userId;
			axios.get(this.url+this.shop).then((res)=>{
				console.log(res);
				if(res.status===status){
					this.serverpartshop=res.data.ServerPartShopObject;
				}
			})
		},
		computed: {
		   
		},
		methods: {
		   gocount(index){
		   		let id=this.serverpartshop[index]. SERVERPARTSHOP_ID;
				this.$router.push({ name: 'Endaccount',params: { userId: id } })
		   }
		}
	}
</script>


<style lang="scss" scoped type="text/css">
	.serverpartshop{
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