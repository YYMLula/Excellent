<template>
    <div> 
      <div class="countdown-clock">
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
      <button class="button1" @click="startCountdown">倒计时</button>
    <!-- </div> -->
      </div>
      
    </div>
    
  </template>
  <script>
  export default {
    data() {
      return {
        countdown: 300,
        digits: [0, 0, ":", 0, 0],
        intervalId: null,
      };
    },
    methods: {
      startCountdown() {
        clearInterval(this.intervalId);
        this.countdown = 300;
        this.updateDigits();
        this.intervalId = setInterval(() => {
          this.countdown--;
          this.updateDigits();
          if (this.countdown === 0) {
            clearInterval(this.intervalId);
          }
        }, 1000);
      },
      updateDigits() {
        const minutes = Math.floor(this.countdown / 60);
        const seconds = this.countdown % 60;
        this.digits = [
          Math.floor(minutes / 10),
          minutes % 10,
          ":",
          Math.floor(seconds / 10),
          seconds % 10,
        ];
      },
    },
  };
  </script>
  
  <style>
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
  