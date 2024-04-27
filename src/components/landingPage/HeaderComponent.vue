<template>
<div class="jumbotron" id="/">
  <div class="jumbotron-content">
    <div class="text-center">
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
          page == 'pengurus' ?
          'pengurus.webp' : 
          ''}`"
        alt="home" 
        height="400"
        class="jumbotron-image" />
      <h1 class="test-text">{{text}}</h1>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.test-text{
  z-index: 2;
  margin-top: -200px;
  margin-bottom: 150px;
  color: white; /* Ubah warna teks menjadi putih */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Tambahkan efek bayangan pada teks */
}
.jumbotron {
  position: relative; /* Menambahkan posisi relatif */
  width: 100%;
  overflow: hidden;
  margin: 0; /* Menghapus margin */
  padding: 0; /* Menghapus padding */
}

.jumbotron-image {
  width: 100%;
  display: block;
  z-index: 0; /* Menambahkan z-index agar berada di belakang .lengkung */
}
</style>
