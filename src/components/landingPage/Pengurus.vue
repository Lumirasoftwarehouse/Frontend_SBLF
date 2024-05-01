<template>
 <div class="container member-section">
  <h2 class="mb-5 fw-bold">Pengurus</h2>
  <div class="row mt-5 pt-4">
    <div class="col-md-12">
      <div class="member">
        <img src="/img/anggota/Farid.jpeg" alt="Dr. A. FARID AULIA, DEA">
        <div class="member-content">
          <h2>Dr. A. FARID AULIA, DEA</h2>
          <p>President</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5 pt-4">
    <div class="col-md-12">
      <div class="member">
        <img src="/img/anggota/2.webp" alt="Feby M Faisal, S.H., M.S.M., PhD (Cand)">
        <div class="member-content">
          <h2>Feby M Faisal, S.H., M.S.M., PhD (Cand)</h2>
          <p>Secretary General</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 3 kolom ke samping -->
  <div class="row mt-3">
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/1.webp" alt="Anggota 3">
        <div class="member-content">
          <h2>Fretdy Purba, S.E., M.M.</h2>
          <p>Govt Relation and Treasury Executive Director</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/3.webp" alt="Anggota 4">
        <div class="member-content">
          <h2>Jody Ikhsan Firdaus, S.E., S.Kom.</h2>
          <p>Financial and Membership Director</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/4.webp" alt="Anggota 4">
        <div class="member-content">
          <!-- <h2>Jody Ikhsan Firdaus, S.E., S.Kom.</h2>
          <p>Financial and Membership Director</p> -->
          <h2>Faradita Fairuz, S.E. Mgt, MBA (Cand)</h2>
          <p>Innovation and Development Director</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/Tsalisa.jpeg" alt="Anggota 2">
        <div class="member-content">
          <h2>Tsaltsa Haura, S.Psi, M.Psi</h2>
          <p>Director CSR and Public Relations</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/qori.jpeg" alt="Anggota 3">
        <div class="member-content">
          <h2>Dr. Dodi Qori U, S.T., M.T.</h2>
          <p>Blockchain Technology and Consultant Director</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/rifqi_adiasya.jpeg" alt="Anggota 4">
        <div class="member-content">
          <h2>M. Rifqi Adiasya, S.Psi</h2>
          <p>Asset Valuation and Leveraging Director</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.container{
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
    .container{
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