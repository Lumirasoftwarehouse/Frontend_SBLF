<template>
  <div class="jumbotron" id="/">
    <img 
    :src="`/img/${page == 'home' ? 
    'jumbotron.png' : 
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
    page == 'pengurus' ?
          'pengurus.webp' : 
          ''}`"

    alt="home" 


    :height="`${page != 'home' ? '500' :
   ''}`"
    class="jumbotron-image" />
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
