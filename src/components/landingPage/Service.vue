<template>
  <div class="globalTrends bg-white">
  <div class="container">
    <h2 class="text-center">SERVICES</h2>
    <div class="card-container">
      <div class="card" v-for="item in dataTrend" :key="item.id">
        <img :src="`https://backend-sblf.lumirainternational.com/storage/globalTrend/${item.image}`" alt="Card Image" />
        <h5 class="fw-bold">{{ item.judul }}</h5>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: {
    dataTrend: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  text-align: center;
  border: none;
}

.card img {
  max-width: 100%;
  height: auto;
}


/*  */

.globalTrends {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

@media (max-width: 992px) {
  .card {
    flex: 1 0 calc(50% - 20px); /* Dua kartu per baris pada tampilan tablet */
  }
}

@media (max-width: 576px) {
  .card {
    flex: 1 0 calc(100% - 20px); /* Satu kartu per baris pada tampilan mobile */
  }
}
</style>
