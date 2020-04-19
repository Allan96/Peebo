<template>
  <div>
      <div id="teste"></div>
      <!-- {{ url }} -->
  <button type="button" @click="sair">Sair da Live</button>
  </div>

</template>

<script>
import DailyIframe from '@daily-co/daily-js';
const callFrame = DailyIframe.createFrame(document.getElementById('teste'));
import Cookies from 'js-cookie';
export default {
    data() {
        return{
            url: Cookies.get('url'),
        }
    },
    created: function() {
            callFrame.join({ url: this.url });
            callFrame.updateParticipant('local', { styles: {
    cam: {
      video: {
        visibility: 'hidden',
        top: 0,
        width: 0,
        height: 0
      }
    }
  },setAudio: false,setVideo: false});
    },
     methods: {
         sair: function(){
             callFrame.leave();
            // console.log(callFrame.participants());
             alert('você saiu')
         }
    }
}
</script>

<style>
body{
    margin: 0;
}
iframe{
    width: 100%!important;
    height: calc(100vh - 300px)!important;
    position: relative!important;
    right: auto!important;
    bottom: auto!important;
    margin: 0px!important;
    border: 0px!important;
    display: block!important;
}

</style>