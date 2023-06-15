<template>
  <div>
    <div>
    <!-- The rest of your template code -->
    <CircularCountdown v-if="showReminder" :timeRemaining="timeRemaining" />
  </div>
    <div v-if="showReminder" class="reminder-container">
      <p class="countdown-timer">{{ timeRemaining }}s</p>
      <img src="../assets/img/background2.jpg" alt="休息提醒" />
    </div>
  </div>
</template>

<script>
import { ref} from 'vue'
import CircularCountdown from './CircularCountdown.vue';
export default {
  components: {
    CircularCountdown
  },
  setup() {
    const showReminder = ref(false)
    const timeRemaining = ref(0)

    const restTime = 0.2 * 60 * 1000 // 休息5分钟（毫秒）
    const workTime = 0.1 * 60 * 1000 // 工作30分钟（毫秒）

    const startReminderInterval = () => {
      setTimeout(() => {
        showReminder.value = true
        timeRemaining.value = restTime / 1000
        const countdownInterval = setInterval(() => {
          timeRemaining.value -= 1
        }, 1000)

        setTimeout(() => {
          clearInterval(countdownInterval)
          showReminder.value = false
          startReminderInterval()
        }, restTime)
      }, workTime)
    }

    // 初始化提醒
    startReminderInterval()

    return { showReminder, timeRemaining }
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
</style>
