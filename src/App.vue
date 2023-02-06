<template>
  <router-view/>
  <AppNavigation :themeColor="themeColor"></AppNavigation>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';
export default{
  name :'App',
  components:{
    AppNavigation
  },
  data(){
    return{
      themeColor: 'rgba(89, 173, 225, Alpha);'
    }
  },

}
</script>


<style>
body{
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.themeColorFull{
  background: rgba(89, 173, 225, 1);
}
.themeColorHalf{
  background: rgba(89, 173, 225, 0.5);
}
.themeColorQuoter{
  background: rgba(89, 173, 225, 0.25);
}
.themeColorNano{
  background: rgba(89, 173, 225, 0.05);
}
.router-link-active{
  background: rgba(89, 173, 225, 1);
}
</style>
