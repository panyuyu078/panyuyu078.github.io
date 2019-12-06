<template>
	<div id="no1_1">	
		<!--{{$store.state.arr}}-->
		<!--<div v-for="i in $store.state.arr">
			{{i.name}}
			<div v-for="a in i.img">
				{{a}}
			</div>

		</div>-->
		<banner></banner>
		<div>{{$route.params.name}}</div>
		<div class="no1_1_content" v-for="i in $store.state.arr" v-if="$route.params.name==i.name">
			<div class="no1_1_left">
				<div class="block">
					<div>
						<el-carousel trigger="click" height="150px" arrow="always">
							<el-carousel-item v-for="a in i.img" :key="a">
								<img :src="a"/>
							</el-carousel-item>
						</el-carousel>
					</div>
				</div>
			</div>
			<div class="no1_1_right">
				<h1 itemprop="name" class="product_title entry-title">{{i.name}}</h1>

				<div class="fg-div small">
				</div>
				<p class="price">
					<span class="amount">¥{{i.price}}</span>
				</p>
				<div class="description">
					<p>斜挎包在年轻的女生里还是比较常见的，斜挎包比较自然，这种糖果包是非常个性的，是帆布共和国里非常个性的设计，搭配起来也比较随意。
						<br />
						<br /> 商品规格：265mm*70mm*175mm
						<br /> 上市时间：2019年春夏
						<br /> 品 牌：CALVIN KLEIN
						<br /> 款 号：GH0358 T0200
						<br /> 材 料：牛皮革
						<br /> 产 地：中国广东省中山市
						<br />
						<br /> 可爱的女生和喜爱可爱事物的女生都可以选择这种可爱的包包，春天就搭配牛仔，夏天就搭配连衣裙，配上颜色略深的打底衫就好。很时尚很小女人的范，干净的颜色也很容易搭配衣服。

					</p>
				</div>
				<div class="g_jia" style="margin-bottom: 35px;">
					<table>
						<tr>
							<td><button>加入购物车</button></td>
							<td style="width: 15px;"></td>
							<td>
								<div class="quantity buttons_added">
									<input type="button" name="" id="" value="-" class="minus" />
									<input type="text" name="" id="" value="1" class="input-text qty text" readonly="readonly" />
									<input type="button" name="" id="" value="+" class="plus" />
								</div>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import banner from '../banner.vue'
	import foot from '../foot.vue'
	export default {
		name: 'app',
		components: {
			banner,
			foot
		},
	}
</script>

<style>
	.no1_1_content {
		display: flex;
		padding: 120px 50px;
		box-sizing: border-box;
	}
	
	.no1_1_left {
		flex: 1;
		height: 1325px;
	}
	
	.no1_1_right {
		flex: 1;
		padding: 0 40px;
	}
	
	#no1_1 .el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	#no1_1 .el-carousel__container {
		height: 1325px !important;
	}
	
	#no1_1 .el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	#no1_1 .el-carousel__indicator {}
	
	#no1_1 .el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	
	#no1_1 .product_title {
		font-size: 34px;
		font-weight: normal;
		color: #000;
		font-family: "宋体";
		margin-bottom: 35px;
	}
	
	#no1_1 .fg-div {
		font-weight: normal;
		width: 20px;
		background-color: #dddddd;
		display: block;
		height: 3px;
		margin: 15px 0;
		margin-bottom: 35px;
	}
	
	#no1_1 .amount {
		font-size: 32px;
		font-weight: normal;
		color: #d39850;
		font-family: "宋体";
		line-height: 32px;
	}
	
	.description {
		margin-bottom: 60px;
		line-height: 30px;
		font-size: 13px;
		font-weight: normal;
		color: #777;
		font-family: "微软雅黑";
	}
	
	#no1_1 .g_jia button {
		font-size: 14px;
		font-weight: normal;
		color: #FFFFFF;
		font-family: "微软雅黑";
		border-color: #000000;
		background-color: #000000;
		padding: 18px 60px;
	}
	
	#no1_1 .quantity .minus,
	#no1_1 .qty {
		font-size: 13px;
		font-weight: normal;
		color: #000000;
		font-family: arial;
		border-color: #e8e8e8;
		height: 52px!important;
		width: 42px!important;
		background: none;
		border-style: solid;
		border-width: 1px;
		box-shadow: none;
		cursor: pointer;
		display: inline-block;
		filter: none;
		float: left;
		text-align: center;
		box-sizing: border-box;
	}
	
	#no1_1 .qty {
		border-left: 0px;
		border-right: 0px;
	}
	
	#no1_1 .plus {
		border-color: #e8e8e8;
		height: 52px!important;
		width: 42px!important;
		font-size: 13px;
		font-weight: normal;
		color: #000000;
		font-family: arial;
		background: none;
		background-image: none;
		border-style: solid;
		border-width: 1px;
		box-shadow: none;
		cursor: pointer;
		display: inline-block;
		filter: none;
	}
	
	#no1_1 #foot {
		margin-top: 0;
		margin-bottom: 50px;
	}
	#no1_1 .el-carousel__item img{
		width: 100%;
		height: 100%;
	}
	.el-carousel__button{
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #000000;
	}
</style>