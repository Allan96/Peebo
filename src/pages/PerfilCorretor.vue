<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
              <Navbar class="margin" />
    <center class="mt-3"><img src="../assets/perfil.png" alt="" class="mt-5"></center>
    <p class="px-3 mt-3">
        Sou empreendedor, corretor de seguros e inovador. Sou especialista em Administração Financeira. Trabalho há 15 anos oferecendo soluções ideais em seguros. Sou casado, tenho 2 filhos e gosto muito de passar meu tempo livre curtindo a família.
    </p>
     <button type="button" class="btn btn-primary" @click="preForm">Entrar em contato</button>
  </div>
</div></div>

</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import router from '../router/index';
    export default {
        components: {
            Navbar,
        },
        data() {
            return {
                msg: '',
                messages: []
            }
        },
        created: function() {
        },
        methods: {
            preForm: function(){
             router.push('/form/cliente');
         }
        },
        watch: {}
    }
</script>

<style scoped lang="scss">
iframe{
    display: none!important;
    height: none!important;
    width: none!important;
}
  body {
        margin: 0;
        font-size: 16px;
    }
    .btn-primary{
    font-family: 'Source Sans Pro', sans-serif;
    background: #0C0C0C;
    border: 0;
    width: calc(100% + 32px);
    position: absolute;
    bottom: 0;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 -16px;
    padding: 24px 0;
    border-radius: 0;
}
    .col-12 {
        position: relative;
        padding: 0;
        div {
            position: relative;
            width: 100%;
        }
    }
     .row{
    padding: 0 16px;
    height: calc( 100vh - 56px);
}
    p{
        font-family: Source Serif Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
    }
</style>