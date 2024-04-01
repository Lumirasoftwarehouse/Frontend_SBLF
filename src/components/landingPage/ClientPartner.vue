<template>
  <div class="clientPartner bg-light">
    <div class="container">
      <h2 class="text-center fw-bold text-light">CLIENT PARTNER</h2>
      <div class="card-container">
        <div v-for="(client, index) in dataClient" :key="index" class="card">
          <img :src="`https://backend-sblf.lumirainternational.com/storage/clientPartner/${client.image}`" alt="Client Logo" class="client-logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataClient: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.clientPartner {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-image: url('/img/clientBG.png');
}

.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  width: 23%;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.5);
}

.client-logo {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto; /* Posisikan logo di tengah */
}
</style>
