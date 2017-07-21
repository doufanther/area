<template>
	<div class="header">
		<span @click="toBack">返回</span>结账数据信息展示
	</div>
</template>
<script>
  
  
  export default{
  	
  	props:{
  		
  	},
//	data(){
//		
//	},
  	methods:{
  		toBack(){
  			this.$router.push({ name: 'part'})
  		}
  	},
  	created(){
  		
  	},
  	components:{
  		
  	}
  }
</script>
<style lang="scss" scoped type="text/css">
	.header{
		text-align: center;
		height: 50px;
		line-height: 50px;
		position:relative;
		span{
			position: absolute;
			top:0;
			left: 20px;
			color: red;
		}
	}
</style>
