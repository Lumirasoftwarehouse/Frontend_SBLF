<script setup>
import Navbar from "../components/landingPage/NavbarComponent.vue";
import Header from "../components/landingPage/HeaderComponent.vue";
import Berita from "../components/landingPage/BeritaComponent.vue";
import Footer from "../components/landingPage/FooterComponent.vue";

import { ref, onMounted } from 'vue';
import axios from 'axios';

const dataBerita = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('https://backend-sblf.lumirainternational.com/api/list-profile');
    // const response = await axios.get('http://127.0.0.1:8000/api/list-profile');
    
    dataBerita.value = response.data.dataBerita || [];
    
  } catch (error) {
    console.error(error);
  }
});

</script>
<template>
    <Navbar/>
  <Header page="anggota" text="Anggota Strategic Business Leaders Forum"/>
    <Berita :dataBerita="dataBerita"/>
    <Footer/>
</template>