<template>
	<div id="banner">
		<div class="gbanner_Limg ">
			<img src="https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cHM6Ly81ZDE0NTY2YjA0NGQyLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDYvMWU4M2Y0M2U0ZjI3ZGUxMWUwNzExZWFhZDFhMWM0ZjUucG5n.png" width="464" height="185"/>
		</div>
		<div class="gbanner_ul">
			<ul>
				<li><a href="#/">首页</a></li>
				<li><a href="#/no2/全部">商店</a></li>
				<li><a href="#/no3">关于</a></li>
				<li><a href="#/no4">联系</a></li>
			</ul>
		</div>
		<div class="gbanner_right">
			<a href="#/no6" class="iconfont icon-lianxiren"></a>
			<a href="#/no5" class="iconfont icon-gouwuche"></a>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#banner {
		display: flex;
		background-image: url('https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS9kOTQ4OWJiNDIyMDQyMjQ0MjIyZDdkODNkZmNlZDczOS5qcGc_p_p100_p_3D.jpg'); background-repeat:no-repeat; background-size:cover; background-attachment:scroll; background-position:Array;
		height: 240px;
		box-sizing: border-box;
		padding: 60px 40px;
	}
	.gbanner_Limg{
		flex:1.2
	}
	.gbanner_Limg img{
		width: 125px;
		height: 50px;
	}
	.gbanner_ul{
		flex: 3.2;
		padding-left: 3.2%;
		box-sizing: border-box;
	}
	.gbanner_ul ul li{
		float: left;
		padding: 6px 24px 7px;
	}
	.gbanner_ul ul li a{
		color: #fff;
		
	}
	.gbanner_right{
		flex: 1;
		text-align: center;
	}
	.gbanner_right a{
		font-size: 22px;
		color: #fff;
		display: inline-block;
		margin-left: 15px;
	}
</style>