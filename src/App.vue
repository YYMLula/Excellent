<template>
  
     <canvas  class="fireworks" width="667" style="top: 0px; left: 0px; pointer-events: none; position: absolute;" height="307" ></canvas>
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
    <div @click="onClickBody">
      <HelloWorld  />
    </div>
    
    <!-- <login-dl /> -->
</template>

<script>
// {/* <script> */}
import HelloWorld from './components/HelloWorld.vue'
import { initFireworks } from './fireworks.js';

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
    HelloWorld
  },
  setup(){

  },
  data() {
    return {
      a: [
        "富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治",
        "爱国", "敬业", "诚信", "友善",
      ],
      a_idx: 0
    }
  },
  
  mounted() {
    initFireworks();
    // 클릭 이벤트를 요소에 연결합니다.
    setTimeout(() => {
      this.$refs.buryit && this.$refs.buryit.removeAttribute("onclick");
    }, 1000);
  },
methods: {
onClickBody(event) {
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

      // 애니메이션이 끝난 후 요소 제거
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
</style>
