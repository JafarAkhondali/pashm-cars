<template xmlns:v-touch="http://www.w3.org/1999/xhtml">
    <div id="app">
        <img id="water"
             src='@/assets/water.svg'
             class="icon-circle"
             v-touch-class="'active'"
             v-touch:start="()=> {water(true)}"
             v-touch:end="()=> {water(false)}"
        >

        <div
                id="horn"
                class="icon-circle"
                v-touch-class="'active'"
                v-touch:start="()=> {horn(true)}"
                v-touch:end="()=> {horn(false)}"
        >
            <i class="fas fa-bullhorn"></i>
        </div>

        <div
                id="engine"
                class="icon-circle tap"
                v-touch:tap="()=> {engine(true)}"
        >
            <i class="fas fa-power-off"></i>
        </div>


        <div
                id="assistant"
                class="icon-circle"
                v-touch-class="'recording'"
                v-touch:start="()=> {assistant(true)}"
                v-touch:end="()=> {assistant(false)}"
        >
            <i class="fas fa-microphone"></i>
        </div>

        <div
                id="lock"
                class="icon-circle"
                v-touch:tap="()=> {lockdoors(true)}"
        >
            <i v-if="this.lockdoors" class="fas fa-lock" ></i>
            <i v-else class="fas fa-lock-open" ></i>
        </div>

    </div>
</template>

<script>
    import "vue2-touch-events"
    import * as CarService from "./services/CarService";
    import {mapGetters} from "vuex";

    export default {
        name: 'app',
        data: ()=>{
            return {
                engineStarting: false,
                isRecording: false,
            }
        },
        methods:{
            async water(state){
                await CarService.water(state);
            },
            async horn(state){
                await CarService.horn(state);
            },
            async engine(state){
                if(this.engineStarting) return;

                try{
                    this.engineStarting = true;
                    let engineStatusRequest = await CarService.engineStart(state);
                    let engineStatus = engineStatusRequest.data.status;
                    this.$store.dispatch('engineStatus', engineStatus);
                }finally {
                    this.engineStarting = false;
                }
            },
            async assistant(state){
                // Ask permission

                if(state){
                    //Start recording
                }else{
                    //Finish recording  & Send data
                }

            },
            async lockdoors(){
                try{
                    const lockStatusRequest = await CarService.lockDoors(!this.doorsLocked);
                    let lockStatus = lockStatusRequest.data.locked;
                    this.$store.dispatch('lockStatus', lockStatus);
                }catch (e) {
                    //  :)
                }
            },
            async windowControll(position, state){
                await CarService.windowControll(position, state);
            },

        },
        computed:{
            ...mapGetters([
                'doorsLocked',
                'engineOn',
            ])
        }
    }
</script>


<style scoped lang="scss">
    $primary-color: rgba(21, 101, 192,.7);
    $bg1: #1a242f;
    $bg2: rgba(21, 101, 192,.3);
    $bg3: rgba(21, 101, 192,.6);
    $borderColor: rgba(0, 131, 143,1.0);
    $text: #efefef;
    $icon-size: 200px;
    $assistant-color: rgba(106, 27, 154,1.0);
    $lock-color: rgba(255, 143, 0,1.0);


    @keyframes aniamteBoxShadow {
        from {
            box-shadow: 0 0 10px 4px $assistant-color;
        }
        to {
            box-shadow: 0 0 40px 13px $assistant-color;
        }
    }


    #engine{
        background: rgba(198, 40, 40,1.0);
        position: absolute;
        top: 10%;
        left: calc(50% - #{$icon-size/2} );
        box-shadow: 0 0 0 0;
    }

    #lock{
        position: absolute;
        bottom: 10%;
        left: calc(50% - #{$icon-size/2} );
        background: $lock-color;
    }

    .icon-circle{
        transition: all .3s;

        &.tap{
            box-shadow: 0px 0px 7px 1px $text;
        }

        &.active{
            border-color: $borderColor;
            &.tap{
                box-shadow: 0px 0px 7px 1px $borderColor;
            }
        }

        i{
            margin-top: 30px; font-size: 9em
        }
        background: $primary-color;
        border-radius: 50%;
        width: $icon-size;
        height: $icon-size;
        border: solid 3px $text;
    }

    #water{
        position: absolute;
        right: 15%;
        top: 2%;
    }

    #horn{
        position: absolute;
        left: 15%;
        top: 2%;
    }

    #assistant{
        position: absolute;
        top: 40%;
        left: calc(50% - #{$icon-size/2} );
        background: $assistant-color;


        &.recording{
            animation: aniamteBoxShadow 2s infinite alternate;
        }

    }


    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, $bg1, $bg2, $bg3);
        color: $text;
    }



</style>
