<template>
  <div id="app">
		<v-header></v-header>
		<div class="tab">
  		<router-view></router-view>
  	</div>
	</div>
</template>

<script>
    import header from './components/header.vue'
 		import part from './components/part.vue'
		import axios from 'axios'
   
		export default{
//			data() {
//				
//			},
			created(){

			},
			methods:{
					
			},
			components:{
			  	'v-header':header,
			  	
			}
	  }
</script>


<style lang="scss" scoped type="text/css">
	@import "./common/sass/mixin";

	$fontSize:14px;
	#app{
	  .tab{
	    display: flex;
	    width:100%;
	    height:40px;
	    line-height:40px;
	 		@include border-1px(rgba(7,17,27,.1));
	    .tab-item {
	    	flex: 1;text-align: center;
	    	a {
	    		display:block;
	    		font-size: $fontSize;
	    		color: rag(77,85,93);
	    	}
	    
	    }
	  }
	}
	  
	    
</style>