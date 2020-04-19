<template>
  <div class="container">
      <div id="step-1" class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
              <Navbar class="margin" />
              <iframe src="https://hackagrid.daily.co/HDKZyN9afz8AeCje8Fe9" frameborder="0"></iframe>
              <div id="perguntas" class="mt-5">
                  <div id="pergunta-1">
                      <p>
                      Você possui plano de saúde atualmente?
                  </p>
                  <legend>
                      Para sabermos qual o seguro ideal para você, escolha uma das opções abaixo.
                  </legend>

                  <div class="form-row" @click="pergunta(2)">
                      <div class="col">
                          <button type="button" class="btn btn-secondary">SIM</button>
                      </div>
                      <div class="col">
                          <button type="button" class="btn btn-secondary">NÃO</button>
                      </div>
                  </div>
                  </div>
                  <div id="pergunta-2" @click="pergunta(3)" style="display: none">
                      <p>
                      Que tipo de Plano de Saúde você procura?
                  </p>
                  <legend>
                      Para sabermos qual o seguro ideal para você, escolha uma das opções abaixo.
                  </legend>
    <div style="white-space: nowrap;overflow: auto;">
                  <div class="form-row mt-2">
                      <div class="col">
                          <button type="button" class="btn btn-secondary">Individual</button>
                      </div>
                      <div class="col">
                          <button type="button" class="btn btn-secondary">Familiar</button>
                      </div>
                      <div class="col">
                          <button type="button" class="btn btn-secondary">Empresarial</button>
                      </div>
                  </div>
                  </div>
                  </div>
                  
              </div>
              <div id="step-2" style="display: none">
                  <div class="card-fim align-self-end">
                      <p>
                          Chamada encerrada
                      </p>
                      <legend class="mt-5">
                          Que tal conhecer outros produtos com o seu perfil? Veja as ofertas.
                      </legend>
                      <button type="button" class="btn btn-primary" @click="ofertas">Ver ofertas <img src="../assets/arrow.svg" alt=""></button>
                  </div>
              </div>
              <div id="ofertas" class="flex-column" style="display: none">
                  <div class="card-fim align-self-end">
                      <legend>
                          <b>
                            MONGERAL AEGON
                          </b>
                      </legend>
                      <p>
                          Diária de Incapacidade temporária
                      </p>
                      <legend>
                          A Diária por Incapacidade Temporária garante um pagamento para a incapacidade temporária causada por acidente ou doença.
                      </legend>
                      <button type="button" class="btn btn-primary" @click="perfil">Conhecer <img src="../assets/arrow.svg" alt=""></button>
                  </div>

                  <div class="card-fim align-self-end">
                      <legend>
                          <b>
                            MONGERAL AEGON
                          </b>
                      </legend>
                      <p>
                          Invalidez por acidente
                      </p>
                      <legend>
                       O benefício pode ser solicitado a partir
da ocorrência de um sinistro, que se caracteriza pelo acontecimento do evento previsto e coberto pelo seguro, como um acidente, invalidez, doença grave, afastamento do trabalho, entre outros.
                      </legend>
                      <button type="button" class="btn btn-primary" @click="perfil">Conhecer <img src="../assets/arrow.svg" alt=""></button>
                  </div>
                  <div class="card-fim align-self-end">
                      <legend>
                          <b>
                            MONGERAL AEGON
                          </b>
                      </legend>
                      <p>
                          A Previdência Private Top
                      </p>
                      <legend>
                         Para quem quer investir com segurança e tem foco no rendimento da sua reserva financeira, o Private Top é uma boa opção. Com uma das menores taxas de administração do mercado (0,7%) e sem taxa de carregamento na entrada, este plano de previdência foi criado para atender a grandes investidores.
                      </legend>
                      <button type="button" class="btn btn-primary" @click="perfil">Conhecer <img src="../assets/arrow.svg" alt=""></button>
                  </div>
              </div>
          </div>
  </div>
</div>

</template>

<script>
    import DailyIframe from '@daily-co/daily-js';
    const callFrame = DailyIframe.createFrame(document.getElementById('live'));
    import Cookies from 'js-cookie';
    import Navbar from '../components/Navbar.vue'
    import router from '../router/index';
    export default {
        components: {
            Navbar,
        },
        data() {
            return {
                url: Cookies.get('url'),
                msg: '',
                messages: []
            }
        },
        created: function() {
            callFrame.join({
                url: this.url
            });
            callFrame.updateParticipant('local', {
                setAudio: false,
                setVideo: false
            });
        },
        methods: {
            perfil: function() {
                  router.push('/perfil/corretor');
            },
             ofertas: function() {
                    document.getElementById("step-2").style.display = "none";
                    document.getElementById("ofertas").style.display = "flex";
            },
            pergunta: function(num){
                if(num == 2){
                    document.getElementById("pergunta-1").style.display = "none";
                    document.getElementById("pergunta-2").style.display = "block";
                }
                else if(num == 3){ 
                    callFrame.leave();
                    document.getElementById("pergunta-2").style.display = "none";
                    document.getElementById("step-2").style.display = "flex";
                }

            }
        },
        watch: {}
    }
</script>

<style scoped lang="scss">
    body {
        margin: 0;
        font-size: 16px;
    }
    
    iframe {
        top: 56px;
        width: calc(100% + 32px)!important;
        height: 320px!important;
        position: relative!important;
        right: auto!important;
        bottom: auto!important;
        margin: 0px -16px!important;
        border: 0px!important;
        display: block!important;
    }
    .btn-primary{
    background: none;
    color: #0C0C0C;
    display: flex;
    align-items: center;
    font-weight: 600;
    border: 0;
    position: absolute;
    bottom: 16px;
    padding: 0;
    img{
        margin-left: 8px;
    }
    &:active, &:hover, &:focus{
        box-shadow: none;
        outline: none;
    }
}
    .btn-secondary {
        position: relative;
        padding: 8px 32px;
        background: #FFFFFF;
        border: 1px solid #0C0C0C;
        color: #0C0C0C;
        width: 100%;
        border-radius: 0;
        margin-top: 16px;
        font-weight: 600;
        &:active,
        &:hover,
        &:focus {
            background: #0C0C0C;
            border: 1px solid #0C0C0C;
            color: #FFFFFF;
            box-shadow: none;
            outline: none;
        }
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
    height: calc( 100vh - 76px);
}
    #step-2, #ofertas{
    height: 100%;
    background: rgba(0, 0, 0, 0.24);
    position: absolute;
    bottom: 0;
    z-index: 99;
    padding: 32px;
        .card-fim{
            background: white;
            padding: 30px;
            height: 262px;
            padding-bottom: 70px;
            margin-bottom: 32px;
            p{
                font-weight: 600;
                font-size: 24px;
            }
        }
    }
    #ofertas{
        overflow-y: auto;
        .card-fim{
            height: auto;
        }
    }
    #perguntas {
            width: 100%;
            position: absolute;
            bottom: 0;
        legend {
            color: #777777;
        }
        #pergunta-2 {
            .form-row {
                position: relative;
                width: 30em;
                overflow-x: auto;
                white-space: nowrap;
            }
        }
    }
    
    legend {
        font-size: 1rem;
        line-height: 14px;
        font-family: 'Source Serif Pro';
        margin-bottom: 0;
    }
    
    p {
        font-family: 'Source Sans Pro';
        font-size: 1rem;
        margin-bottom: 5px;
        font-weight: bold;
    }
</style>