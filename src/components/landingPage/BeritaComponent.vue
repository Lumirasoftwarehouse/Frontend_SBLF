<template>
  <div class="container" id="berita">
    <div class="row">
      <h2 class="berita-title fw-bold text-center mt-5 mb-4">Berita</h2>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="(item, index) in dataBerita" :key="index">
        <div class="card">
          <router-link
:to="{ name: 'detail-berita', params: { id: index } }"
              >
                <img :src="`https://backend-sblf.lumirainternational.com/storage/berita/${item.image}`" class="card-img-top" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{ item.judul }}</h5>
                  <!-- <p class="card-text">{{ item.deskripsi }}</p> -->
                </div>
              </router-link
            >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBerita: {
      type: Array,
      default: () => [],
    },
  },
};
</script>


<style scoped>
.container{
      font-family: Helvetica, Arial, sans-serif !important;
      color: black;
    }

.card {
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.card-text {
  color: #666;
}
</style>
