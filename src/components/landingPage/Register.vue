<template>
  <div class="register" id="register">
    <div class="container">
      <h2 class="text-center fw-bold mt-3 mb-4">REGISTER</h2>
      <div class="row">
        <div class="col-sm-6">
          <img src="/img/register.png" alt="register" width="400" />
        </div>
        <div class="col-sm-6">
          <form @submit.prevent="submitRegister">
            <div class="mb-3">
              <label for="fullName" class="form-label">Nama Lengkap</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Masukkan nama lengkap anda"
                v-model="fullName"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Masukkan email anda"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Nomor HP</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                placeholder="Masukkan nomor hp anda"
                v-model="phone"
              />
            </div>
            <div class="mb-3">
              <label for="company" class="form-label">Nama Perusahaan</label>
              <input
                type="text"
                class="form-control"
                id="company"
                placeholder="Masukkan nama perusahaan anda"
                v-model="company"
              />
            </div>
            <div class="mb-3">
              <label for="company" class="form-label">Bidang</label>
              <select class="form-select" aria-label="Default select example" v-model="bidang">
                <option selected>Pilih Bidang</option>
                <option value="AI">AI</option>
                <option value="Blockchain">Blockchain</option>
                <option value="IoT">IoT</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Blue Economy">Blue Economy</option>
                <option value="Green Economy">Green Economy</option>
                <option value="Finance and Investment">Finance and Investment</option>
                <option value="Psycho and Mental Health">Psycho and Mental Health</option>
                <option value="Others">Others...</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Daftar</button>
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
      bidang:""
    };
  },
  methods: {
    submitRegister() {
      const formData = {
        fullname: this.fullName,
        email: this.email,
        num_phone: this.phone,
        company: this.company,
        bidang: this.bidang,
      };

      // Kirim data ke API untuk insert register
      fetch(
        // "http://127.0.0.1:8000/api/insert-register",
        "https://backend-sblf.lumirainternational.com/api/insert-register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Tampilkan sweet alert success
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Berhasil mendaftar!",
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
            icon: "error",
            title: "Error",
            text: "Gagal mendaftar!",
          });
        });
    },
  },
};
</script>

<style scoped>
.container {
  font-family: Helvetica, Arial, sans-serif !important;
  color: black;
}
</style>