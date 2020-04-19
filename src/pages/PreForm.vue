<template>
  <div class="container">
      <div id="step-1" class="row justify-content-center">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <Navbar class="margin" />
        <p class="title"><b>Dados inicias</b></p>
        <legend>
            Para começarmos sua consultoria, precisamos de alguns dados. Vamos lá?
        </legend>

      <div class="form-group mt-5">
        <label for="">EMAIL</label>
        <input type="text" class="form-control" placeholder="email@empresa.com.br" v-model="email">
      </div>
       <div class="form-group mt-2">
        <label for="">CPF</label>
        <input type="text" class="form-control" placeholder="0000000000" v-model="cpf">
      </div>

      <button type="button" class="btn btn-secondary" @click="checkCPF">
          Próximo Passo <img src="../assets/arrow.svg" alt="">
      </button>
        </div>
    </div>
     <div id="step-2" class="row justify-content-center" style="display: none">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <Navbar class="margin" />
        <p class="title"><b>Dados de registro</b></p>
        <legend>
            Seus dados estão corretos? Aproveite para atualizá-los.
        </legend>

      <div class="form-group mt-5">
        <label for="">NOME</label>
        <input type="text" class="form-control" placeholder="Seu nome" v-model="nome">
      </div>
       <div class="form-group mt-2">
        <label for="">DATA DE NASCIMENTO</label>
        <input type="text" class="form-control" placeholder="00/00/0000" v-model="nascimento">
      </div>
       <div class="form-group mt-2">
        <label for="">Nacionalidade</label>
        <input type="text" class="form-control" placeholder="00/00/0000" v-model="nacionalidade">
      </div>
      <div class="form-group mt-2">
        <label for="">situação cadastral</label>
        <input type="text" class="form-control" placeholder="----" v-model="situacao">
      </div>

      <button type="button" class="btn btn-secondary" @click="step(3)">
          Próximo Passo <img src="../assets/arrow.svg" alt="">
      </button>
        </div>
    </div>
    <div id="step-3" class="row justify-content-center"  style="display: none">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <Navbar class="margin" />
        <p class="title"><b>Tipo de seguro</b></p>
        <legend>
            Qual o tipo de seguro que você busca?
        </legend>
       <div class="form-group mt-3">
        <button type="button" class="btn btn-primary tipo-seguro text-left mt-5">
            <p>Saúde</p>
            <legend>Para cuidar de você e de quem você ama, pensado na sua saúde e no seu bem estar.</legend>
        </button>

         <button type="button" class="btn btn-primary tipo-seguro text-left mt-4">
            <p>Vida</p>
            <legend>Para ajudar você e seus familiares em situações delicadas como acidentes, doenças graves ou falecimento.</legend>
        </button>
      </div>

      <button type="button" class="btn btn-secondary" @click="step(4)">
          Próximo Passo <img src="../assets/arrow.svg" alt="">
      </button>
        </div>
    </div>
     <div id="step-4" class="row justify-content-center" style="display: none">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <Navbar class="margin" />
        <p class="title"><b>Endereço</b></p>
        <legend>
            Agora, preencha as informações abaixo para encontrar seu corretor ideal.
        </legend>

      <div class="form-row mt-4">
          <div class="col-4">
            <label for="">UF</label>
            <input type="text" class="form-control" placeholder="UF" v-model="uf">
          </div>
          <div class="col-8">
            <label for="">cidade</label>
            <input type="text" class="form-control" placeholder="Cidade" v-model="cidade">
          </div>
      </div>
      <div class="form-group mt-2">
        <label for="">cep</label>
        <input type="text" class="form-control" placeholder="CEP" v-model="cep">
      </div>
       <div class="form-group mt-2">
        <label for="">bairro</label>
        <input type="text" class="form-control" placeholder="Bairro" v-model="bairro">
      </div>
     <div class="form-row mt-2">
          <div class="col-8">
            <label for="">rua</label>
            <input type="text" class="form-control" placeholder="Rua" v-model="rua">
          </div>
          <div class="col-4">
            <label for="">nº</label>
            <input type="text" class="form-control" placeholder="Seu nome" v-model="numero">
          </div>
      </div>

      <button type="button" class="btn btn-primary" @click="step(5)">
          escolha um corretor
      </button>
        </div>
    </div>
     <div id="step-5" class="row justify-content-center" style="display: none">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 d-flex flex-column justify-content-center">
            <Navbar class="margin" />
            <center>
        <img src="../assets/loading.svg" alt="">
        </center>
        </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import router from '../router/index';
