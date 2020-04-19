<template>
<div>
  <div class="container d-sm-none">
      <div id="mobile" class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
      <Navbar />
      <img src="../assets/home.svg" alt="">
      <button type="button" class="btn btn-primary" @click="preForm">Entrar</button>
        </div>
        </div>
    </div>

          <div id="desktop" class="d-none d-sm-block"> 
              <nav class="navbar navbar-expand-sm navbar-dark">
                  <div class="container d-flex align-content-center">
                  <a class="navbar-brand" href="#"><img src="../assets/home.svg" alt=""></a>
                  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                      aria-expanded="false" aria-label="Toggle navigation"></button>
                  <div class="collapse navbar-collapse" id="collapsibleNavId">
                      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                          <li class="nav-item">
                              <a class="nav-link" href="#">Funcionalidade</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Preço</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Contato</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Cadastrar</a>
                          </li>
                        
                      </ul>
                  </div>
                  </div>
              </nav>

              <div class="container">
                  <div class="row d-flex align-content-center">
                      <div class="col-6">
                          <h1>
                              Comunique-se  <br>
                              com novos clientes <br>
                               em tempo real
                          </h1>
                          <h2>
                              Uma plataforma simples, desenvolvida para tornar sua interação com os clientes humanizada
                          </h2>
                      </div>

                      <div class="offset-2 col-4">
                          <div class="login">
                              <div class="form-group">
                                <label for="">Email</label>
                                <input type="text" class="form-control" placeholder="Digite o seu email">
                              </div>
                            <div class="form-group">
                                <label for="">Senha</label>
                                <input type="text" class="form-control" placeholder="Digite a sua senha">
                            </div>

                            <button type="button" class="btn btn-primary" @click="createSala">Entrar</button>
                      </div>
                </div>
                  </div>
              </div>
  </div></div>
</template>

<script>
import router from '../router/index';
import Cookies from 'js-cookie';
export default {
    data() {
        return{
            cpf: '',
            nome: '',
            nascimento: '',
            idade: '',
            sexo: '',
            uf: '',
            //ENDEREÇO
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            cep: '',
        }
    },
    created: function() {
    },
     methods: {
         preForm: function(){
             router.push('/form/cliente');
         },
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
    }
}
</script>
<style lang="scss">
iframe{
    display: none!important;
    height: none!important;
    width: none!important;
}
#mobile.row{
        height: calc( 100vh - 56px);
}
#mobile{
    > .row{
        height: calc( 100vh - 56px);
    }
    .btn-primary{
        font-family: 'Source Sans Pro', sans-serif;
        background: #0C0C0C;
        border: 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        text-transform: uppercase;
        font-weight: 600;
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
}

#desktop{
    font-family: Source Sans Pro;
    border-bottom: 8px solid #0BACA6;
    .navbar{
        position: fixed;
        width: 100%;
        background: transparent;
        .navbar-nav .nav-link{
            color: #777777;
            font-weight: 600;
            font-size: 16px;
            margin: 0 16px;

        }
    }
    .row{
        height: calc(100vh - 8px);
    }
    h1{
        font-weight: bold;
        font-size: 40px;
        line-height: 100%;
    }
    h2{
        margin-top: 32px;
        font-family: Source Serif Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 120%;
    }

    .login{
        width: 100%;
        background: #0C0C0C;
        padding: 40px;
        input{
            font-family: Source Serif Pro;
            background: transparent;
            color: white;
            border: 0;
            padding: 0;
        }
        label{
            text-transform: uppercase;
            color: white;
            font-weight: 600;
        }
        .btn{
            background: white;
            color: #0C0C0C;
            width: 100%;
            border: 0;
            font-family: Source Sans Pro;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 120%;
            padding: 8px 0;
        }
    }
}
</style>