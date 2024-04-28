<template>
 <div class="container member-section">
  <h2 class="mb-5">Our Members</h2>
  <div class="row">
    <div class="col-md-6 col-lg-3">
      <div class="member">
        <img src="https://via.placeholder.com/300" alt="Anggota 1">
        <div class="member-content">
          <h2>Anggota 1</h2>
          <p>Description of Anggota 1.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="member">
        <img src="https://via.placeholder.com/300" alt="Anggota 2">
        <div class="member-content">
          <h2>Anggota 2</h2>
          <p>Description of Anggota 2.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="member">
        <img src="https://via.placeholder.com/300" alt="Anggota 3">
        <div class="member-content">
          <h2>Anggota 3</h2>
          <p>Description of Anggota 3.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="member">
        <img src="https://via.placeholder.com/300" alt="Anggota 4">
        <div class="member-content">
          <h2>Anggota 4</h2>
          <p>Description of Anggota 4.</p>
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
      background-color: #fff;
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