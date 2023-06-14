<template>
			
			<p class="p1">
			世界很暗，但是你来了
		</p>
		<div class="descripution center-align">
			<span id="subtitle"></span>
			<span class="typed-cursor" aria-hidden="true">|</span>
			<!-- <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11/lib/typed.min.js"></script> -->
		</div>
		<p class="p2"><a href="./index1.html">开始阅读</a></p>
</template>
<style>
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
        '../components/img/background1.jpg',
        '../components/img/background2.jpg',
        '../components/img/background3.jpg'
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
      }, 5000)
    }
  }
}
</script>