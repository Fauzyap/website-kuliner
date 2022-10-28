<template>
  <!-- desktop -->
  <div class="hero">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1>
                <strong>Delicious Food, </strong> <br />
                In Your Gadget
              </h1>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/img/eating.png" alt="" width="500" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col mb-4">
          <img src="../assets/img/eating.png" alt="" width="500" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1>
                <strong>Delicious Food, </strong> <br />
                In Your Gadget
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
