<template>
	<div id="no2_1">
		{{$route.params}}
		<!--{{$store.state.arr}}-->
		<div style="margin-left: 20px;">
			<div v-if="$route.params.type=='全部'" class="clearfix">
				<div v-for="i in $store.state.arr" >
					<div style="float: left;margin: 10px;">
						<a :href="'#/no7/'+i.name">
						<div id="" style="float: left;">
							<div id="">
								<img width="451px" height="601px" :src="i.img[0]"/>
							</div>
							<div id="" style="text-align: center;">
								{{i.name}}
							</div>
							<div id="" style="text-align: center;">
								¥{{i.price}}
							</div>
						</div>
						</a>
					</div>
					
				</div>
			</div>
			<div v-else>
				 <div v-if="$route.params.type=='包包'" class="clearfix">
				 	 <div v-for="i in $store.state.arr" v-if='i.type=="包包"'>
				 	 	<div style="float: left;margin: 10px;">
						<a :href="'#/no7/'+i.name">
						<div id="" style="float: left;">
							<div id="">
								<img width="451px" height="601px" :src="i.img[0]"/>
							</div>
							<div id="" style="text-align: center;">
								{{i.name}}
							</div>
							<div id="" style="text-align: center;">
								¥{{i.price}}
							</div>
						</div>
						</a>
					</div>
				 	 </div>
				 </div>
				 <div v-else-if="$route.params.type=='配饰'" class="clearfix">
				 	<div v-for="i in $store.state.arr" v-if='i.type=="配饰"'>
				 	 	<div style="float: left;margin: 10px;">
						<a :href="'#/no7/'+i.name">
						<div id="" style="float: left;">
							<div id="">
								<img width="451px" height="601px" :src="i.img[0]"/>
							</div>
							<div id="" style="text-align: center;">
								{{i.name}}
							</div>
							<div id="" style="text-align: center;">
								¥{{i.price}}
							</div>
						</div>
						</a>
					</div>
				 	 </div>
				 </div>
			</div>
		</div>
	</div>
	
</template>

<script>
</script>

<style>
	#no2_1 a{
		font-size: 18px;
    font-weight: normal;
    color: rgb(0, 0, 0);
    font-family: 微软雅黑;
	}
</style>