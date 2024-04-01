<template>
  <div class="template" id="visiMisi">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="portfolio text-center text-white" data-aos="fade-down" data-aos-duration="1000">
            Visi & Misi
          </h2>
        </div>
      </div>
      <!-- Visi -->
      <div class="row mt-5">
        <div class="col-md-12">
          <div class="card p-3 shadow mb-3" data-aos="fade-up" data-aos-duration="1000">
            <h5 class="card-title text-primary">Visi</h5>
            <p class="card-text">{{dataVisi}}</p>
          </div>
        </div>
      </div>
      <!-- Misi -->
      <div class="row">
        <div class="col-md-6" v-for="(mission, index) in dataMisi" :key="index">
          <div class="card p-3 shadow mb-2" data-aos="fade-up" data-aos-duration="1000">
            <h5 class="card-title text-primary">Misi {{ index+1}}</h5>
            <p class="card-text">{{ mission.misi }}</p>
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
.template {
  padding-top: 80px;
  background-image: linear-gradient(296.53deg, #000064 -32.62%, #060674 84.15%);
  padding-bottom: 80px;
}

.portfolio {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 38px;
  color: #333;
}

.card {
  border: none;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-weight: bold;
}
</style>
