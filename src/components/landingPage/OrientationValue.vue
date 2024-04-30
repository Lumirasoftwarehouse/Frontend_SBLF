<template>
  <div class="orientationValue bg-white">
    <div class="container">
      <h2 class="text-center fw-bold">ORIENTATION VALUE</h2>
      <div class="row">
        <!-- Kolom pertama dengan satu card -->
        <div class="col-sm-6" v-if="dataValue.length > 0">
          <div class="card">
            <div class="card-content">
              <img :src="`https://backend-sblf.lumirainternational.com/storage/orientationValue/${dataValue[0].image}`" alt="Card Image" />
              <!-- <div class="blue-box">
              </div> -->
                <p class="text-center">{{dataValue[0].judul}}</p>
            </div>
          </div>
        </div>
        <!-- Kolom kedua dengan dua card horizontal -->
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6" v-for="(item, index) in dataValue.slice(1)" :key="index">
              <div class="card">
                <div class="card-content">
                  <img :src="`https://backend-sblf.lumirainternational.com/storage/orientationValue/${item.image}`" alt="Card Image" />
                  <!-- <div class="blue-box">
                  </div> -->
                    <p class="text-center">{{ item.judul }}</p>
                </div>
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
    dataValue: {
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
    
.orientationValue {
  padding: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  border: none;
  position: relative;
  margin-bottom: 20px;
}

.card-content {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.card img {
  width: 100%;
  height: auto;
  display: block;
}

.blue-box {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .col-sm-6 {
    flex: 1 0 100%; /* Untuk satu kartu per baris pada perangkat mobile */
  }
}
</style>
