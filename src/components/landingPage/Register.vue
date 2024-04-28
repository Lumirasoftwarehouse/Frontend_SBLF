<template>
  <div class="register" id="register">
    <div class="container">
      <h2 class="text-center fw-bold mt-3 mb-4">REGISTER</h2>
      <div class="row">
        <div class="col-sm-6">
          <img src="/img/register.png" alt="register" width="400"/>
        </div>
        <div class="col-sm-6">
          <form @submit.prevent="submitRegister">
            <div class="mb-3">
              <label for="fullName" class="form-label">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Enter your full name"
                v-model="fullName"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="Enter your phone number"
                v-model="phone"
              />
            </div>
            <div class="mb-3">
              <label for="company" class="form-label">Company Name</label>
              <input
                type="text"
                class="form-control"
                id="company"
                placeholder="Enter your company name"
                v-model="company"
              />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      phone: "",
      company: "",
    };
  },
  methods: {
    submitRegister() {
      const formData = {
        fullname: this.fullName,
        email: this.email,
        num_phone: this.phone,
        company: this.company,
      };

      // Kirim data ke API untuk insert register
      fetch("https://backend-sblf.lumirainternational.com/api/insert-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Tampilkan sweet alert success
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registration successful!',
          });

          // Bersihkan nilai input setelah berhasil
          this.fullName = "";
          this.email = "";
          this.phone = "";
          this.company = "";
        })
        .catch((error) => {
          console.error("Error:", error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Registration failed!',
          });
        });
    },
  },
};
</script>

<style scoped>
.container{
      font-family: Helvetica, Arial, sans-serif !important;
      color: black;
    }
</style>