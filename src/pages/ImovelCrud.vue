<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
           <h1> ImovelCrud </h1>
           <v-data-table
              :headers="headers"
              :items="imoveis"
              :search="search"
              sort-by="id"
              class="elavation-1">
           </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios"

export default {
  name: "ImovelCrud",
  data: () => ({
    search:"",
    headers: [
      { text: "Id", value: "id", sortable: false},
      { text: "Bairro", value: "bairro"},
      { text: "Cidade", value: "cidade"},
      { text: "Valor de venda", value: "valor"},
      { text: "Área total", value: "areaTotal"},
      { text: "Área construída", value: "areaConstruida"}
    ],
    imoveis: [{
        id: 1,
        bairro: 'Centro',
        cidade: 'Campos dos Goytacazes',
        valor: 500000,
        areaTotal: 100,
        areaConstruida: 80 
    },
    {
        id: 2,
        bairro: 'Pecuaria',
        cidade: 'Campos dos Goytacazes',
        valor: 200000,
        areaTotal: 150,
        areaConstruida: 120 
    },
    {
        id: 3,
        bairro: 'Guarus',
        cidade: 'Campos dos Goytacazes',
        valor: 120000,
        areaTotal: 80,
        areaConstruida: 80 
    },
    {
        id: 4,
        bairro: 'Donana',
        cidade: 'Campos dos Goytacazes',
        valor: 140000,
        areaTotal: 140,
        areaConstruida: 100 
    }]
  }),
  methods: {
    inicializa() {
      axios.get('http://localhost:3000/imoveis')
        .then((response) => {
          this.users = response.data
        })
        .catch((error)=> console.log(error))
    }
  },
  created() {
    this.inicializa()
  }
};
</script>