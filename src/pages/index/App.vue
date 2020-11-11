<template>
  <div id="app">
	<div class="bigbox">
		<div class="tabbat">
			<ul>
				<li><a href="">首页</a></li>
				<li><a href="">代码</a></li>
				<li><a href="">github</a></li>
				<li><a href="">链路</a></li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>


export default {
  name:'App',
  components: {
  },
  
}
</script>

<style>
body,html{
	margin:0;
	padding:0;
	}
ul{
	margin:0;
	padding:0;
}
li{
	list-style: none;
	}
a{
	text-decoration: none;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#f5f6f7;
  height:5000px;
}
.bigbox {
	min-width:1200px;
	background-color: #FFFFFF;
	border-bottom: 1px solid #999999;
	box-shadow: 3px 1px 5px #666666;
	box-sizing: content-box;
}
.tabbat{
	width:1200px;
	height:60px;
	margin:0 auto;
	box-sizing: content-box;
}
.tabbat ul{
}
.tabbat ul li {
	display: inline-block;
	padding:0 10px;
	height:60px;
	cursor:pointer;
}
.tabbat ul li:hover{
	background-color:#f5f6f7;
}
.tabbat ul li a{
	line-height: 60px;
	font-size: 18px;
	color:#000000;
}
</style>
