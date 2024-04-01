<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-3 mb-3"> <!-- Kolom kiri -->
        <div class="position-relative" style="margin-left:-40px">
          <img src="/img/kiri.png" alt="batik" class="img-fluid" />
          
        </div>
      </div>
      <div class="col-6 mb-3"> <!-- Kolom tengah -->
        <h4 class="text-center">{{dataQuote}}</h4>
      </div>
      <div class="col-3"> <!-- Kolom kanan -->
        <div class="position-relative" >
          <img src="/img/kanan.png" alt="batik" class="img-fluid"/>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataQuote: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
h4 {
  color: #4953ae;
  font-weight: bold;
}

@media (max-width: 576px) {
  .row {
    flex-wrap: wrap;
  }

  .col-3,
  .col-6 {
    width: 100%;
    margin-bottom: 20px; /* Add margin to separate images vertically */
  }

  .col-3 img,
  .col-6 h4 {
    margin: 0 auto; /* Center align images and text */
    display: block; /* Ensure images and text are displayed as block elements */
    
  }

  .col-3 img {
    width: 100%; /* Make images full width on mobile */
  }

  .position-relative {
    position: relative;
  }

  .position-absolute {
    position: absolute;
  }

  .top-0 {
    top: 0;
  }

  .start-50 {
    left: 50%;
  }

  .translate-middle-x {
    transform: translateX(-50%);
  }
}
</style>
