<template>
  <div>
      <button type="button" @click="createSala">Sou corretor</button>
      <button type="button" @click="getSala">Sou Cliente</button>
        <br><br><br>

        {{ cpf }}
       <form @submit.prevent="checkCPF">
           <input type="text" v-model="cpf" placeholder="Insira seu CPF">
           <button type="submit">Enviar</button>
      </form>

       {{ cpf }} <br>
             {{ nome }}<br>
            {{ nascimento }}<br>
            {{ idade }}<br>
            {{ sexo }}<br>
            {{ uf }}<br>
            {{ cidade }}<br>
            {{ bairro }}<br>
            {{ rua }}<br>
            {{ numero }}<br>
            {{ cep }}<br>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import router from '../router/index';
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
         checkCPF: function(){
               this.$http.get('https://gateway.gr1d.io/sandbox/procob/v1/consultas/v2/L0001/'+ this.cpf, {
                headers: {
                    'X-Api-Key': 'b3e7c74c-5d76-46ed-9e98-da89ae257c7d',
                    'Accept': 'application/json'
                    }
                })
                .then(res => {
                    const body = res.body;
                    console.log(body)
                    if(body.code == '000' && body.message == 'Pesquisa feita com sucesso')
                    {
                        if(body.content.nome.existe_informacao == 'SIM'){
                            this.nome = body.content.nome.conteudo.nome;
                            this.nascimento = body.content.nome.conteudo.data_nascimento;
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