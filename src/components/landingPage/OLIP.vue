<template>
<div class="container">
    <h1 class="mt-5">Coming Soon</h1>
    <p>We're working hard to bring you something special.</p>
  </div>
</template>

<style scoped>
    .container {
      font-family: Helvetica, Arial, sans-serif !important;
      text-align: center;
      color: black;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }

    .logo {
      width: 150px;
      height: auto;
    }

    .animation {
      animation: bounce 1.5s infinite alternate;
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }

    .cta-button {
      background-color: #3498db;
      color: #fff;
      border: none;
      padding: 15px 30px;
      border-radius: 5px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #2980b9;
    }
</style>
