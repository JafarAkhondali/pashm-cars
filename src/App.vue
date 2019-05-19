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
      }
    },
    methods:{
      async water(state){
        await CarService.water(state);
      },
      async horn(state){
        await CarService.horn(state);
      },
      async engineStart(state){
        if(this.engineStarting) return;

        try{
          this.engineStarting = true;
          await CarService.engineStart(state);
        }finally {
          this.engineStarting = false;
        }

      },
      async assistant(state){
        // Ask permission
        if(this.engineStarting) return;
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

  .icon-circle{
    transition: all .3s;
    &.active{
      border-color: $borderColor;
    }
    i{
      margin-top: 30px; font-size: 9em
    }
    background: $primary-color;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    border: solid 3px $text;
  }

  #water{
    position: absolute;
    right: 25%;
    top: 2%;
  }

  #horn{
    position: absolute;
    left: 25%;
    top: 2%;
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
