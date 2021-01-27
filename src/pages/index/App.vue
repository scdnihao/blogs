<template>
  <div id="app">
	<div class="bigbox">
		<div class="tabbat">
			<ul>
				<li><a href="">首页</a></li>
				<li><a href="">代码</a></li>
				<li><a href="https://github.com/scdnihao/blogs">github</a></li>
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
		<div class="content_left" style="background-color:white">
			<div class="user_info_left">
				<div class="blogs_author">
					<div class="author_photo">
						<img src="../../assets/user.png" alt="">
					</div>
					<div class="author_info">
						<div class="author_name">
							<span id="author_name" v-html=author_name></span>
							</div>
						<div class="author_WorkTime"><span id="author_WorkTime">码龄1年</span></div>
					</div>
				</div>
				<div class="blogs_author_info">
					<ul class="blogs_author_info_ul">
						<li>
							<a href="">
								<span>25</span>
								<span>原创</span>
							</a>
						</li>
						<li>
							<a href="">
								<span>1万+</span>
								<span>周排名</span>
							</a>
						</li>
						<li>
							<a href="">
								<span>9999</span>
								<span>总排名</span>
							</a>
						</li>
						<li>
								<span>9万+</span>
								<span style="color:#999aaa">访问</span>
						</li>
						<li>
								<span>25</span>
								<span style="color:#999aaa">等级</span>
						</li>
					</ul>
				</div>
				<div class="transverse_line"></div>
				<div class="amount_info">
					<ul>
						<li>
							<span>9999</span>
							<span>积分</span>
						</li>
						<li>
							<span>9999</span>
							<span>粉丝</span>
						</li>
						<li>
							<span>9999</span>
							<span>获赞</span>
						</li>
						<li>
							<span>9999</span>
							<span>评论</span>
						</li>
						<li>
							<span>9999</span>
							<span>收藏</span>
						</li>
					</ul>
				</div>
				<div class="badge">
					<div class="icon_badge" title="签到新秀">
						<img class="badge_img" src="../../assets/chizhiyiheng@240.png" alt="签到新秀">
					</div>
					<div class="icon_badge" title="持之以恒">
						<img class="badge_img" src="../../assets/qiandao10@240.png" alt="持之以恒">
					</div>
					<div class="icon_badge" title="勤写标兵LV4">
						<img class="badge_img" src="../../assets/qixiebiaobing4@240.png" alt="勤写标兵LV4">
					</div>
					<div class="icon_badge" title="原力新人">
						<img class="badge_img" src="../../assets/yuanli_xinren@240.png" alt="原力新人">
					</div>
				</div>
			</div>
		</div>
		<div class="content_middle" style="background-color:blue">11111111111</div>
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
	  input: '',
	  author_name:"码云"
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
	font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
	}
ul{
	margin:0;
	padding:0;
}
li{
	list-style: none;
	margin:0;
	padding:0;
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
  height:100%;
  padding-bottom:70px;
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
.user_info_left{
	/* height:300px; */
	width:300px;
}
.author_photo{
	height:38px;
	width:38px;
	display: inline-block;
	position: relative;
	border-radius:50%;
}
.author_photo img{
	height:38px;
	width:38px;
}
.blogs_author{
	text-align: left;
	padding:20px 20px 5px 20px;
}
.tabbat{
	width:1200px;
	height:50px;
	margin:0 auto;
	box-sizing: content-box;
	display: flex;
}
.tabbat ul{
	margin-left:20px;
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
	min-width: 1150px;
}
.author_info{
	margin-left:5px;
	height:38px;
	display:inline-block;
}
.author_name{
	font-size: 13px;
	display: block;
	margin-bottom:4px;
	font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;;
}
.author_WorkTime{
	display:block;
}
#author_WorkTime{
	color:#999aaa;
	font-size:13px;
}
/* #999aaa */
.content_left{
	height:calc(100vh);
	width:300px;
	display: inline-block;
	/* position: fixed; */
}
.content_middle{
	width:700px;
	display: inline-block;
	vertical-align: top;
}
.content_right{
	height:calc(100vh + 500px);
	width:300px;
	display: inline-block;
	vertical-align: top;
}
.blogs_author_info{
	/* height:60px; */
	padding:10px 6px;
}
.blogs_author_info_ul{
	display:inline-block;
}
.blogs_author_info_ul li{
	display: inline-block;
	width: 55px;
    height: 50px;
}
.blogs_author_info_ul li a{
	color:#2c3e50;
}
.blogs_author_info_ul li:hover a :last-child{
	color:#fc5531;
}
.blogs_author_info_ul li span{
	display: block;
	line-height:25px;
	font-size:14px;
}
.transverse_line{
	height:1px;
	width:266px;
	background-color:#f5f6f7;
	margin:0 auto;
}
.amount_info{
	padding:10px 6px;
}
.amount_info ul li{
	width:55px;
	height:50px;
	display: inline-block;
	font-size: 14px;
}
.amount_info ul span{
	display: block;
	line-height: 25px;
}
.amount_info ul li :last-child{
	color:#999aaa;
}
.badge{
	text-align: left;
    padding: 15px 20px;
}
.icon_badge{
	display: inline-block;
	margin-right:3px;
}
.badge_img{
	width:36px;
	height:36px;
}
@media screen and (max-width:1350px) {
	.content_right{
		display: none;
	}
}
</style>
