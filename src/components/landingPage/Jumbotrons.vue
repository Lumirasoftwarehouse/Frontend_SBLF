<template>
  <div class="jumbotron" id="/">
    <div class="jumbotron-content">
      <img 
        :src="`/img/${
          page == 'about' ? 
            'about.webp' : 
          page == 'program' ? 
            'program.webp' : 
          page == 'service' ?
            'service.webp' : 
          page == 'daftar' ?
            'daftar.webp' :
          page == 'anggota' ?
          'anggota.webp' : 
          ''}`"

        alt="home" 


        height="500"
        class="jumbotron-image" />
      <div class="text-container">
        <h1 class="jumbotron-title">{{ pageTitle }}</h1>
        <p class="jumbotron-description">{{ pageDescription }}</p>
      </div>
    </div>
    <div class="lengkung bg-white"></div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.jumbotron {
  position: relative; /* Menambahkan posisi relatif */
  width: 100%;
  overflow: hidden;
  margin: 0; /* Menghapus margin */
  padding: 0; /* Menghapus padding */
}

.jumbotron-content {
  position: absolute; /* Mengubah posisi menjadi absolut */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Memposisikan konten di tengah */
  text-align: center; /* Menempatkan teks di tengah */
  color: #fff; /* Menambahkan warna putih untuk teks */
}

.jumbotron-image {
  width: 100%;
  height: 500px; /* Menyesuaikan tinggi gambar */
  object-fit: cover; /* Menutupi seluruh area jumbotron */
  position: absolute; /* Mengubah posisi menjadi absolut */
  top: 0;
  left: 0;
  z-index: 0; /* Menambahkan z-index agar berada di belakang .lengkung */
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

.text-container {
  padding: 20px;
}

.jumbotron-title {
  font-size: 3rem; /* Menyesuaikan ukuran judul */
  margin-bottom: 20px; /* Menambahkan margin bawah */
}

.jumbotron-description {
  font-size: 1.2rem; /* Menyesuaikan ukuran deskripsi */
  line-height: 1.6; /* Menambahkan line-height untuk jarak baris */
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
