<template>
  <div class="stopwatch themeColorNano">
    <div class="spacer"></div>
    <StopwatchFace :action="action" class="stopwatchFace"></StopwatchFace>
    <StopwatchControlBtn :active="btnActive" class="stopwatchBtn" @start="startStopwatch" @play="playStopwatch" @pause="pauseStopwatch" @stop="stopStopwatch"></StopwatchControlBtn>
    <div class="spacer"></div>
  </div>
</template>
<script>
import StopwatchFace from '@/components/stopwatch/StopwatchFace.vue';
import StopwatchControlBtn from '@/components/WatchControlBtn.vue'
export default{
  data:()=>{
    return
  },
  components:{
    StopwatchFace,
    StopwatchControlBtn
  },
  data:()=>{
    return{
      action:"",
      btnActive:true
    }
  },
  methods:{
    startStopwatch(){
      this.action = "start"
    },
    playStopwatch(){
      this.action = "play"
    },
    pauseStopwatch(){
      this.action = "pause"
    },
    stopStopwatch(){
      this.action = "stop"
    },
  }
}
</script>
<style scoped>
.stopwatch{
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2cm);
}
.spacer{
  position: relative;
  height: 100%;
}
</style>
 