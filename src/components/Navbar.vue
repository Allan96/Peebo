<template>
  <div>
      <div id="navbar">
          <img src="../assets/logo.svg" alt="" @click="home">
      </div>
  </div>
</template>

<script>
import router from '../router/index';
export default {
 methods: {
            home: function(){
             router.push('/');
         }
        }
}
</script>

<style scoped lang="scss">
.margin{
  #navbar{
    width: calc(100% + 32px);
    left: -16px;
  }
}
#navbar{
    width: 100%;
    background: #000000;
    padding: 16px 32px;
    position: absolute;
    top: 0;
}

</style>