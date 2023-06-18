<template>
 <!-- 轮播图 -->
		<div class="slider" >
    <transition-group name="fade" tag="div" class="slider__container" :css="false">
    <div v-for="(image, index) in images" :key="index" class="slider__item" :style="{ backgroundImage: 'url(' + image + ')' }" v-show="currentIndex === index"
></div>
	</transition-group>
  </div>	
	<p class="p1">
	世界很暗，但是你来了
</p>

<!-- 动态字 -->
<div class="description center-align">
	<span id="subtitle"></span>
    <!-- <span class="typed-cursor" aria-hidden="true">|</span> -->
  </div>
	<!-- <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11/lib/typed.min.js"></script> -->

<p class="p2"><a href="../home">开始阅读</a></p>
</template>
<style>
* {
margin: 0;
padding: 0;
}



a {
color: white;
text-decoration: none;
}

.head {
/* 宽度占满 */
width: 100%;
height: 80px;
background-color: #41454D;
/* 透明度 */
opacity: 0.7;
}

.headin {
width: 80%;
margin: auto;
/* flex布局 */
display: flex;
/* 水平居中 */
justify-content: space-between;
line-height: 80px;
color: white;
}

.headl {
font-size: 28px;
}

.headr {
width: 300px;
display: flex;
justify-content: space-between;
font-family: youyuan;
}

.headr img {
width: 20px;
height: 20px;
float: left;
margin-top: 30px;
}

.p1 {
color: white;
font-size: 60px;
text-align: center;
line-height: 500px;
font-family: youyuan;
margin-bottom: -200px;
}

.p2 {
text-align: center;
/* 边框1px */
border: 1px solid white;
font-size: 20px;
width: 180px;
line-height: 60px;
border-radius: 30px;
margin: auto;
}
.slider {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: -1;
}

.slider__container {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

.slider__item {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-size: cover;
background-position: center;

transition: opacity 1s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
opacity: 0;
}
/* .description {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  color: #ffffff; 
} */
.center-align {
	display: flex;
  justify-content: center;
  height: 100px; 
  /* align-items: center; */
  color: #ffffff;
}
*{
  cursor:url("../assets/img/Arrow.cur"),auto!important
}
</style>

<script>
import Typed from 'typed.js';//动态字
// import { rainbowCursor } from "cursor-effects";
// new rainbowCursor;

export default {
data() {
return {
images: [
require('../assets/img/background1.png'),
require('../assets/img/background2.jpg'),
require('../assets/img/background3.jpg')
],
currentIndex: 0,
intervalId: null,
}
},
mounted() {
	// this.checkScreenWidthAndLoadScript();
this.startSlider()//轮转图
this.initTypedJs();//动态字
setTimeout(() => {
      this.$refs.buryit && this.$refs.buryit.removeAttribute("onclick");
    }, 2000);
},
methods: {
	// checkScreenWidthAndLoadScript() {
    //   const windowWidth = window.innerWidth;
    //   if (windowWidth > 768) {
    //     // 동적으로 스크립트를 추가합니다.
    //     const script = document.createElement('script');
    //     script.type = 'text/javascript';
    //     script.src = '/libs/others/star.js';
    //     document.body.appendChild(script);
    //   }
    // },
	initTypedJs() {//动态字
      new Typed('#subtitle', {
        strings: [
          '我们要做的是鼓励孩子的内在动机，有技巧地表扬，不去表扬天分或才智。对孩子积极投入的过程进行表扬，如他们的努力与策略，他们的专注、坚持与进步。其中最重要的一条就是，要赞美孩子的努力、策略和选择而非天赋。',
          '对某个信念倔强的坚持可能会困住你，对痛苦自恋式的沉溺会困住你，反反复复的苦痛和无助会困住你，最后是你心里那个无形的笼子把你锁住了',
          '远离笼子，跳出来，不要把自己变得无助，那些美好的向往是为了把你变得美好，你的向往很重要，你的梦想很重要，但都比不上你变得更好。', // 원하는 콘텐츠를 포함한 여러 문자열을 첨부할 수 있습니다
        ],
        typeSpeed: 70, // 캐릭터 입력 속도 조절输入速度调节
        backSpeed: 50, // 입력 해제 속도 조절调整解除输入速度
        loop: true, // 계속 반복할지 여부是否要重复
      });
    },
  
startSlider() {//轮转图
this.intervalId = setInterval(() => {
this.currentIndex = (this.currentIndex + 1) % this.images.length
}, 5000)
},


  


}
}
</script>




<!-- <template>
	<div class="carousel-wrapper">
	
	<div class="carousel-content">
		
	<el-carousel height="640px" interval="3000">
		<p class="p1">
			世界很暗，但是你来了
		</p>13
    <el-carousel-item v-for="(item, index) in images" :key="index">
    <img :src="item" :alt="'images' + (index + 1)"/>
    </el-carousel-item>
  </el-carousel>
	</div>
</div>
  </template>
  
  <script>
  export default {
	data() {
	return {
		images: [
		require('@/assets/img/background1.png'),
        require('@/assets/img/background2.jpg'),
        require('@/assets/img/background3.jpg')
		],
			};
	},
  };
  </script>

  <style scoped>
 

.carousel-content {
  flex-grow: 1;
}
  .el-carousel__item h3 {
	color: #475669;
	opacity: 0.75;
	line-height: 150px;
	margin: 0;
	text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
  }
  </style> -->
  

<!-- <style>
* {
	margin: 0;
	padding: 0;
}

body {
	background: url(../components/img/background1.png);
	/* 背景图完全覆盖界面 */
	background-size: cover;
}

a {
	color: white;
	text-decoration: none;
}

.head {
	/* 宽度占满 */
	width: 100%;
	height: 80px;
	background-color: #41454D;
	/* 透明度 */
	opacity: 0.7;
}

.headin {
	width: 80%;
	margin: auto;
	/* flex布局 */
	display: flex;
	/* 水平居中 */
	justify-content: space-between;
	line-height: 80px;
	color: white;
}

.headl {
	font-size: 28px;
}

.headr {
	width: 300px;
	display: flex;
	justify-content: space-between;
	font-family: youyuan;
}

.headr img {
	width: 20px;
	height: 20px;
	float: left;
	margin-top: 30px;
}

.p1 {
	color: white;
	font-size: 60px;
	text-align: center;
	line-height: 500px;
	font-family: youyuan;
}

.p2 {
	text-align: center;
	/* 边框1px */
	border: 1px solid white;
	font-size: 20px;
	width: 180px;
	line-height: 60px;
	border-radius: 30px;
	margin: auto;
}
.slider {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	}

	.slider__container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	}

	.slider__item {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	opacity: 0;
	transition: opacity 1s ease-in-out;
	}

	.fade-enter-active,
	.fade-leave-active {
	transition: opacity 1s ease-in-out;
	}

	.fade-enter,
	.fade-leave-to {
	opacity: 0;
	}
</style>

<script>
export default {
  data() {
    return {
      images: [
        '../assets/img/background1.jpg',
        '../assets/img/background2.jpg',
        '../assets/img/background3.jpg'
      ],
      currentIndex: 0,
      intervalId: null
    }
  },
  mounted() {
    this.startSlider()
  },
  methods: {
    startSlider() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length
      }, 1000)
    }
  }
}
</script> -->