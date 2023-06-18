<template>
  <!-- 画布  去掉可全局，但部分按钮按不了pointer-events: none-->
     <canvas  @click="onClickBody" class="fireworks" width="667" style="top: 0px; left: 0px; pointer-events: none; position: absolute;" height="307" ></canvas>
    <!-- <Loginone /> -->
    <!-- <DemoOne  />  -->
    <!-- <div>
      <div v-if="showFirstPage">
        <DemoOne />
      </div>
      <div v-else>
        <HelloWorld />
      </div>
    </div> -->
    <TimeTs @click="onClickBody" />
    <div @click="onClickBody">
      <HelloWorld  />
    </div>
    
    <!-- <login-dl /> -->
</template>

<script>
// {/* <script> */}
import HelloWorld from './components/HelloWorld.vue'
import TimeTs from './components/TimeTs.vue'
import { initFireworks } from './fireworks.js';//导入烟花函数
import { rainbowCursor } from "cursor-effects";//鼠标尾翼
new rainbowCursor;
//import DemoOne from './components/DemoOne.vue'
// import login-dl from './components/login-dl.vue'
// export default{
//   data(){
//     return{
//       showFirstPage:true
//     }
//   },
//   methods:{
//     switchPage(){
//       this.showFirstPage=!this.showFirstPage
//     }
//   }
// }
export default {
  components:{
    HelloWorld,
    TimeTs
  },
  setup(){

  },
  // 点击出字效果
  data() {
    return {
      a: [
        "睡觉", "睡觉", "睡觉", "吃饭", "睡觉", "还是睡觉", "吃饭", 
      ],
      a_idx: 0
    }
  },
  
  mounted() {
    initFireworks();//在 mounted() 生命周期钩子内调用 initFireworks 函数 烟花效果
    // 클릭 이벤트를 요소에 연결합니다.将点击事件连接到元素上，点击出字效果
    setTimeout(() => {
      this.$refs.buryit && this.$refs.buryit.removeAttribute("onclick");
    }, 1000)
  },
methods: {
onClickBody(event) {//点击出字效果
      const text = this.a[this.a_idx];
      this.a_idx = (this.a_idx + 1) % this.a.length;
      
      const x = event.pageX;
      const y = event.pageY;

      const el = document.createElement('span');
      el.textContent = text;
      el.style.zIndex = 5;
      el.style.top = (y - 20) + 'px';
      el.style.left = x + 'px';
      el.style.position = 'absolute';
      el.style.fontWeight = 'bold';
      el.style.color = '#FF0000';

      document.body.appendChild(el);
      
      const animation = el.animate([
        { top: y - 20 + 'px', opacity: 1 },
        { top: y - 180 + 'px', opacity: 0 }
      ], {
        duration: 3000,
        fill: 'forwards'
      });

      // 애니메이션이 끝난 후 요소 제거动画结束后移除元素
      animation.finished.then(() => {
        el.remove();
      });
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
background: url(./assets/img/background1.png);
/* 背景图完全覆盖界面 */
background-size: cover;
}
/* 全局光标修改 */
*{
  cursor:url("./assets/img/Arrow.cur"),auto!important
}
</style>
