<template>
  <div id="app">
	<div class="bigbox">
		<div class="tabbat">
			<ul>
				<li><a href="">首页</a></li>
				<li><a href="">代码</a></li>
				<li><a href="">github</a></li>
				<li><a href="">链路</a></li>
				<li><a href="">产品</a></li>
			</ul>
			<div class="selectbox">
				<el-input v-model="input" placeholder="请输入内容" @input=clons style="width:300px;line-height:50px;font-size:16px" size="mini"></el-input>
				<el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
			</div>
			<div class="user_login">
				<div class="user_info">
					<span>注册/登陆</span>
					<img src="../../assets/user.png" alt="">
				</div>
			</div>
		</div>
	</div>
	<div class="main_content">
		<div class="content_left" style="background-color:black"></div>
		<div class="content_middle" style="background-color:blue"></div>
		<div class="content_right" style="background-color:red"></div>
	</div>
  </div>
</template>

<script>


export default {
  name:'App',
  components: {
  },
  data() {
    return {
      input: ''
    }
  },
  methods:{
	  clons(){
		  console.log(this.input);
		//    var cmr = plus.camera.getCamera(); 
		//    console.log(cmr);
		  console.log(document.querySelectorAll(".user_login"));
		  document.querySelectorAll(".user_login").forEach(element => {
		  console.log(element);
		  });
	  },
	 
  }
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
	width:100%;
	background-color: #FFFFFF;
	border-bottom: 1px solid #999999;
	box-shadow: 3px 1px 5px #666666;
	box-sizing: content-box;
	position: fixed;
	z-index:20;
}
.tabbat{
	width:1200px;
	height:50px;
	margin:0 auto;
	box-sizing: content-box;
	display: flex;
}
.tabbat ul li {
	display: inline-block;
	padding:0 10px;
	height:50px;
	cursor:pointer;
}
.tabbat ul li:hover{
	background-color:#f5f6f7;
}
.tabbat ul li a{
	line-height: 50px;
	font-size: 15px;
	color:#000000;
}
.selectbox{
	width:500px;
}
.user_info{
	line-height:50px;
	display: inline;
	
}
.user_info span{
	cursor:pointer;
	font-size: 15px;
}
.user_info img{
	position: relative;
    top: 8px;
    left: 20px;
}
.main_content{
	height:100%;
	position: relative;
	top:70px;
	min-width: 1420px;
	margin:0 auto;
}
.content_left{
	height:calc(100vh);
	width:350px;
	display: inline-block;
}
.content_middle{
	width:700px;
	height:100%;
	display: inline-block;
	vertical-align: top;
}
.content_right{
	height:calc(100vh + 500px);
	width:300px;
	display: inline-block;
	vertical-align: top;
}
</style>
