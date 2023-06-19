<template>
    <div>
      <el-button @click="fetchRandomText">获取随机汉字</el-button>
      <el-input v-model="randomText"></el-input>
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

    return {
      randomText,
      fetchRandomText
    }
  },
}
</script>
  