<template>
  <div class="card card-product">
    <img :src="require(`../assets/img/${product.gambar}`)" class="card-img-top p-2 cardImg" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : {{ product.harga }}</p>
      <a href="#" class="btn btn-success"><font-awesome-icon icon="fa-solid fa-cart-shopping" class="me-2" />Pesan</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
