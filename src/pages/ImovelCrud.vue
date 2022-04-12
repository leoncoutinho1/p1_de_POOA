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
    imoveis: []
  }),
  methods: {
    inicializa() {
      axios.get('http://localhost:3000/imoveis')
        .then((response) => {
          this.imoveis = response.data
        })
        .catch((error)=> console.log(error))
    }
  },
  created() {
    this.inicializa()
  }
};
</script>