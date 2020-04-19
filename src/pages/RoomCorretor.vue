<template>
  <div>
      {{ url }}
  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    data() {
        return{
            url: Cookies.get('url'),
        }
    },
    created: function() {
    },
     methods: {
    }
}
</script>

<style>

</style>