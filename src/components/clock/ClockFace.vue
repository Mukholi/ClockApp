<template>
    <div class="clockFace-cont">
        <div class="clockFace">
            <p class="clockFace-hours"><span v-if="currentDate.getHours() <= 9">0</span>{{ currentDate.getHours() }}</p>
            <p class="clockFace-minutes"><span v-if="currentDate.getMinutes() <= 9">0</span>{{ currentDate.getMinutes() }}</p>
            <p class="clockFace-seconds"><span v-if="currentDate.getSeconds() <= 9">0</span>{{ currentDate.getSeconds() }}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ClockFace',
  data: ()=>{
    return{
    currentDate: new Date()
    }
  },
  mounted(){
    this.updateCurrentDate()
  },
  methods:{
    updateCurrentDate(){
        setInterval(()=>{
            this.currentDate = new Date()
        },1000)
    }
  },
}
</script>

<style>
.clockFace-cont{
    position: relative;
    width: 100%;
    height: auto;
}
.clockFace-cont .clockFace{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    /* border: 1px solid red; */
}
.clockFace-cont .clockFace p{
    font-family: 'Lato';
    font-size: 6em;
    padding: 0px;
    margin: 0px;
    font-weight: 200;
    text-align: center;
}
.clockFace-cont .clockFace .clockFace-minutes{
    margin-top: -15px;
}
.clockFace-cont .clockFace .clockFace-seconds{
    font-size: 1.5em;
    margin-left: 1.5cm;
    font-weight: 400;
    opacity: 0.25;
}
</style>