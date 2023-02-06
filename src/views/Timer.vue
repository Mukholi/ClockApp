<template>
  <div class="timer themeColorNano">
    <div class="spacer"></div>
    <TimerFace :action=action @activateBtn="activateBtn" @deactivateBtn="deactivateBtn"></TimerFace>
    <TimerControlBtn :active="btnActive" @start="startTimer" @pause="pauseTimer" @play="playTimer" @stop="stopTimer" ></TimerControlBtn>
    <div class="spacer"></div>
  </div>
</template>
<script>
import TimerFace from '@/components/timer/TimerFace.vue';
import TimerControlBtn from '@/components/WatchControlBtn.vue';
export default {
  components:{
    TimerFace,
    TimerControlBtn
  },
  data:()=>{
    return{
      btnActive: false,
      action:''
    }
  },
  methods:{
    activateBtn(){
      this.btnActive = true
    },
    deactivateBtn(){
      this.btnActive = false
    },
    startTimer(){
      this.action = "start"
    },
    pauseTimer(){
      this.action = "pause"
    },
    playTimer(){
      this.action = "play"
    },
    stopTimer(){
      this.action = "stop"
    }
  }
}
</script>

<style scoped>
.timer{
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2cm);
}
.stopwatchBtn{
  margin-top: 10px;
}
.spacer{
  position: relative;
  height: 100%;
}
</style>