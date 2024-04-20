<template>
  <div class="container-fluid position-relative"> <!-- Tambahkan kelas position-relative -->
    <div class="overlay"></div> <!-- Tambahkan overlay transparan di sini -->
    <div class="row align-items-center">
      <div class="col-3 mb-3"> <!-- Kolom kiri -->
      </div>
      <div class="col-6 mb-3"> <!-- Kolom tengah -->
      <h3 class="text-center">{{dataQuote}}</h3>
      </div>
      <div class="col-3"> <!-- Kolom kanan -->
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
.container-fluid {
  /* Letakkan gambar di belakang overlay dengan menggunakan z-index yang lebih rendah */
  background-color: #4953ae;
  background-image: url('/img/batik.jpg');
  background-size: initial;
  /* filter: grayscale(100%); */
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #adacac80; /* Warna transparan yang buram */
  z-index: 1; /* Letakkan overlay di atas gambar dengan menggunakan z-index yang lebih tinggi */
}

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
