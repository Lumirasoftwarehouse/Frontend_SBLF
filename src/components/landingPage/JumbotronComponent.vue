<template>
  <div class="jumbotron" id="/">
    <img src="/img/jumbotron.png" alt="home" class="jumbotron-image" />
    <div class="lengkung bg-white"></div>
  </div>
</template>

<style scoped>
.jumbotron {
  position: relative; /* Menambahkan posisi relatif */
  width: 100%;
  overflow: hidden;
  margin: 0; /* Menghapus margin */
  padding: 0; /* Menghapus padding */
}

.lengkung {
  position: absolute; /* Mengubah posisi menjadi absolut */
  bottom: -100px;
  left: 0;
  width: 100%;
  height: 200px; /* Menyesuaikan tinggi lengkung */
  border-radius: 50% 50% 0 0;
  z-index: 1; /* Menambahkan z-index agar menimpa gambar */
}

.jumbotron-image {
  width: 100%;
  display: block;
  z-index: 0; /* Menambahkan z-index agar berada di belakang .lengkung */
}

@media only screen and (max-width: 600px) {
  .lengkung {
  position: absolute; /* Mengubah posisi menjadi absolut */
  bottom: -50px;
  left: 0;
  width: 100%;
  height: 60px; /* Menyesuaikan tinggi lengkung */
  border-radius: 50% 50% 0 0;
  z-index: 1; /* Menambahkan z-index agar menimpa gambar */
}
}
</style>
