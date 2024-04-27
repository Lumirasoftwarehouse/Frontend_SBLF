<script setup>
import Navbar from "../components/landingPage/NavbarComponent.vue";
import Header from "../components/landingPage/HeaderComponent.vue";
import Service from "../components/landingPage/Service.vue";
import Footer from "../components/landingPage/FooterComponent.vue";

import { ref, onMounted } from 'vue';
import axios from 'axios';

const dataTrend = ref('');


onMounted(async () => {
  try {
    const response = await axios.get('https://backend-sblf.lumirainternational.com/api/list-profile');
    // const response = await axios.get('http://127.0.0.1:8000/api/list-profile');
    
    dataTrend.value = response.data.dataTrend|| [];
    
  } catch (error) {
    console.error(error);
  }
});

</script>
<template>
    <Navbar/>
  <Header page="service" text="Service Strategic Business Leaders Forum"/>
    <Service :dataTrend="dataTrend"/>
    <Footer/>
</template>