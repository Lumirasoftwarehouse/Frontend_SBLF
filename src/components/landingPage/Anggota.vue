<template>
 <div class="container member-section">
  <h2 class="mb-5 fw-bold">Anggota</h2>
  <div class="row mt-5 pt-4">
    <div class="col-md-12">
      <div class="member">
        <img src="/img/anggota/1.webp" alt="Anggota 1">
        <div class="member-content">
          <h2>Fretdy Purba, S.E.,M.M</h2>
          <p>Executive Advisor</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/2.webp" alt="Anggota 2">
        <div class="member-content">
          <h2>Feby M Faisal, S.H., M.S.M.</h2>
          <p>Chief Executive Officer (CEO)</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/3.webp" alt="Anggota 3">
        <div class="member-content">
          <h2>Jody Ikhsan F, S.E., S.Kom.</h2>
          <p>Chief Operating Officer (COO)</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="member">
        <img src="/img/anggota/4.webp" alt="Anggota 4">
        <div class="member-content">
          <h2>Faradita Fairuz, S.E.</h2>
          <p>Chief Marketing Officer (CMO)</p>
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