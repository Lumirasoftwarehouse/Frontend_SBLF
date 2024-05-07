<template>
  <div class="container member-section">
    <h2 class="mb-5 fw-bold">Pengurus</h2>
    <div class="row mt-5 pt-4">
      <div class="col-md-12">
        <div class="member">
          <img src="/img/anggota/Farid.jpeg" alt="Dr. A. FARID AULIA, DEA" />
          <div class="member-content">
            <h2>Dr. Ir. A. FARID AULIA, DEA</h2>
            <span class="text-uppercase">Presiden</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6 col-lg-6">
        <div class="member">
          <img
            src="/img/anggota/2.webp"
            alt="Feby M Faisal, S.H., M.S.M., PhD (Cand)"
          />
          <div class="member-content">
            <h2>Feby M Faisal, S.H., M.S.M., PhD (Cand)</h2>
            <span class="text-uppercase">Sekretaris Jendral(Sekjen)</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6">
        <div class="member">
          <img src="/img/anggota/1.webp" alt="Anggota 3" />
          <div class="member-content">
            <h2>Fretdy Purba, S.E., M.M.</h2>
            <span class="text-uppercase">Direktur Jendral</span><br />
            <span class="text-uppercase">Government Relations & Treasury</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 kolom ke samping -->
    <div class="row mt-4">
      <div class="col-md-6 col-lg-4">
        <div class="member">
          <img src="/img/anggota/3.webp" alt="Anggota 4" />
          <div class="member-content">
            <h2>Jody Ikhsan Firdaus, S.E., S.Kom.</h2>
            <span class="text-uppercase">Direktur Eksekutif</span><br />
            <span class="text-uppercase">Financial and Membership</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="member">
          <img src="/img/anggota/4.webp" alt="Anggota 4" />
          <div class="member-content">
            <!-- <h2>Jody Ikhsan Firdaus, S.E., S.Kom.</h2>
          <span>Financial and Membership Director</span> -->
            <h2>Faradita Fairuz, S.E. Mgt, MBA (Cand)</h2>
            <span class="text-uppercase">Direktur Eksekutif</span><br />
            <span class="text-uppercase">Innovation and Development</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="member">
          <img src="/img/anggota/Tsalisa.jpeg" alt="Anggota 2" />
          <div class="member-content">
            <h2>Tsalitsa Haura, S.Psi, M.Psi</h2>
            <span class="text-uppercase">Direktur Eksekutif</span><br />
            <span class="text-uppercase">CSR and Public Relations</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6 col-lg-4">
        <div class="member">
          <img src="/img/anggota/qori.jpeg" alt="Anggota 3" />
          <div class="member-content">
            <h2>Dr. Dodi Qori U, S.T., M.T.</h2>
            <span class="text-uppercase">Direktur Eksekutif</span><br />
            <span class="text-uppercase"
              >Blockchain Technology and Consultant</span
            >
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="member">
          <img src="/img/anggota/rifqi_adiasya.jpeg" alt="Anggota 4" />
          <div class="member-content">
            <h2>M. Rifqi Adiasya, S.Psi</h2>
            <span class="text-uppercase">Direktur Eksekutif</span><br />
            <span class="text-uppercase">Asset Valuation and Leveraging</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="member">
          <img src="/img/anggota/indera.jpeg" alt="Anggota 4" />
          <div class="member-content">
            <h2>MD Indera Tasripin</h2>
            <span class="text-uppercase">Direktur Eksekutif</span><br />
            <span class="text-uppercase"
              >International & Investor Relations</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Helvetica, Arial, sans-serif !important;
  color: black;
}
.member-section {
  padding: 80px 0;
  text-align: center;
}
.member {
  margin-bottom: 40px;
  background-color: lightblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.container {
  font-family: Helvetica, Arial, sans-serif !important;
}
.member:hover {
  transform: translateY(-5px);
}
.member img {
  border-radius: 50%;
  max-width: 200px;
  margin-top: -50px;
  border: 5px solid #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}
.member img:hover {
  transform: scale(1.1);
}
.member-content {
  padding: 20px;
}
.member h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.member p {
  color: #777;
  font-size: 16px;
}
</style>