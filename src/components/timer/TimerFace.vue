<template>
    <div class="timerFace-cont">
        <div class="timerFace">
            <div class="timerFace-item">
                <input ref="hrs" @blur="hrsValidator" class="timerFace-item-input" type="number" :value=timerData[2] max="24" min="00"/>
            </div>
            <div class="timerFace-item-divider"><p>:</p></div>
            <div class="timerFace-item">
                <input ref="min" @blur="minValidator" class="timerFace-item-input" type="number" :value=timerData[1] max="60" min="00"/>
            </div>
            <div class="timerFace-item-divider"><p>:</p></div>
            <div class="timerFace-item">
                <input ref="sec" @blur="secValidator"  class="timerFace-item-input" type="number" :value=timerData[0] max="60" min="00"/>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:['action'],
    data:()=>{
        return{
            timerData :['00','00','00'],
            timerActive:false,
            hrsInterval : setInterval(()=>{},600000),
            minInterval : setInterval(()=>{},60000),
            secInterval : setInterval(()=>{},1000)
        }
    },
    mounted(){
        this.actionDeamon()
    },
    methods:{
        actionDeamon(){
            setInterval(()=>{
                if (!this.timerActive){
                    if(this.action == "start"){
                        this.timerActive = true
                        this.startTimer()
                    }
                    if(this.action == "play"){
                        this.timerActive = true
                        this.playTimer()
                    }
                    if(this.action == "stop"){
                        this.timerActive = false
                        this.stopTimer()
                    }
                }
                else{
                    if(this.action == "pause"){
                        this.timerActive = false
                        this.pauseTimer()
                    }
                    if(this.action == "stop"){
                        this.timerActive = false
                        this.stopTimer()
                    }
                }
            },1)
        },
        secValidator(){
            if(this.$refs.sec.value <=9){
                this.$refs.sec.value = '0'+this.$refs.sec.value
            }
            if(this.$refs.sec.value <=0){
                this.$refs.sec.value = '00'
            }
            else{}
            this.timerData[0] =   this.$refs.sec.value
        },
        minValidator(){
            if(this.$refs.min.value <=9){
                this.$refs.min.value = '0'+this.$refs.min.value
            }
            if(this.$refs.min.value <=0){
                this.$refs.min.value = '00'
            }
            else{}
            this.timerData[1] =  this.$refs.min.value
        },
        hrsValidator(){
            if(this.$refs.hrs.value <=9){
                this.$refs.hrs.value = '0'+this.$refs.hrs.value
            }
            if(this.$refs.hrs.value <=0){
                this.$refs.hrs.value = '00'
            }
            else{}
            this.timerData[2] =  this.$refs.hrs.value
        },
        startTimer(){
            if(this.timerData[2]>0){
                clearInterval(this.hrsInterval)
                this.hrsInterval = setInterval(()=>{this.timerData[2] = this.timerData[2] - 1},600000)
            }
            if(this.timerData[1]>0){
                clearInterval(this.hrsInterval)
                this.minInterval = setInterval(()=>{this.timerData[1] = this.timerData[1] - 1},60000)
            }
            if(this.timerData[0]>0){
                clearInterval(this.hrsInterval)
                this.secInterval = setInterval(()=>{this.timerData[0] = this.timerData[0] - 1},1000)
            }

        },
        pauseTimer(){
            clearInterval(this.hrsInterval)
            clearInterval(this.minInterval)
            clearInterval(this.secInterval)

        },
        playTimer(){
            if(this.timerData[2]>0){
                this.hrsInterval = setInterval(()=>{this.timerData[2] = this.timerData[2] - 1},600000)
            }
            if(this.timerData[1]>0){
                this.hrsInterval = setInterval(()=>{this.timerData[1] = this.timerData[1] - 1},60000)
            }
            if(this.timerData[0]>0){
                this.hrsInterval = setInterval(()=>{this.timerData[0] = this.timerData[0] - 1},1000)
            }
        },
        stopTimer(){
            this.timerData = ['00','00','00']
            clearInterval(this.hrsInterval)
            clearInterval(this.minInterval)
            clearInterval(this.secInterval)

        },
    },
    updated(){
        switch(true){
            case (this.timerData[2] > 0):
                this.$emit('activateBtn')
                break
            case (this.timerData[1] > 0):
                this.$emit('activateBtn')
                break
            case (this.timerData[0] > 0):
                this.$emit('activateBtn')
                break
            default:
                this.$emit('deactivateBtn')
        }

        this.timerData[0] ==9 ? this.timerData[0]='09': null
        this.timerData[0] ==8 ? this.timerData[0]='08': null
        this.timerData[0] ==7 ? this.timerData[0]='07': null
        this.timerData[0] ==6 ? this.timerData[0]='06': null
        this.timerData[0] ==5 ? this.timerData[0]='05': null
        this.timerData[0] ==4 ? this.timerData[0]='04': null
        this.timerData[0] ==3 ? this.timerData[0]='03': null
        this.timerData[0] ==2 ? this.timerData[0]='02': null
        this.timerData[0] ==1 ? this.timerData[0]='01': null

        this.timerData[1] ==9 ? this.timerData[1]='09': null
        this.timerData[1] ==8 ? this.timerData[1]='08': null
        this.timerData[1] ==7 ? this.timerData[1]='07': null
        this.timerData[1] ==6 ? this.timerData[1]='06': null
        this.timerData[1] ==5 ? this.timerData[1]='05': null
        this.timerData[1] ==4 ? this.timerData[1]='04': null
        this.timerData[1] ==3 ? this.timerData[1]='03': null
        this.timerData[1] ==2 ? this.timerData[1]='02': null
        this.timerData[1] ==1 ? this.timerData[1]='01': null

        this.timerData[2] ==9 ? this.timerData[2]='09': null
        this.timerData[2] ==8 ? this.timerData[2]='08': null
        this.timerData[2] ==7 ? this.timerData[2]='07': null
        this.timerData[2] ==6 ? this.timerData[2]='06': null
        this.timerData[2] ==5 ? this.timerData[2]='05': null
        this.timerData[2] ==4 ? this.timerData[2]='04': null
        this.timerData[2] ==3 ? this.timerData[2]='03': null
        this.timerData[2] ==2 ? this.timerData[2]='02': null
        this.timerData[2] ==1 ? this.timerData[2]='01': null

        this.timerData[0] <=0 ? this.timerData[0]='00': null
        this.timerData[1] <=0 ? this.timerData[1]='00': null
        this.timerData[2] <=0 ? this.timerData[2]='00': null

        if(this.timerData[1]<1 && this.timerData[2]>=1){
            this.timerData[1] = 59
        }
        if(this.timerData[0]<1 && this.timerData[1]>=1){
            this.timerData[0] = 59
        }

        if(this.timerData[2] == '00' && this.timerData[1] == '00' && this.timerData[0] == '00'){
            this.$emit('deactivateBtn')
            this.$emit('stopBtn')
            this.timerActive = false
            clearInterval(this.hrsInterval)
            clearInterval(this.minInterval)
            clearInterval(this.secInterval)
        }

    }
}
</script>


<style scoped>
.timerFace{
    position: relative;
    display: flex;
}
.timerFace-item:nth-child(1){
    margin-left: auto;
}
.timerFace-item:nth-last-child(1){
    margin-right: auto;
}
.timerFace-item-input{
    border: 0px;
    background: transparent;
    outline: none;
    width: auto;
    font-size: 3.5em;
    font-family: 'Lato';
    text-align: center;
    font-weight: 300;
}

.timerFace-item-divider{
    display: flex;
    align-items: center;
    height: 4em;
}
.timerFace-item-divider p{
    font-weight: 300;
    font-size: 3em;
    margin: 0px;
    font-family: Lato;
    
}
</style>