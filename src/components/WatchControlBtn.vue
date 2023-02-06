<template>
    <div class="stopwatchControl">
        <button @mousedown="startBtnThresholdCalc" @mouseup="stopBtnThresholdCalc" class="stopwatchControlBtn">{{ btnText }}</button>
    </div>
</template>
<script>
export default{
    props:['active'],
    data:()=>{
        return {
            isPlaying:false,
            btnText: 'start',
            btnHoldThreshold:0,
            thresholdInterval: Object,
        }
    },
    updated(){
        if(this.active){

        }
        else{
            this.btnText = 'start'
        }
    },
    methods:{
        togglePlaying(e){
            //console.log(e)
            if(this.isPlaying){
                this.btnText = 'pause'
            }
            else{
                this.btnText = 'play'
            }
            this.isPlaying = ! this.isPlaying
        },
        startBtnThresholdCalc(){
            if(this.active){
                this.btnHoldThreshold = 0
                this.thresholdInterval = setInterval(()=>{
                    this.btnHoldThreshold = this.btnHoldThreshold + 1
                    if (this.btnHoldThreshold > 200){
                        this.isPlaying = false
                        this.btnText = "start"
                    }
                },1)
            }
        },
        stopBtnThresholdCalc(){
            if(this.active){
                clearInterval(this.thresholdInterval)
                if(this.btnHoldThreshold < 200){
                    this.$emit(this.btnText)
                    this.isPlaying = ! this.isPlaying
                    this.isPlaying ? this.btnText = "pause" : this.btnText = "play"
                }
                else{
                    this.$emit('stop')
                }
            }
        },

    }
}
</script>

<style>
    .stopwatchControl{
        padding: relative;
        margin-top: 10px;
    }
    .stopwatchControlBtn{
        border-radius: 1000cm;
        outline: none;
        border: 0px;
        padding: 15px 30px;
        text-transform: uppercase;
        font-size: 0.7em;
    }
</style>