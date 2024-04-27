<template>
<div class="container team-section">
  <h2 class="mb-5">Meet Our Team</h2>
  <div class="row">
    <div class="col-md-6 col-lg-3">
      <div class="team-member">
        <img src="https://via.placeholder.com/300" alt="Pengurus 1">
        <h2>Pengurus 1</h2>
        <p>Description of Pengurus 1.</p>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="team-member">
        <img src="https://via.placeholder.com/300" alt="Pengurus 2">
        <h2>Pengurus 2</h2>
        <p>Description of Pengurus 2.</p>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="team-member">
        <img src="https://via.placeholder.com/300" alt="Pengurus 3">
        <h2>Pengurus 3</h2>
        <p>Description of Pengurus 3.</p>
      </div>
    </div>
    <div class="col-md-6 col-lg-3">
      <div class="team-member">
        <img src="https://via.placeholder.com/300" alt="Pengurus 4">
        <h2>Pengurus 4</h2>
        <p>Description of Pengurus 4.</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
    .container{
      font-family: Helvetica, Arial, sans-serif !important;
    }
.team-section {
      padding: 80px 0;
      text-align: center;
    }
    .team-member {
      margin-bottom: 40px;
    }
    .team-member img {
      border-radius: 50%;
      max-width: 200px;
      border: 5px solid #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s;
    }
    .team-member img:hover {
      transform: scale(1.1);
    }
    .team-member h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .team-member p {
      color: #777;
      font-size: 16px;
    }
</style>