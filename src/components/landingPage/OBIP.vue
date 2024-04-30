<template>
  <div class="container-fluid landing-page">
    <div class="header">
      <h1 class="title">Overseas Business Insight Program</h1>
      <p class="subtitle">
        Program ini didedikasikan untuk memberikan skill baru, networking,
        pengalaman, dan breakthrough yang mereka butuhkan untuk
        membangun/memiliki bisnis secara efektif khususnya di bidang digital dan
        bisnis lainnya yang relevan saat ini dan ke depan.
      </p>
    </div>

    <div class="content">
      <div class="col-md-4">
        <div class="program-description">
          <h2 class="section-title">Program</h2>
          <p class="purpose-text">
            Program ini berfokus pada breakthrough dalam
            membangun bisnis digital dan bisnis relevan lainnya melalui
            benchmarking dan networking catalytic lintas negara. Hal ini disertai
            pembekalan digital mindset, entrepreneurship, dan leadership, yang
            dibimbing oleh para mentor berpengalaman dalam menjalankan
            beberapa bisnis sekaligus, yang kaya dengan ide-ide
            baru dan mampu berorientasi ke masa depan.
            Sebagai perjalanan yang singkat dan bermakna namun
            berdampak besar bagi perjalanan masa depan generasi
            muda. Perjalanan luar negeri selama 7 hari ke Singapura
            dan Malaysia, wawasan dan skill baru, mentoring serta
            langsung memiliki dan memimpin perusahaan startup
            setelah mengikuti OBIP adalah outcome yang menjadi
            benefit dari peserta di program ini.
          </p>
        </div>
      </div>

      <div class="col-md-8">
        <h2>Benefit Program</h2>
        <div class="row">
          <div
            class="col-md-6"
            v-for="(benefit, index) in programBenefits"
            :key="index"
          >
            <div class="benefit-card">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <h2>Daftar Sekarang dan Mulailah Perjalanan Bisnis Anda!</h2>
      <!-- https://sblf.co.id/daftar -->
      <router-link
              class="btn btn-primary"
              :to="{ name: 'daftar' }"
              >Daftar Sekarang</router-link
            >
      <!-- <button @click="registerNow">Daftar Sekarang</button> -->
    </div>

    <div class="footer">
      <p>Kontak Kami: info@obip.id | +6281313723231</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programBenefits: [
        {
          title: "Kunjungan Perusahaan",
          description:
            "Berkunjung ke perusahaan teknologi terkemuka untuk mendapatkan wawasan langsung dari para profesional industri.",
        },
        {
          title: "Kembalike Indonesia",
          description: "Sudah siap dengan legalitas perusahaan.",
        },
        {
          title: "Menjadi Pemilik/CEO",
          description:
            "Setelah selesai program, Anda akan memiliki kesempatan untuk memimpin perusahaan startup.",
        },
        {
          title: "Networking dan Skill Baru",
          description:
            "Bergabung dengan jaringan luas profesional bisnis dan mendapatkan pembekalan skill baru.",
        },
        {
          title: "Biaya Pesawat & Hotel",
          description:
            "Biaya perjalanan dan akomodasi Anda ditanggung sepenuhnya.",
        },
        {
          title: "Konsultasi Bisnis",
          description: "Mendapatkan konsultasi bisnis dari para ahli.",
        },
        {
          title: "Otomatis Menjadi Anggota SBLF",
          description: "Strategic Business Leadership Forum.",
        },
        {
          title: "Peluang Bisnis Lainnya",
          description:
            "Bersiaplah untuk melihat peluang bisnis lainnya yang menarik.",
        },
      ],
    };
  },
  methods: {
    registerNow() {
      console.log("Mendaftar sekarang...");
    },
  },
};
</script>

<style scoped>
    .container{
      font-family: Helvetica, Arial, sans-serif !important;
      color: black;
    }
.landing-page {
  font-family: "Arial", sans-serif;
  background-color: #fff;
  color: #333;
  padding: 50px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #007bff;
}

.subtitle {
  font-size: 18px;
  font-style: italic;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.program-description {
  max-width: 400px;
  margin-bottom: 40px;
}



.purpose-text {
  text-align: justify;
}

.benefit-card {
  background-color: #ebebeb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.benefit-card h3 {
  color: #007bff;
  
}

.cta-section {
  margin-top: 40px;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.footer {
  text-align: center;
  margin-top: 40px;
}
</style>
