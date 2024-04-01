<script setup>
import Sidebar from "../../../components/admin/Sidebar.vue";
import Navbar from "../../../components/general/Navbar.vue";
import Footer from "../../../components/general/Footer.vue";
import Card from "../../../components/general/Card.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggle-sidebar" : "";
};
</script>
<template>
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <div class="container-fluid mt-4">
          <h1 class="h3 mb-0 text-gray-800 text-center">Berita</h1>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row mb-3">
                <div class="col-4">
                  <button
                    class="btn blueButton me-2"
                    data-toggle="modal"
                    data-target="#addBerita"
                  >
                    Tambah Berita
                  </button>
                </div>
                <div class="col-8"></div>
              </div>
              <div class="table-responsive">
                <p class="text-center" v-if="!ready">Loading...</p>
                <table class="display table table-striped" v-if="ready">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 50px">No</th>
                      <th scope="col">Aksi</th>
                      <th scope="col">Gambar</th>
                      <th scope="col">Judul</th>
                      <th scope="col">Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in beritaList" :key="item.id">
                      <td>{{ index + 1 }}</td>
                      <td>
                        <button
                          class="btn btn-warning me-3"
                          data-toggle="modal"
                          data-target="#updateBerita"
                          @click="setDataUpdate(item.id, item.image, item.judul, item.deskripsi)"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          class="btn btn-danger"
                          @click="konfirmasi(item.id, item.judul)"
                        >
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                      <td>
                        <img
                          :src="`http://127.0.0.1:8000/storage/berita/${item.image}`"
                          alt="opportunity"
                          width="200"
                        />
                      </td>

                      <td>{{ item.judul }}</td>
                      <td>{{ item.deskripsi }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>

  <!-- add opportunity -->
  <div
    class="modal fade"
    id="addBerita"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addBeritaLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addBeritaLabel">
            Tambah Opportunity
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="gambar">Gambar</label>
              <input
                type="file"
                class="form-control"
                id="gambar"
                @change="handleFileUpload"
              />
            </div>
            <div class="form-group">
              <label for="judul">Judul</label>
              <input
                type="text"
                class="form-control"
                id="judul"
                v-model="dataBerita.judul"
              />
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">Deskripsi</label>
              <textarea
                class="form-control"
                v-model="dataBerita.deskripsi"
                placeholder="Masukkan deskripsi"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button
            type="button"
            class="btn blueButton"
            @click="tambahOpportunity"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  </div>
    <!-- end add opportunity -->

    <!-- update opportunity -->
    <div
    class="modal fade"
    id="updateBerita"
    tabindex="-1"
    role="dialog"
    aria-labelledby="updateBeritaLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateBeritaLabel">
            Update Opportunity
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="gambar">Gambar</label>
              <input
                type="file"
                class="form-control"
                id="gambar"
                @change="handleFileUpload"
              />
            </div>
            <div class="form-group">
              <label for="judul">Judul</label>
              <input
                type="text"
                class="form-control"
                id="judul"
                v-model="updateBerita.judul"
              />
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">Deskripsi</label>
              <textarea
                class="form-control"
                v-model="updateBerita.deskripsi"
                placeholder="Masukkan deskripsi"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button
            type="button"
            class="btn blueButton"
            @click="sendUpdateBerita"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
    <!-- end update opportunity -->
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      beritaList: [],
      dataBerita: {
        image: null,
        judul: "",
        deskripsi: "",
      },
      updateBerita: {
        image: null,
        judul: "",
        deskripsi: "",
        idBerita:""
      },
      user_id: "",
      ready: false,
      remainingTime: "Loading",
    };
  },
  methods: {
    setDataUpdate(id, image, judul, deskripsi){
      this.updateBerita.idBerita = id;
      this.updateBerita.image = image;
      this.updateBerita.judul = judul;
      this.updateBerita.deskripsi = deskripsi;
    },
    async sendUpdateBerita() {
      try {
        const formData = new FormData();
        formData.append("image", this.dataBerita.image);
        formData.append("judul", this.updateBerita.judul);
        formData.append("deskripsi", this.updateBerita.deskripsi);
        const response = await axios.post(
          `http://127.0.0.1:8000/api/auth/update-berita/${this.updateBerita.idBerita}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.updateBerita = {
          image: null,
          judul: "",
          deskripsi: "",
          idBerita:""
        }; // Clear input field after successful submission
        this.fetchBerita(); // Reload the about data after adding a new one
        this.showAlert(
          "Berhasil!",
          "Data berita berhasil diupdate.",
          "success"
        );
      } catch (error) {
        console.error(error); // Handle error if any
        this.showAlert(
          "Opps...",
          "Terjadi kesalahan saat mengupdate data berita.",
          "error"
        );
      }
    },
    async tambahOpportunity() {
      try {
        const formData = new FormData();
        formData.append("image", this.dataBerita.image);
        formData.append("judul", this.dataBerita.judul);
        formData.append("deskripsi", this.dataBerita.deskripsi);
        const response = await axios.post(
          "http://127.0.0.1:8000/api/auth/create-berita",
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.dataBerita = {
          image: null,
          judul: "",
          deskripsi: "",
        }; // Clear input field after successful submission
        this.fetchBerita(); // Reload the about data after adding a new one
        this.showAlert(
          "Berhasil!",
          "Data berita berhasil ditambahkan.",
          "success"
        );
      } catch (error) {
        console.error(error); // Handle error if any
        this.showAlert(
          "Opps...",
          "Terjadi kesalahan saat menambahkan data berita.",
          "error"
        );
      }
    },
    async fetchBerita() {
      this.ready = false;
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/auth/get-berita",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.beritaList = response.data.data; // Update the beritaList with data from the server
        this.ready = true;
      } catch (error) {
        console.error(error); // Handle error if any
        this.showAlert(
          "Opps...",
          "Terjadi kesalahan saat mengambil data berita.",
          "error"
        );
      }
    },
    showAlert(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon, // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        $("#addBerita").modal("hide");
        $("#updateBerita").modal("hide");
      });
    },
    handleFileUpload(event) {
      // Menggunakan FormData untuk mengirim file
      this.dataBerita.image = event.target.files[0];
    },
    async deleteOpportunity(id) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/auth/delete-berita/${id}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.fetchBerita(); // Reload the misi data after adding a new one
        this.showAlert('Success', 'Opportunity berhasil didelete', 'success');
      } catch (error) {
        console.error(error); // Handle error if any
               this.showAlert('Oops...', 'Terjadi kesalahan saat mendelete opportunity', 'error');
       
      }
    },
    konfirmasi(idBerita, opportunity) {
      Swal.fire({
        title: `Apakah Anda yakin ingin menghapus opportunity ${opportunity}?`,
        text: "Benegit akan dihapus jika anda menekan tombol Hapus.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#061387",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteOpportunity(idBerita)    
        }
      });
    },
  },
  created() {
    const token = sessionStorage.getItem("token"); // Ambil token dari local storage

    if (token) {
      try {
        const [headerBase64, signatureBase64] = token.split(".");
        const header = JSON.parse(atob(headerBase64));
        const signature = atob(signatureBase64);

        const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Mendekode bagian payload dari token JWT
        const expTimestamp = tokenPayload.exp;

        const expDate = new Date(expTimestamp * 1000); // Konversi Unix Timestamp ke JavaScript Date

        console.log("Waktu Kedaluwarsa (UTC):", expDate.toUTCString()); // Tampilkan waktu kedaluwarsa dalam format UTC

        if (new Date() > expDate) {
          console.log("Keluar");
          sessionStorage.removeItem("token");
          this.$router.push("/");
        } else {
          console.log("Aman");
        }
        this.user_id = tokenPayload.id;
        console.log("ini idddd:", this.user_id);
        if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.fetchBerita();
        // akhir
      } catch (error) {
        console.error("Error decoding token:", error);
        this.$router.push("/"); // Tindakan jika terjadi kesalahan dekode
      }
    } else {
      this.$router.push("/"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
    }
  },
};
</script>


<style>
#content-wrapper {
  min-height: 780px !important;
}
</style>
