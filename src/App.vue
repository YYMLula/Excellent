<template>
    
    <!-- <Loginone /> -->
    <DemoOne  /> 
    <!-- <div>
      <div v-if="showFirstPage">
        <DemoOne />
      </div>
      <div v-else>
        <HelloWorld />
      </div>
    </div> -->
    <HelloWorld  />
    <login-dl />
</template>

<script setup>
// {/* <script> */}
import HelloWorld from './components/HelloWorld.vue'
import DemoOne from './components/DemoOne.vue'
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
