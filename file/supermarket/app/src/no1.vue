<template>
	<div id="no1">
		<!--导航-->
		<banner></banner>
		<!--首页导航-->
			
		<router-view></router-view>
		<div class="banner">
			<div class=" background-overlay grid-overlay-0">
				<p style="padding: 0 0 40px;"><span style="color: rgb(255, 255, 255); font-size: 60px; font-family: 宋体;">拎出来的优雅，丢不了的自信</span></p>
				<p style="padding: 40px 0 0;">
					<a href="#/no7/女士新款单肩背提包" class="banner_p_a">立即购买</a>
				</p>
			</div>
		</div>
		<!--banner之后-->
		<div class="container">
			<!--英文-->
			<div class="section-background-overlay grid-overlay-0 ">
				<h1></h1>
				<div class="section-background-overlay-center">
					<h2>
						<span>
							<span style="color: rgb(0, 0, 0);">A leather goods &nbsp;
							</span>
						</span>
						<span>
							<span style="color: rgb(0, 0, 0);">
								<span style="font-size: 36px;"></span>
							</span>		
						</span>
						<span style="font-size: 36px;">
							<span style="color: rgb(0, 0, 0);">
								inspires elegance in everyday life. Proudly made in Montréal since 1987.
							</span>
						</span>
						
						<span style=""></span>
						
					</h2>
					<div class="qfe_wrapper">
						<div style="line-height: 28px; letter-spacing: 1px;">
							<span style="color: rgb(119, 119, 119); font-size: 13px;">一款优质的包包是高雅品位的象征，足以点缀一个女人的雅致生活。包身以闪亮金属和独特的拉链设计相辅相成，搭配包身显得非常个性，超具视觉冲击力，透着清雅悠闲的气息，绝对让人过目不忘。在这里，您仅需花上10分钟便可以完成一个H5响应式网站，您会发现完全不需要编写一行代码，这就是起飞页自助建站的神奇之处。</span>
							<span style="color: rgb(119, 119, 119); font-size: 14px;"></span>
						</div>
					</div>
					<div style="font-size:13px;font-weight:normal;font-style:normal;color:#d39850;margin-top: 30px;">
						<a href="#/no3" style="color:#d39850;">阅读更多</a>
					</div>
					<!--英文中间盒子结束-->
				</div>

				<h1></h1>
				<!--英文盒子结束-->
			</div>
			<!--首页商品-->
			<!--链接组件ctx-->
			<!--第一行--><!--第二行-->
			<ctx></ctx>
			<!--foot上面-->
			<div class="g_legs" style="display: flex;">
				<div class="g_legs_left" style="flex: 2;">
					<img width="100%" height="100%" src="https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS85NGM2NjdkMjJmNjEyNmRkZTc5YTY1NDlhNzlhODk4MC0xNDAweDkwMC5qcGc_p_p100_p_3D.jpg" />
				</div>
				<div class="g_legs_right" style="flex: 1;padding-top:150px;box-sizing: border-box;">
					<div id="" style="text-align: center;">
						<div style="font-family:times new roman;font-size:32px;font-weight:normal;font-style:normal;color:#000;display:inline-block;vertical-align:bottom;">
							DIY
						</div>
						<div style="font-family:宋体;font-size:28px;font-weight:normal;font-style:normal;color:#000;display:inline-block;padding:2px;vertical-align:bottom;">
							定制
						</div>
					</div>
					<div id="" style="padding-left: 46%;box-sizing: border-box;">
						<span class="line-abs bottom hcenter" style="overflow:hidden;border-bottom-style:solid;width:20px;max-width:20px;border-bottom-width:3px;border-bottom-color:#d39850;margin-top:10px;display: block;"></span>
					</div>
					<div style="text-align: center; letter-spacing: 1px;">	
						<br />
						<span style="color: rgb(119, 119, 119); font-size: 13px;">完全DIY定制满足您的个性化，独创需求！</span>
						<span style="color: rgb(119, 119, 119); font-size: 15px;"></span>
						<span style="color: rgb(119, 119, 119); font-size: 14px;"></span>
					</div>
					<br />
					<div style="text-align: center;">
					 <input type="text" name="" id="" value="" placeholder="预约定制" style="background-color: rgb(252, 252, 252);border: 1px solid rgb(224, 224, 224);height: 50px;font-size: 14px;"/>
					 <span style="color: #ffffff;font-size: 14px;line-height:14px;padding:17px 30px 17px;;background-color: #1d1d1d;display: inline-block;">提交</span>
					</div>
					<br />
					<div class="" style="text-align: center;">
						<span style="color: rgb(119, 119, 119); font-size: 12px;">拎出来的优雅，丢不了的自信。</span>
					</div>
				</div>
			</div>
			<foot></foot>
			<!--container结束-->
		</div>
		<!--no1结束符-->
	</div>