import Navbar from '../components/Navbar.vue'
export default {
     components: {
    Navbar,
  },
    data() {
        return{
            cpf: '',
            nome: '',
            nascimento: '',
            idade: '',
            sexo: '',
            uf: '',
            email: '',
            //ENDEREÇO
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            cep: '',
            nacionalidade: '',
            situacao: '',
        }
    },
    created: function() {
    },
     methods: {
         step: function(num){
                if(num == 3){
                    document.getElementById("step-2").style.display = "none";
                    document.getElementById("step-3").style.display = "flex";
                }
                else if(num == 4){
                    document.getElementById("step-3").style.display = "none";
                    document.getElementById("step-4").style.display = "flex";
                }
                else if(num == 5){
                    document.getElementById("step-4").style.display = "none";
                    document.getElementById("step-5").style.display = "flex";
                    setTimeout(() => {
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
                    }, 1000);
                }
         },
         checkCPF: function(){
             if(this.cpf){
               this.$http.get('https://gateway.gr1d.io/sandbox/procob/v1/consultas/v2/L0001/'+ this.cpf, {
                headers: {
                    'X-Api-Key': 'b3e7c74c-5d76-46ed-9e98-da89ae257c7d',
                    'Accept': 'application/json'
                    }
                })
                .then(res => {
                    const body = res.body;
                    console.log(body);
                    document.getElementById("step-1").style.display = "none";
                    document.getElementById("step-2").style.display = "flex";
                    if(body.code == '000' && body.message == 'Pesquisa feita com sucesso')
                    {
                        if(body.content.nome.existe_informacao == 'SIM'){
                            this.nome = body.content.nome.conteudo.nome;
                            this.nascimento = body.content.nome.conteudo.data_nascimento;
                            this.nacionalidade = body.content.nome.conteudo.estrangeiro.pais_origem.origem;
                            this.situacao = body.content.nome.conteudo.situacao_receita;
                            this.idade = body.content.nome.conteudo.idade;
                            this.sexo = body.content.nome.conteudo.sexo;
                            this.uf = body.content.nome.conteudo.uf;
                        }
                        if(body.content.pesquisa_enderecos.existe_informacao == 'SIM'){
                              this.cidade = body.content.pesquisa_enderecos.conteudo[0].cidade;
                              this.bairro = body.content.pesquisa_enderecos.conteudo[0].bairro;
                              this.rua = body.content.pesquisa_enderecos.conteudo[0].rua;
                              this.numero = body.content.pesquisa_enderecos.conteudo[0].numero;
                              this.cep = body.content.pesquisa_enderecos.conteudo[0].cep;
                        }
                    }

                })
                .catch((error) => console.log(error));
             }
             else {
                 alert('Insira seu CPF')
             }

         },
    }
}
</script>
<style scoped lang="scss">
iframe{
    display: none!important;
    height: none!important;
    width: none!important;
}
body{
    font-size: 16px;
}
.title{
    margin-top: 70px
}
p{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.25rem;
    margin-bottom: 5px;
}
label{
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
}
input{
    border: 0;
    padding: 0;
    &:hover, &:active, &:focus{
        box-shadow: none;
        outline: none;
    }
}
legend{
    font-size: 1rem;
    line-height: 14px;
    font-family: 'Source Serif Pro';
    margin-bottom: 0;
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
.tipo-seguro{
    position: relative;
    padding: 16px 32px;
    background: #FFFFFF;
    border: 1px solid #0C0C0C;
    color: #0C0C0C;
    legend{
        font-weight: normal;
        color: #777777;
    }
    &:active, &:hover, &:focus{
    background: #0C0C0C;
    border: 1px solid #0C0C0C;
    color: #FFFFFF;
    box-shadow: none;
    outline: none;
    }
}


.btn-secondary{
    background: none;
    color: #0C0C0C;
    display: flex;
    align-items: center;
    font-weight: 600;
    border: 0;
    position: absolute;
    bottom: 0;
    img{
        margin-left: 8px;
    }
    &:active, &:hover, &:focus{
        box-shadow: none;
        outline: none;
    }
}
</style>