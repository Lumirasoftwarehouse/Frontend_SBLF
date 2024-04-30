<template>
  <div class="template" id="visiMisi">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Visi -->
          <div class="vision-wrapper mb-5">
            <h3 class="text-primary text-center fw-bold">Visi</h3>
            <p>{{ dataVisi }}</p>
          </div>
        </div>
        <!-- Misi -->
        <div class="col-md-12">
          <h3 class="text-primary text-center fw-bold">Misi</h3>
          <div class="mission-wrapper">
            <div v-for="(mission, index) in dataMisi" :key="index" class="mission-item">
              <div class="mission-image" :style="{ backgroundImage: 'url(/img/misi/'+ index +'.png)' }"></div>
              <div class="mission-details">
                <h4>{{ mission.title }}</h4>
                <p class="mission-description">{{ mission.misi }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataVisi: {
      type: String,
      default: '',
    },
    dataMisi: {
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
.template {
  padding-top: 80px;
  background-color: #f8f9fa; /* Warna latar belakang disesuaikan */
  padding-bottom: 80px;
}

.text-primary {
  color: #220afa;
}

.vision-wrapper {
  padding: 20px;
}

.mission-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.mission-item {
  width: calc(50% - 20px); /* 50% width dengan jarak antar misi */
  margin-right: 20px;
  margin-bottom: 40px;
  display: flex;
}

.mission-item:last-child {
  margin-right: 0; /* Menghapus margin kanan dari misi terakhir */
}

.mission-image {
  width: 100px; /* Ukuran gambar disesuaikan */
  height: 100px; /* Ukuran gambar disesuaikan */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 20px;
  border-radius: 50%; /* Memperhalus gambar */
}

.mission-details {
  flex: 1;
}

.mission-details h4 {
  color: #220afa;
  margin-bottom: 10px;
}

.mission-description {
  margin: 0;
}

@media only screen and (max-width: 768px) {
  .mission-item {
    width: 100%; /* Misi akan memenuhi lebar pada layar kecil */
    margin-right: 0;
  }
}
</style>
