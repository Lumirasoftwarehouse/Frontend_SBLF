<template>
  <div class="container pt-4" id="about">
          <h2 class="text-center mt-4 mb-4 fw-bold">Tentang Kami</h2>
          <div class="row">
            <div class="col-sm-7 mt-2">
              <p>{{dataAbout}}</p>
            </div>
            <div class="col-sm-5">
              <img src="/img/about.png" alt="about">
            </div>
          </div>
  </div>
</template>


<script>
export default {
  props: {
    dataAbout: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
    .container{
      font-family: Helvetica, Arial, sans-serif !important;
      color: black;
    }
    img{
      height: 250px !important;
    }
@media only screen and (max-width: 600px) {
  h2 {
    font-size: 35px !important;
  }
}
.customCard {
  border: none;
  box-shadow: 1px 1px 5px 2px #888888;
}

.customRow {
  padding: 10px 50px 10px 50px;
}

.ourservice {
  margin-top: 50px;

  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */

  color: #000064;
}
</style>
