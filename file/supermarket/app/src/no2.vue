<template>
	<div id="no2">
		<banner></banner>
		<div class="g_no2_banner">
			<ul class="clearfix">
				<li v-for="(i,$index) in arrtab">
					<a :href="i.hf" @click="index=$index" :class="$index==index?'g_no2_bannerli_active':''">{{i.title}}</a>
				</li>
			</ul>
		</div>
		<div class="g_no2_contnet">
			<router-view></router-view>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import banner from './banner.vue'
	import foot from './foot.vue'
	export default {
		components: {
			banner,
			foot
		},
		name: 'app',
		data() {
			return {
				index: 0,
				arrtab: [{
						title: 'ALL',
						hf: '#/no2/全部',
						typ:'全部'
					}, {
						title: '包包',
						hf: '#/no2/包包',
						typ:'全部'
					}, {
						title: '配饰',
						hf: '#/no2/配饰',
						typ:'全部'
					}

				]
			}
		}
	}
</script>

<style>
	#no2 #banner {
		background-image: url('https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9kOTQ4OWJiNDIyMDQyMjQ0MjIyZDdkODNkZmNlZDczOS5qcGc_p_p100_p_3D.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: scroll;
		background-position: Array;
	}
	
	.g_no2_banner {
		margin: 150px 0 20px;
	}
	
	.g_no2_banner li {
		width: 70px;
		display: inline-block;
	}
	
	.g_no2_banner ul {
		margin: 0 auto;
		text-align: center;
		font-family: 宋体;
		font-size: 22px;
	}
	
	.g_no2_banner ul a {
		font-family: 宋体;
		font-size: 22px;
	}
	
	.g_no2_bannerli_active {
		color: #d39850 !important;
	}
	
	.g_no2_banner ul a:hover {
		color: #d39850
	}
</style>