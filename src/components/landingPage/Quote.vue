<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-2 mb-3"> <!-- Kolom kiri -->
      <img src="/img/kiri.png" alt="kiri" style="margin-left:-90px;">
      </div>
      <div class="col-8 mb-3"> <!-- Kolom tengah -->
      <h3 class="text-center">{{dataQuote}}</h3>
      </div>
      <div class="col-2"> <!-- Kolom kanan -->
      <img src="/img/kanan.png" style="margin-right: -100px;" alt="kanan">
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    dataQuote: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
h3 {
  margin-top: 20px;
  color: #000000;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(221, 245, 5, 0.5);
  z-index: 2 !important;
}

@media (max-width: 576px) {
  .row {
    flex-wrap: wrap;
  }

  .col-3,
  .col-6 {
    width: 100%;
    margin-bottom: 20px; /* Add margin to separate images vertically */
  }

  .col-3 img,
  .col-6 h3 {
    margin: 0 auto; /* Center align images and text */
    display: block; /* Ensure images and text are displayed as block elements */
  }

  .col-3 img {
    width: 100%; /* Make images full width on mobile */
  }
}
</style>
