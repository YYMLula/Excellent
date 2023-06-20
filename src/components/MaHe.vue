<template>
    <div>
      <el-button @click="fetchRandomText">获取随机汉字</el-button>
      <el-input v-model="randomText"></el-input>
    </div>
    <div>
    <el-button @click="fetchTodaysHoroscope">今日星座运势</el-button>
    <div>
      <p>分数: {{ horoscopeScore }}</p>
      <p>描述: {{ horoscopeDescription }}</p>
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
  