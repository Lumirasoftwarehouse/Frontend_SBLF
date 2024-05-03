<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <div class="main-content p-4" v-if="selected != null">
          <img :src="`https://backend-sblf.lumirainternational.com/storage/berita/${beritaList[selected].image}`" class="img-fluid mb-3" :alt="beritaList[selected].judul">
          <h2 class="mb-3">{{ beritaList[selected].judul }}</h2>
          <p>{{ beritaList[selected].deskripsi }}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="sidebar-custom">
          <div v-for="(berita, index) in beritaList" :key="index" class="news-item mb-3" @click="showBerita(index)">
            <div class="d-flex align-items-center">
              <img :src="`https://backend-sblf.lumirainternational.com/storage/berita/${berita.image}`" class="img-fluid me-3" :alt="berita.judul">
              <div>
                <h6 class="mb-0">{{ berita.judul }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      beritaList: [],
      selected: null,
      ready: false,
    };
  },
  methods: {
    async fetchBerita() {
      this.ready = false;
      try {
        const response = await axios.get("https://backend-sblf.lumirainternational.com/api/list-berita");
        this.beritaList = response.data.data;
        this.ready = true;
      } catch (error) {
        console.error(error);
        this.showAlert(
          "Opps...",
          "Terjadi kesalahan saat mengambil data berita.",
          "error"
        );
      }
    },
    showAlert(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon,
      }).then(() => {
      });
    },
    showBerita(index) {
      this.selected = index;
    }
  },
  created() {
    this.fetchBerita();
    this.selected = this.$route.params.id;
    // Lakukan penanganan berdasarkan ID berita yang diterima
    // Misalnya, panggil API untuk mendapatkan detail berita berdasarkan ID
  },
};
</script>

<style scoped>
.main-content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar-custom {
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.news-item {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.news-item:last-child {
  border-bottom: none;
}

.news-item img {
  width: 100px;
  height: auto;
  border-radius: 8px;
}
</style>
