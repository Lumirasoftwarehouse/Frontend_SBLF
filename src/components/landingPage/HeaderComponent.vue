<template>
<div class="jumbotron" id="/">
  <div class="jumbotron-content">
    <div class="text-center">
      <img 
        :src="`/img/header/${
          page == 'about' ? 
            'about.jpg' : 
          page == 'obip' ? 
            'obip.jpg' :
           page == 'olip' ? 
           'olip.jpg' :
          page == 'service' ?
            'service.jpg' : 
          page == 'daftar' ?
            'register.jpg' :
          page == 'anggota' ?
          'anggota.jpg' : 
          page == 'pengurus' ?
          'pengurus.jpg' : 
          page == 'berita' ?
          'news.jpg' : 
          ''}`"
        alt="home" 
        height="650"
        class="jumbotron-image" />
      <h1 class="test-text fw-bold">{{text}}</h1>
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
.jumbotron{
      font-family: Helvetica, Arial, sans-serif !important;
    }
.test-text{
  z-index: 2;
  margin-top: -300px;
  margin-bottom: 200px;
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
