<script setup>
import Navbar from "../components/landingPage/NavbarComponent.vue";
import Jumbotron from "../components/landingPage/JumbotronComponent.vue";
import Quote from "../components/landingPage/Quote.vue";
import ClientPartner from "../components/landingPage/ClientPartner.vue";
import Register from "../components/landingPage/Register.vue";
import Contact from "../components/landingPage/Contact.vue";
import BenefitProgram from "../components/landingPage/BenefitProgram.vue";
import Opportunity from "../components/landingPage/Opportunity.vue";
import Berita from "../components/landingPage/backup/BeritaComponent.vue";
import Footer from "../components/landingPage/FooterComponent.vue";
import ChatMe from "../components/ChatMe.vue";

import { ref, onMounted } from 'vue';
import axios from 'axios';

const dataOpportunity = ref([]);
const dataBenefit = ref([]);
const dataQuote = ref('');
const dataClient = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('https://backend-sblf.lumirainternational.com/api/list-profile');
    // const response = await axios.get('http://127.0.0.1:8000/api/list-profile');
    
   
    dataOpportunity.value = response.data.dataOpportunity|| [];
    dataBenefit.value = response.data.dataBenefit|| [];
    dataQuote.value = response.data.dataQuote[0]?.quote || ''; 
    dataClient.value = response.data.dataClient || [];
    
  } catch (error) {
    console.error(error);
  }
});

</script>
<template>
    <ChatMe />
    <Navbar/>
    <Jumbotron page="home"/>
    <Opportunity :dataOpportunity="dataOpportunity"/>
    <BenefitProgram :dataBenefit="dataBenefit"/>
    <Quote :dataQuote="dataQuote"/>
    <ClientPartner :dataClient="dataClient"/>
    <Register/>
    <Footer/>
</template>