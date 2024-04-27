<script setup>
import Navbar from "../components/landingPage/NavbarComponent.vue";
import Header from "../components/landingPage/HeaderComponent.vue";
import About from "../components/landingPage/About.vue";
import VisiMisi from "../components/landingPage/VisiMisi.vue";
import GlobalTrends from "../components/landingPage/GlobalTrends.vue";
import OrientationValue from "../components/landingPage/OrientationValue.vue";
import Footer from "../components/landingPage/FooterComponent.vue";

import { ref, onMounted } from "vue";
import axios from "axios";

const dataAbout = ref("");
const dataVisi = ref("");
const dataMisi = ref([]);
const dataTrend = ref("");
const dataValue = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://backend-sblf.lumirainternational.com/api/list-profile"
    );
    // const response = await axios.get('http://127.0.0.1:8000/api/list-profile');

    dataAbout.value = response.data.dataAbout[0]?.about || "";
    dataVisi.value = response.data.dataVisi[0]?.visi || "";
    dataMisi.value = response.data.dataMisi || [];
    dataTrend.value = response.data.dataTrend || [];
    dataValue.value = response.data.dataValue || [];
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <Navbar />
  <Header page="about" text="Tentang Strategic Business Leaders Forum"/>
  <About :dataAbout="dataAbout" />
  <VisiMisi :dataVisi="dataVisi" :dataMisi="dataMisi" />
  <GlobalTrends :dataTrend="dataTrend" />
  <OrientationValue :dataValue="dataValue" />
  <Footer />
</template>