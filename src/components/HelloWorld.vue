<template>
	
  <div class="head">
			<div class="headin">
				<div class="headl">
					<img src="./img/loading.gif" alt="" height="50px" style="margin-top: 10px;float: left;">WOW
				</div>
				<div class="inp"><button style="top: 0;width: 60px;background-color: white;color: blue;">百度</button><input style="position: absolute;height: 36px;left: 60px;width: 260px;opacity: 0.5;" type="text" name="" id=""><button style="right: 0;background-color: blue;color: rgb(255, 255, 255);width: 80px;">搜索</button></div>
				<div class="headr">
					<p><a href=""><img src="./img/1.png" alt="">主页</a></p>
					<p><a href=""><img src="./img/2.png" alt="">导航</a></p>
					<p><a href=""><img src="./img/3.png" alt="">登陆</a></p>
					<p><a href=""><img src="./img/4.png" alt="">注册</a></p>
				</div>
			</div>

		</div>

		<div class="headin">

			<div class="yu">
				<p style="line-height: 40px">娱乐·影视</p>
				<div class="btn">
					<p>
						<a href="https://www.jd.com/?cu=true&utm_source=haosou-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_haosoupinzhuan&utm_term=0a875d61c5fe47d8bc48679132932d23_0_d155d5f8eaa745258902f2bbb87ecbb1"><button>京东</button></a>						
						<a href="https://uland.taobao.com/sem/tbsearch?refpid=mm_26632360_8858797_29866178&keyword=%E7%94%B5%E5%99%A8&clk1=08a50e3c1755be0d024303840acae080&upsId=08a50e3c1755be0d024303840acae080"><button>淘宝</button></a>

						<button>天猫</button>
					</p>
					<p>
						<button>Pixiv</button>
						<button>萌娘百科</button>
						<button>哗哩哗哩</button>
					</p>
					<p>
						<button>NETFLIX</button>
						<button>Spotify</button>
					</p>
				</div>
			</div>

			<div class="yu">
				<p style="line-height: 40px">社区·Code</p>
				<div class="btn">
					<p>
						<button>留言</button>
						<button>GitHub</button>
						<button>Coding</button>
					</p>
					<p>
						<button>掘金</button>
						<button>码云</button>
						<button>V2EX</button>
					</p>
					<p>
						<button>简书</button>
						<button>吾爱破解</button>
						<button>思否</button>
					</p>
					<p>
						<button>云+社区</button>
						<button>36氛</button>
					</p>
				</div>
			</div>

			<div class="yu">
				<p style="line-height: 40px">图片处理</p>
				<div class="btn" style="height: 180px">
					<p>
						<button>TingPNG</button>
						<button>又拍云Webp</button>
						<button>IconFont</button>
					</p>
					<p>
						<button>AweSome</button>
						<button>超清壁纸</button>
						<button>在线PS</button>
					</p>
				</div>
				<p style="line-height: 40px">实用·工具</p>
				<div class="btn">
					<p>
						<button>Nice编辑器</button>
						<button>思维导图</button>
						<button>一维码</button>
					</p>
					<p>
						<button>音范思</button>
						<button>OW分发</button>
						<button>BV转A</button>
					</p>
					<p>
						<button>GUID在线生成</button>
						<button>又拍云刷新网站</button>
					</p>
				</div>
			</div>
		</div>

		<div class="headin">
			<div class="yu" style="height: 300px">
				<p style="line-height: 40px">编程·学习</p>
				<div class="btn" style="height: 200px">
					<p>
						<button>开源中国</button>
						<button>HTML狗</button>
						<button>中国大学慕课</button>
					</p>
					<p>
						<button>慕课网</button>
						<button>小程序</button>
						<button>51CTO</button>
					</p>
					<p>
						<button>实验楼</button>
						<button>Spring</button>
					</p>
				</div>
			</div>
			<div class="yu" style="height: 300px">
				<p style="line-height: 40px">资讯·趋势</p>
				<div class="btn">
					<p><button>虎嗅</button>
						<button>技术调查</button>
						<button>摸鱼</button>
					</p>
					<p>
						<button>少数派</button>
						<button>WikeHom</button>
						<button>前端趋势</button>
					</p>
					<p>
						<button>京东</button>
						<button>淘宝</button>
						<button>淘宝</button>
					</p>
				</div>
			</div>
			<div class="yu" style="height: 300px">
				<p style="line-height: 40px">搜索·其他</p>
				<div class="btn" style="height: 180px">
					<p>
						<button>网盘搜索</button>
						<button>音乐搜索</button>
						<button>天猫</button>
					</p>
					<p>
						<button>代码图片</button>
						<button>Boos</button>
						<button>天猫</button>
					</p>
					<p>
						<button>京东</button>
						<button>淘宝</button>
					</p>
				</div>
			</div>
		</div>
</template>

<style scoped>
.yu {
				width: 30%;
				height: 400px;
				margin-top: 40px;
				text-align: center;
			}

			.btn p {
				
				margin-top: 5px;
			}

			.btn p button {
				width: 31.5%;
				height: 50px;
				background-color: #3c413e;
				opacity: 0.6;
				border: 0;
				color: white;
				float: left;
				margin-top: 5px;
				margin-right: 5px;
			}

			.inp {
				width: 400px;
				height: 40px;
				margin-top: 20px;
				position: relative;
				border: 1px gainsboro solid;
			}

			.inp button {
				position: absolute;
				height: 40px;
				border: 0;
			}
			
</style>

