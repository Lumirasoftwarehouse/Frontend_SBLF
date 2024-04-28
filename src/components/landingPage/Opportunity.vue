<template>
  <div class="opportunity bg-white" id="opportunity">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="portfolio" data-aos="fade-down" data-aos-duration="1000">Opportunity</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="(item, index) in dataOpportunity" :key="index">
          <div class="card-opportunity" data-aos="fade-up" data-aos-duration="1000">
            <img :src="`https://backend-sblf.lumirainternational.com/storage/images/${item.image}`" alt="Image" class="opportunity-image" />
            <div class="opportunity-details">
              <h3 class="opportunity-title">{{ item.judul }}</h3>
              <div class="opportunity-description">{{ item.deskripsi }}</div>
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
    dataOpportunity: {
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
.opportunity {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f5f5fd;
}

.portfolio {
  font-family: "Avenir", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: #000064;
}

.card-opportunity {
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card-opportunity:hover {
  transform: translateY(-5px);
}

.opportunity-image {
  width: 100%;
  height: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.opportunity-details {
  padding: 20px;
}

.opportunity-title {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  color: #000064;
}

.opportunity-description {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  color: #555;
}

@media only screen and (max-width: 600px) {
  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
