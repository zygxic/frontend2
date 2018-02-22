<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>

    <app-social></app-social>
    <app-footer></app-footer>

  </div>
</template>






<script>
import Footercom from './components/Footercom'
import Socialcom from './components/Socialcom'

export default {
  components: {
    'app-footer':Footercom,
    'app-social':Socialcom
  }
  
}




</script>

<style lang="scss">
@import './assets/styles/base';
@import './assets/slick/slick.css';
@import './assets/slick/slick-theme.css';



</style>
