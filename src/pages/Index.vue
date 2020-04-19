<template>
  <div>
      <button type="button" @click="createSala">Sou corretor</button>
      <button type="button" @click="getSala">Sou Cliente</button>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import router from '../router/index';
export default {
    data() {
        return{

        }
    },
    created: function() {
    },
     methods: {
         createSala: function() {
            const request = require("request");
            const options = {
                method: 'POST',
                url: 'https://api.daily.co/v1/rooms',
                headers: {
                    'content-type': 'application/json',
                    authorization: 'Bearer cef572fd8cb8e65b8eadf2bf8d4cb122116a6d3532a28ac8fc26a1adf1ca66e4'
                }
            };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                let res = JSON.parse(body);
                Cookies.set('url', res.url, { expires: 1 });
                console.log(res.url);
                router.push('/room/corretor');
            });

         },
         getSala: function() {
            this.$http.get('https://api.daily.co/v1/rooms', {
                headers: {
                    'authorization': 'Bearer cef572fd8cb8e65b8eadf2bf8d4cb122116a6d3532a28ac8fc26a1adf1ca66e4',
                    'Accept': 'application/json'
                    }
                })
                .then(res => {
                    console.log(res.body.data[0].url);
                    Cookies.set('url', res.body.data[0].url, { expires: 1 });
                    router.push('/room/cliente');
                })
                .catch((error) => console.log(error));
         }
    }
}
</script>
<style>

</style>