</template>

<script>
	import banner from './banner.vue'
	import foot from './foot.vue'
	import ctx from './ctx.vue'
	export default {
		components: {
			banner,
			foot,
			ctx
		},
		name: 'app',

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	#no1 #banner{
		background: transparent;
	}
	.clearfix:after {
		/*伪元素是行内元素 正常浏览器清除浮动方法*/
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}
	
	.clearfix {
		*zoom: 1;
		/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
	}
	
	.g_cont_s {
		margin: 100px 0 0;
	}
	
	.g_cont_s #cxt1 {
		width: 70%;
		height: 938px;
		position: relative;
		float: left;
		overflow: hidden;
	}
	
	.cxt1_img img {
		transition: .5s;
	}
	
	.cxt2_img img {
		transition: .5s;
	}
	
	.g_cont_s #cxt1:hover .cxt1_img img {
		transform: scale(1.2);
	}
	
	.g_cont_s #cxt2:hover .cxt2_img img {
		transform: scale(1.2);
	}
	
	.g_cont_s #cxt2 {
		width: 30%;
		height: 469px;
		position: relative;
		float: right;
		overflow: hidden;
	}
	
	.g_head_h2 {
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -80px;
		z-index: 2;
		color: #fff;
		font-family: "宋体";
	}
	
	.g_cxt_h3 {
		position: absolute;
		left: 56%;
		top: 62%;
		margin-left: -10.2%;
		z-index: 2;
	}
	
	.g_cxt_h3 a {
		color: #fff;
	}
	
	.cxt1_img {
		height: 938px;
	}
	
	.cxt2_img {
		height: 469px;
	}
	
	.cxt1_img .cxt2_img {
		width: 100%;
	}
	
	#cxt1 .cxt1_img img,
	#cxt2 .cxt2_img img {
		width: 100%;
		height: 100%;
	}
	
	.banner {
		width: 100%;
		height: 750px;
		position: absolute;
		left: 0;
		top: 0;
		background-image: url('https://ccdn.goodq.top/caches/bf818ed303d7223e33cd09b42ee1689b/aHR0cDovLzVkMTQ1NjZiMDQ0ZDIudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wNS84NGZhNDk1ZmU3MDVlNmY0YzQ2ZTU0MmFjNWRkMTU0OS5qcGc_p_p100_p_3D.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: scroll;
		background-position: center top;
	}
	
	.background-overlay {
		text-align: center;
		margin: 300px 0 50px;
	}
	
	.banner_p_a {
		font-family: 微软雅黑;
		font-size: 14px;
		padding: 18px 50px;
		border-width: 2px;
		border-color: rgb(45, 45, 45);
		background-color: rgb(45, 45, 45);
		color: rgb(255, 255, 255);
	}
	
	.banner_p_a:hover {
		border-color: rgb(38, 38, 38);
		background-color: rgb(38, 38, 38);
		transition: .35s;
	}
	/*导航之后的部分*/
	
	.container {
		width: 100%;
		position: absolute;
		left: 0;
		top: 750px;
	}
	
	.section-background-overlay {
		display: flex;
		padding: 60px 0;
	}
	
	.section-background-overlay-center {
		flex: 2;
	}
	
	.section-background-overlay h2 {
		line-height: 1.5em;
		padding: 0 0 60px;
	}
	
	.section-background-overlay h2 span {
		font-family: "times new roman";
		font-size: 36px;
		font-weight: normal;
	}
	
	.section-background-overlay h1 {
		flex: 1;
	}
</style>