<template>
  <div id="app">
  		<!--<banner></banner>-->
    <div style="min-height: 500px;">
			<router-view></router-view>
	</div>
  </div>
</template>
<script>
//		import {mapGetters,mapActions} from 'vuex'
		import banner from './banner.vue'
		export default {
  		components:{
  		banner
  		},
  	name: 'app',
  	data () {
    return {
    }
  },
//methods:{
//	...mapActions(['btn','aa'])
//},
//computed:{
//	...mapGetters(['a'])
//},
  mounted(){
		//我渲染完成后 就去调用vuex
//		this.$store.commit('aa',this.b)
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	.clearfix:after,.clearfix:before {
		/*伪元素是行内元素 正常浏览器清除浮动方法*/
		content: "";
		display: block;
		clear: both;
	}
	
	.clearfix {
		*zoom: 1;
		/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
	}
	 #banner{
		z-index: 6;
		position: relative;
		
	}
</style>
