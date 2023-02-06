<template>
  <div class="clock themeColorNano">
    <div class="spacer"></div>
    <ClockFace></ClockFace>
    <ClockLocation></ClockLocation>
    <div class="spacer"></div>

  </div>
</template>
<script>
import ClockFace from '@/components/clock/ClockFace.vue';
import ClockLocation from '@/components/clock/ClockLocation.vue'
export default {
  name: 'Clock',
  components:{
    ClockFace,
    ClockLocation
  }
}

</script>
<style scoped>
.clock{
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