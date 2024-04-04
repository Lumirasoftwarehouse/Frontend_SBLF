<script setup>
import Sidebar from "../../components/admin/Sidebar.vue";
import Navbar from "../../components/general/Navbar.vue";
import Footer from "../../components/general/Footer.vue";
import Card from "../../components/general/Card.vue";
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
          <h1 class="h3 mb-0 text-gray-800 text-center">Visi & Misi</h1>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  class="btn btn-warning"
                  data-toggle="modal"
                  data-target="#tambahVisiModal"
                >
                  Tulis Visi
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#tambahMisiModal"
                >
                  Tambah Misi
                </button>
              </div>
              <!-- Tabel Visi -->
              <div class="table-responsive mt-3 mb-3">
                <p v-if="!readyVisi">Loading data visi...</p>
                <table class="display table table-striped" v-if="readyVisi">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 50px">No</th>
                      <th scope="col">Visi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in visiList" :key="item.id">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.visi }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Tabel Misi -->
              <div class="table-responsive">
                <p v-if="!readyMisi">Loading data misi...</p>
                <table class="display table table-striped" v-if="readyMisi">
                  <thead>
                    <tr>
                      <th scope="col" style="width: 50px">No</th>
                      <th scope="col" style="width: 130px">Aksi</th>
                      <th scope="col">Misi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in misiList" :key="item.id">
                      <td>{{ index + 1 }}</td>
                      <td>
                        <button
                          class="btn btn-warning me-3"
                          data-toggle="modal"
                          data-target="#updateMisiModal"
                          @click="setDataMisi(item.id, item.misi)"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-danger" @click="konfirmasi(item.id, item.misi)">
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                      <td>{{ item.misi }}</td>
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

  <!-- Tambah Visi Modal -->
  <div
    class="modal"
    id="tambahVisiModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="tambahVisiModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="tambahVisiModalLabel">Tambah Visi</h5>
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
          <!-- Form untuk menambahkan visi -->
          <textarea
            class="form-control"
            v-model="newVisi"
            placeholder="Masukkan Visi"
          ></textarea>
        </div>
        <div class="modal-footer">
           <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                Batal
              </button>
          <button type="button" class="btn btn-primary" @click="tambahVisi">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Tambah Misi Modal -->
  <div
    class="modal"
    id="tambahMisiModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="tambahMisiModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="tambahMisiModalLabel">Tambah Misi</h5>
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
          <!-- Form untuk menambahkan misi -->
          <textarea
            class="form-control"
            v-model="newMisi"
            placeholder="Masukkan Misi"
          ></textarea>
        </div>
        <div class="modal-footer">
           <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                Batal
              </button>
          <button type="button" class="btn btn-primary" @click="tambahMisi">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Update Misi Modal -->
  <div
    class="modal"
    id="updateMisiModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="updateMisiModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateMisiModalLabel">Update Misi</h5>
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
          <!-- Form untuk menambahkan misi -->
          <textarea
            class="form-control"
            v-model="dataMisi"
            placeholder="Masukkan Misi"
          ></textarea>
        </div>
        <div class="modal-footer">
           <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                Batal
              </button>
          <button type="button" class="btn btn-primary" @click="updateMisi">
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      newVisi: "",
      newMisi: "",
      visiList: [],
      misiList: [],
      dataMisi:"",
      idMisi:"",
      user_id: "",
      readyVisi: false,
      readyMisi: false,
    };
  },
  methods: {
    setDataMisi(idMisi, misi){
      this.dataMisi = misi;
      this.idMisi = idMisi
    },
    async tambahVisi() {
      try {
        const response = await axios.post(
          "https://backend-sblf.lumirainternational.com/api/auth/create-visi",
          {
            visi: this.newVisi,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.newVisi = ""; // Clear input field after successful submission
        this.fetchVisi(); // Reload the visi data after adding a new one
         this.showAlert('Success', 'Visi berhasil ditambahkan', 'success');
        
      } catch (error) {
        console.error(error); // Handle error if any
         this.showAlert('Success', 'Terjadi kesalahan saat menambahkan visi', 'error');
        
      }
    },
    async tambahMisi() {
      try {
        const response = await axios.post(
          "https://backend-sblf.lumirainternational.com/api/auth/create-misi",
          {
            misi: this.newMisi,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.newMisi = ""; // Clear input field after successful submission
        this.fetchMisi(); // Reload the misi data after adding a new one
                       this.showAlert('Success', 'Misi berhasil ditambahkan', 'success');
       
      } catch (error) {
        console.error(error); // Handle error if any
                       this.showAlert('Oops...', 'Terjadi kesalahan saat menambahkan misi', 'error');
       
      }
    },
    async updateMisi() {
      try {
        const response = await axios.post(
          `https://backend-sblf.lumirainternational.com/api/auth/update-misi/${this.idMisi}`,
          {
            misi: this.dataMisi,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.dataMisi = ""; // Clear input field after successful submission
        this.fetchMisi(); // Reload the misi data after adding a new one
        this.showAlert('Success', 'Misi berhasil diupdate', 'success');
      } catch (error) {
        console.error(error); // Handle error if any
               this.showAlert('Oops...', 'Terjadi kesalahan saat mengupdate misi', 'error');
       
      }
    },
    async deleteMisi(id) {
      try {
        const response = await axios.delete(
          `https://backend-sblf.lumirainternational.com/api/auth/delete-misi/${id}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.fetchMisi(); // Reload the misi data after adding a new one
        this.showAlert('Success', 'Misi berhasil didelete', 'success');
      } catch (error) {
        console.error(error); // Handle error if any
               this.showAlert('Oops...', 'Terjadi kesalahan saat mendelete misi', 'error');
       
      }
    },
    async fetchVisi() {
      this.readyVisi = false;
      try {
        const response = await axios.get(
          "https://backend-sblf.lumirainternational.com/api/auth/get-visi",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.visiList = response.data.data; // Update the visiList with data from the server
        this.readyVisi = true;
      } catch (error) {
        console.error(error); // Handle error if any
      }
    },
    async fetchMisi() {
      this.readyMisi = false;
      try {
        const response = await axios.get(
          "https://backend-sblf.lumirainternational.com/api/auth/get-misi",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.misiList = response.data.data; // Update the misiList with data from the server
        this.readyMisi = true;
      } catch (error) {
        console.error(error); // Handle error if any
      }
    },
    showAlert(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon, // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        $("#tambahVisiModal").modal("hide");
        $("#tambahMisiModal").modal("hide");
        $("#updateMisiModal").modal("hide");
      });
    },
    konfirmasi(idMisi, misi) {
      Swal.fire({
        title: `Apakah Anda yakin ingin menghapus misi ${misi}?`,
        text: "Misi akan dihapus jika anda menekan tombol Hapus.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#061387",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteMisi(idMisi)    
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
        this.fetchVisi(); // Fetch visi data when the component is created
        this.fetchMisi(); // Fetch misi data when the component is created

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
