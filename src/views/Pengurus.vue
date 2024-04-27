<script setup>
import Navbar from "../components/landingPage/NavbarComponent.vue";
import Header from "../components/landingPage/HeaderComponent.vue";
import Pengurus from "../components/landingPage/Pengurus.vue";
import Footer from "../components/landingPage/FooterComponent.vue";

import { ref, onMounted } from 'vue';
import axios from 'axios';

const dataValue = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('https://backend-sblf.lumirainternational.com/api/list-profile');
    // const response = await axios.get('http://127.0.0.1:8000/api/list-profile');
    
    dataValue.value = response.data.dataValue || [];
    
  } catch (error) {
    console.error(error);
  }
});

</script>
<template>
    <Navbar/>
  <Header page="pengurus" text="Pengurus Strategic Business Leaders Forum"/>
    <Pengurus :dataValue="dataValue"/>
    <Footer/>
</template>