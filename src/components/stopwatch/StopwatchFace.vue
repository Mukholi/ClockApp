<template>
    <div class="stopwatchFace-cont">
        <div class="stopwatchFace">
            <div class="stopwatchFaceItem" v-if="stopwatchDays > 0">
                <p class="stopwatchFaceItemNumber"><span v-if="stopwatchDays <= 9">0</span>{{ stopwatchDays }}</p>
                <p class="stopwatchFaceItemDescription">Days</p>
            </div>
            <div class="stopwatchFaceItem" v-if="stopwatchHours > 0">
                <p class="stopwatchFaceItemNumber"><span v-if="stopwatchHours <= 9">0</span>{{ stopwatchHours }}</p>
                <p class="stopwatchFaceItemDescription">Hrs</p>
            </div>
            <div class="stopwatchFaceItem" v-if="stopwatchMinutes > 0">
                <p class="stopwatchFaceItemNumber"><span v-if="stopwatchMinutes <= 9">0</span>{{ stopwatchMinutes }}</p>
                <p class="stopwatchFaceItemDescription">Mins</p>
            </div>
            <div class="stopwatchFaceItem">
                <p class="stopwatchFaceItemNumber"><span v-if="stopwatchSeconds <= 9">0</span>{{ stopwatchSeconds }}</p>
                <p class="stopwatchFaceItemDescription">Secs</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:['action'],
    data:()=>{
        return{
            stopwatchRunning:false,
            stopwatchSeconds:0,
            stopwatchMinutes:0,
            stopwatchHours:0,
            stopwatchDays:0,
            stopwatchCache:[],
            stopWatchTimeInterval: setInterval(()=>{},1000)
        }
    },
    mounted(){
        this.actionDeamon()
    },
    methods:{
        actionDeamon(){
            setInterval(()=>{
                if(this.stopwatchRunning){
                    if(this.action == "pause"){
                        this.pauseStopwatch()
                    }
                    if(this.action == "stop"){
                        this.stopStopwatch()
                    }
                }
                else{
                    if(this.action == "start"){
                        this.startStopwatch()
                    }
                    if(this.action == "play"){
                        this.playStopwatch()
                    }
                    if(this.action == "stop"){
                        this.stopStopwatch()
                    }
                }
            },1)
        },
        updateStopwatch(){
            this.stopWatchTimeInterval = setInterval(()=>{
                if(this.stopwatchRunning){
                    this.stopwatchSeconds = this.stopwatchSeconds + 1
                    if(this.stopwatchSeconds == 60){
                        this.stopwatchSeconds = 0
                        this.stopwatchMinutes = this.stopwatchMinutes + 1
                    }
                    if(this.stopwatchMinutes == 60){
                        this.stopwatchMinutes = 0
                        this.stopwatchHours = this.stopwatchHours + 1
                    }
                    if(this.stopwatchHours == 24){
                        this.stopwatchHours = 0
                        this.stopwatchDays = this.stopwatchDays + 1
                    }
                }
            },1000)
        },
        startStopwatch(){
            this.$emit('start')
            this.stopwatchRunning = true
            this.stopwatchSeconds = 0
            this.stopwatchMinutes = 0
            this.stopwatchHours = 0
            this.stopwatchDays = 0
            clearInterval(this.stopWatchTimeInterval)
            this.updateStopwatch()
        },
        playStopwatch(){
            this.$emit('play')
            this.stopwatchRunning = true
            this.stopwatchSeconds =  this.stopwatchCache[0]
            this.stopwatchMinutes =  this.stopwatchCache[1]
            this.stopwatchHours =  this.stopwatchCache[2]
            this.stopwatchDays =  this.stopwatchCache[3]
            this.stopwatchRunning = true
            clearInterval(this.stopWatchTimeInterval)
            this.updateStopwatch()
        },
        pauseStopwatch(){
            this.$emit('pause')
            this.stopwatchRunning = false
            this.stopwatchCache[0] = this.stopwatchSeconds
            this.stopwatchCache[1] = this.stopwatchMinutes
            this.stopwatchCache[2] = this.stopwatchHours
            this.stopwatchCache[3] = this.stopwatchDays
            this.stopwatchRunning = false
            clearInterval(this.stopWatchTimeInterval)
            this.stopwatchSeconds =  this.stopwatchCache[0]
            this.stopwatchMinutes =  this.stopwatchCache[1]
            this.stopwatchHours =  this.stopwatchCache[2]
            this.stopwatchDays =  this.stopwatchCache[3]  
        },
        stopStopwatch(){
            this.$emit('stop')
            clearInterval(this.stopWatchTimeInterval)
            this.stopwatchRunning = false
            this.stopwatchSeconds = 0
            this.stopwatchMinutes = 0
            this.stopwatchHours = 0
            this.stopwatchDays = 0
            this.stopwatchCache = []

        }
    }
}
</script>

<style>
.stopwatchFace-cont{
    position: relative;
    width: 100%;
    height: auto;
}
.stopwatchFace-cont .stopwatchFace{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    /* border: 1px solid red; */
}
.stopwatchFace-cont .stopwatchFace p{
    font-family: 'Lato';
    font-size: 6em;
    padding: 0px;
    margin: 0px;
    font-weight: 200;
    text-align: center;
}

.stopwatchFaceItem{
    position: relative;
    display: flex;
    align-items: center !important;
}
.stopwatchFaceItemNumber{
    margin-left: auto !important;
}
.stopwatchFaceItemDescription{
    font-size: 0.8em !important;
    font-weight: 500 !important;
    margin-right: auto !important;
    margin-left: 5px !important;
    
}
</style>