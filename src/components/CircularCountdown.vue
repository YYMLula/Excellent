<!-- <template>
    <div class="clock-container">
      <div class="clock">
        <div class="hand" :style="{ transform: `rotate(${rotation}deg)` }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      timeRemaining: Number
    },
    data() {
      return {
        rotation: 0
      };
    },
    watch: {
      timeRemaining(newTime, oldTime) {
        const rotationStep = 360 / (oldTime * 1000); // Calculate rotation step
        const interval = setInterval(() => {
          this.rotation += rotationStep;
          if (this.rotation >= 360) {
            // If full circle reached, reset rotation
            this.rotation = 0;
            clearInterval(interval); // Stop the interval
          }
        }, 1000);
      }
    }
  };
  </script>
  
  <style scoped>
  .clock-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #8c8cff;
  }
  
  .clock {
    width: 95vmin;
    height: 95vmin;
    border: 5px solid rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    background: radial-gradient(circle at center, #e6e6ff 0%, #ccccff 100%);
    position: relative;
  }
  
  .hand {
    width: 2%;
    height: 50%;
    background-color: darkred;
    position: absolute;
    bottom: 50%;
    left: 49%;
    transform-origin: bottom;
  }
  </style>
   -->

   <template>
    <div class="clock-container">
      <img class="background-image" src="../assets/img/background3.jpg" alt="" />
      <div class="clock">
        <div class="hand" :style="{ transform: `rotate(${rotation}deg)` }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Unchanged script code...
  };
  </script>
  
  <style scoped>
  .clock-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: relative;
  }
  
  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
  
  .clock {
    width: 95vmin;
    height: 95vmin;
    border: 5px solid;
    border-color: blue white;
    border-radius: 50%;
    background: transparent;
    position: relative;
  }
  
  .hand {
    width: 2%;
    height: 50%;
    background-color: darkred;
    position: absolute;
    bottom: 50%;
    left: 49%;
    transform-origin: bottom;
  }
  </style>
  