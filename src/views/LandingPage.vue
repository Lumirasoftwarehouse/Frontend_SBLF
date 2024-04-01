<script setup>
import Navbar from "../components/landingPage/NavbarComponent.vue";
import Jumbotron from "../components/landingPage/JumbotronComponent.vue";
import GlobalTrends from "../components/landingPage/GlobalTrends.vue";
import Quote from "../components/landingPage/Quote.vue";
import OrientationValue from "../components/landingPage/OrientationValue.vue";
import ClientPartner from "../components/landingPage/ClientPartner.vue";
import Register from "../components/landingPage/Register.vue";
import Contact from "../components/landingPage/Contact.vue";
import About from "../components/landingPage/About.vue";
import VisiMisi from "../components/landingPage/backup/VisiMisi.vue";
import BenefitProgram from "../components/landingPage/backup/BenefitProgram.vue";
import Opportunity from "../components/landingPage/backup/Opportunity.vue";
import Berita from "../components/landingPage/backup/BeritaComponent.vue";
import Footer from "../components/landingPage/FooterComponent.vue";

import { ref, onMounted } from 'vue';
import axios from 'axios';

const dataTrend = ref('');
const dataQuote = ref('');
const dataValue = ref([]);
const dataClient = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/list-profile');
    dataTrend.value = response.data.dataTrend|| [];
    dataQuote.value = response.data.dataQuote[0]?.quote || ''; 
    dataValue.value = response.data.dataValue || [];
    dataClient.value = response.data.dataClient || [];
    
  } catch (error) {
    console.error(error);
  }
});

</script>
<template>
    <Navbar/>
    <Jumbotron/>
    <!-- <About/> -->
    <GlobalTrends :dataTrend="dataTrend"/>
    <Quote :dataQuote="dataQuote"/>
    <OrientationValue :dataValue="dataValue"/>
    <ClientPartner :dataClient="dataClient"/>
    <Register/>
    <Contact/>
</template>