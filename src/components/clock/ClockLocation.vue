<template>
    <div class="clock-location-cont">
        <div class="clock-location">
            <p class="clock-location-text">{{ fixedTimeZone }}</p>
        </div>
    </div>
</template>

<script>
export default{
    name:'ClockLocation',
    data:()=>{
        return{
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
    },
    computed:{
        fixedTimeZone(){
            return this.timeZone.toString().replace("/", " | ")
        }
    }
}
</script>

<style>
.clock-location-cont{
    margin-top: 0.85cm;
}
.clock-location-text{
    font-family: 'Poppins';
    text-align: center;
    font-size: 1em;
}
</style>
