<template>
  <div class="foods">
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar Makanan</h2>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <input v-model="search" type="text" class="form-control" placeholder="Cari Makanan" aria-label="Foods" @keyup="searchFood" />
            <span class="input-group-text" id="basic-addon1"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="row mb-3">
          <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
            <CardProduct :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
export default {
  name: "Foods",
  props: ["product"],
  components: {
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: '',
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood(){
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },


},
mounted(){
  axios
    .get("http://localhost:3000/products")
    .then((response) => this.setProduct(response.data))
    .catch((error) => console.log(error));
},

};
</script>

<style></style>
