<template>
  <audio ref="audioPlayer">
  <source src="../../public/美梦是真.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>
  <div> 
      <div class="countdown-clock" v-if="showReminder">
        <!-- existing code for countdown clock -->
        <div class="reminder-container">
        <p class="reminder-text">您已经使用电脑超过30分钟咯，快起来休息五分钟放松眼睛吧！！！</p>
      </div>
      
      <!-- <div class="countdown-clock"> -->
      <div class="clock-container">
        <div class="clock">
          <div class="digit" v-for="(digit, index) in digits" :key="index">
            {{ digit }}
          </div>
        </div>
        
      </div>
      
    <!-- </div> -->
      </div>
      
    </div>
</template>

<script>
import { ref, computed } from 'vue'
// import CircularCountdown from './CircularCountdown.vue';
export default {
  // components: {
  //   CircularCountdown
  // },
  emits: ["click"], // 添加 "emits" 选项并包含 "click" 事件
  setup() {
    const audioPlayer = ref(null)
    const showReminder = ref(false)
    const timeRemaining = ref(0)

    const restTime = 5 * 60 * 1000 // 休息5分钟（毫秒）
    const workTime = 30 * 60 * 1000 // 工作30分钟（毫秒）

    const startReminderInterval = () => {
      setTimeout(() => {
        showReminder.value = true
        timeRemaining.value = restTime / 1000

        audioPlayer.value.play()

        const countdownInterval = setInterval(() => {
          timeRemaining.value -= 1;
          updateDigits();
        }, 1000)

        setTimeout(() => {
          clearInterval(countdownInterval)
          showReminder.value = false
          
          // Pause audio
      audioPlayer.value.pause()
      // Reset audio to the beginning
      audioPlayer.value.currentTime = 0

          startReminderInterval()
        }, restTime)
      }, workTime)
    }

    const updateDigits = () => {
  const minutes = Math.floor(timeRemaining.value / 60);
  const seconds = timeRemaining.value % 60;
  return [
    Math.floor(minutes / 10),
    minutes % 10,
    ":",
    Math.floor(seconds / 10),
    seconds % 10,
  ];
};

    const digits = computed(updateDigits);


    // 初始化提醒
    startReminderInterval()

    return { showReminder, digits,timeRemaining, audioPlayer }
  },
}
</script>

<style scoped>
.reminder-container {
  position: relative;
  display: inline-block;
}

.countdown-timer {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 8px 15px;
  font-size: 18px;
  border-radius: 5px;
}
.countdown-clock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    box-shadow: 0px 0px 10px black;
    font-family: "幼圆", sans-serif;
    background-image: url('../assets/img/background2.jpg');
  }
  
  .clock-container {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .clock {
    font-size: 10rem;
    display: flex;
  }
  
  .digit {
    margin: 0 0.5rem;
    color:aliceblue;
  }
  .reminder-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-family: "华文行楷", sans-serif;
    font-size: 80px;
  }
  
  .reminder-text {
    font-size: 40px;
    color:whitesmoke;
  }
  
  .button1{
    width: 120px;
    height: 50px;
    font-size: 35px;
    border: 1px solid whitesmoke;
    box-shadow: 0px 0px 4px black;
    background-color: transparent;
    color: azure;
    font-family: 华文行楷;
  }
</style>
