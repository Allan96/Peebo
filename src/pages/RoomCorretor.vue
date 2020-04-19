<template>
  <div>
      <img src="../assets/ficha.png" alt="">
      <iframe :src="url" frameborder="0" allow="microphone; camera; autoplay"></iframe>
  </div>

</template>

<script>
import DailyIframe from '@daily-co/daily-js';
import Cookies from 'js-cookie';
const callFrame = DailyIframe;
export default {
    data() {
        return{
            url: Cookies.get('url'),
        }
    },
    created: function() {
            callFrame.join({ url: this.url });
    },
     methods: {
    }
}
</script>

<style scoped>
body{
    margin: 0;
}
iframe{
    width: 100%!important;
    height: 100vh!important;
    position: relative!important;
    right: auto!important;
    bottom: auto!important;
    margin: 0px!important;
    border: 0px!important;
    display: block!important;
}
img{
    position: fixed;
    z-index: 999;
    left: 50px;
    top: 200px;
}

</style>