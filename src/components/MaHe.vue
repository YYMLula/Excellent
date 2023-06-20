<template>
    <div>
      <el-button class="fi" @click="fetchRandomText">
        今天吃什么
      </el-button>
      <p class="f2">今天吃：{{ randomText }}</p>
    </div>
    <div>
    <el-button class="fi" @click="fetchTodaysHoroscope">今日星座运势</el-button>
    <div>
      <p class="f2">今日运势: {{ horoscopeScore }} {{ horoscopeDescription }}</p>
    </div>
  </div>
  </template>
<script>
import { ref } from 'vue'
import '../mock/index.js'
import axios from 'axios'
export default {
  setup() {
    const randomText = ref('')

    const fetchRandomText = async () => {
      try {
        const response = await axios.get('/api/getRandomText')
        randomText.value = response.data.randomText
      } catch (err) {
        console.log(err)
      }
    }

    const horoscopeScore = ref('')
    const horoscopeDescription = ref('')

    const fetchTodaysHoroscope = async () => {
      try {
        const response = await axios.get('/api/getTodaysHoroscope')
        horoscopeScore.value = response.data.score
        horoscopeDescription.value = response.data.description
      } catch (err) {
        console.log(err)
      }
    }

    return {
      randomText,
      fetchRandomText,
      horoscopeScore,
      horoscopeDescription,
      fetchTodaysHoroscope,
    }
    },
  }

</script>

<style>
.fi{
  color:coral;
  font-size: 30px;
  font-family: 宋体;
  background-color: antiquewhite;
}
.f2{
  font-family: 宋体;
  text-shadow: #000;
  font-size: 25px;
  color:darkgoldenrod;
}
/* body {
background: url(../assets/img/background3.jpg);
background-size: cover;
} */
</style>
  