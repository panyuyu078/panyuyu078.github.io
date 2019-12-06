<template>
	<div id="foot">
		<div class="foot_top">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-weixin"></use>
			</svg>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-weibo"></use>
			</svg>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-tuite"></use>
			</svg>
		</div>
		<div class="foot_bottom">
			<span style="color: rgb(0, 0, 0); font-size: 13px;">
				服务条款 &nbsp; 隐私政策   &nbsp;  免责声明
			</span>
		</div>
	</div>
</template>

<script>
</script>

<style>
	#foot {
		margin-top: 100px;
	}
	.foot_top{
		text-align: center;
	}
	.foot_top svg{
		display: inline-block;
		width: 25px;
		height: 25px;
		margin-left: 10px;
	}
	.foot_bottom{
		text-align: center; letter-spacing: 1px;
		margin-top: 8px;
	}
</style>