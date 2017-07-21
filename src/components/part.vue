<template>
	<div class="serverpart">
		<div class="main">
			<h1>服务</h1>
			<ul>
				<li v-for="(item,index) in serverpart" @click="goshop(index)">
					<p>内码{{item.SERVERPART_ID}}</p>
					<p>服务区名称{{item.SERVERPART_NAME}}</p>
					<p>服务区编码{{item.SERVERPART_CODE}}</p>
					<p>地址{{item.SERVERPART_ADDRESS}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	
	import axios from 'axios'
	const status=200;
	export default{
		props:{
			
		},
		data(){
			return {
				url:'http://test.eshangtech.com:6060/HighWay/Handler/handler_ajax.ashx?action_type=getTotalServerPart',
				serverpart:'',
			}
		},
		created(){
			axios.get(this.url).then((res)=>{
				//console.log(res);
				if(res.status===status){
					this.serverpart=res.data.SERVERPARTObject;
				}
			})
		},
		computed:{
			
		},
		methods:{
			goshop(index){
				let id=this.serverpart[index].SERVERPART_ID;
				this.$router.push({ name: 'shop',params: { userId: id } })
			}
		},
		components: {
		   
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	.serverpart{
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