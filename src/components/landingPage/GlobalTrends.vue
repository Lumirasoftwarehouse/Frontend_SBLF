<template>
  <div class="globalTrends bg-white">
    <div class="container">
      <h2 class="text-center">GLOBAL TRENDS</h2>
      <div class="card-container">
        <div class="card" v-for="item in dataTrend" :key="item.id">
          <img :src="`https://backend-sblf.lumirainternational.com/storage/globalTrend/${item.image}`" alt="Card Image" />
          <div class="blue-box">
            <p>{{ item.judul }}</p>
          </div>
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
.globalTrends {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  position: relative;
  flex: 1 0 calc(33.33% - 20px); /* Tiga kartu per baris pada tampilan desktop */
  margin-bottom: 20px;
}

.card img {
  width: 100%;
  height: auto;
  display: block;
}

.blue-box {
  position: absolute;
  bottom: -15px; /* Menyesuaikan tinggi box text yang ingin ditampilkan */
  left: 50%;
  transform: translateX(-50%);
  width: 80%; /* Menyesuaikan lebar box text */
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
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
