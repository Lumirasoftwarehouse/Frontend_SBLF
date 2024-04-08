<script setup>
import Navbar from "../components/landingPage/NavbarComponent.vue";
import Jumbotron from "../components/landingPage/JumbotronComponent.vue";
import OrientationValue from "../components/landingPage/OrientationValue.vue";

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
    <Jumbotron/>
    <OrientationValue :dataValue="dataValue"/>
</template>