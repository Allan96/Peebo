<template>
  <div>
      <img src="../assets/ficha.png" alt="">
      <iframe id="teste" :src="url" frameborder="0" allow="microphone; camera; autoplay"></iframe>
  </div>

</template>

<script>
import DailyIframe from '@daily-co/daily-js';
import Cookies from 'js-cookie';
const callFrame = DailyIframe.createCallObject();
export default {
    data() {
        return{
            url: Cookies.get('url'),
        }
    },
    created: function() {
            callFrame.join({ url: this.url });
            callFrame.updateParticipant('local', {
                setAudio: true,
                setVideo: true
            });
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
    height: calc(100vh + 96px)!important;
    position: relative!important;
    right: auto!important;
    bottom: auto!important;
    margin: 0px!important;
    border: 0px!important;
    display: block!important;
    top: -30px;
}
img{
    position: fixed;
    z-index: 999;
    left: 50px;
    top: 50px;
}

</style>