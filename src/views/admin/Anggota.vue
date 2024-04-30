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
          <h1 class="h3 mb-0 text-gray-800 text-center">Anggota</h1>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row mb-3">
                <div class="col-4">
                  <button
                    class="btn blueButton me-2"
                    data-toggle="modal"
                    data-target="#addAnggota"
                  >
                    Tambahkan Anggota
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
                      <th scope="col" style="width: 130px">Aksi</th>
                      <th scope="col">Image</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in anggotas" :key="item.id">
                      <td>{{index + 1}}</td>
                      <td>
                        <button
                          class="btn btn-warning me-3"
                          data-toggle="modal"
                          data-target="#updateAnggota"
                          @click="setDataAnggota(item.id, item.nama, item.image, item.deskripsi)"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button class="btn btn-danger" @click="konfirmasi(item.id, item.nama)">
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                      <td>
                         <img
                          :src="`https://backend-sblf.lumirainternational.com/storage/anggota/${item.image}`"
                          alt="trend"
                          width="200"
                        />
                        </td> 
                      <td>{{item.nama}}</td> 
                      <td>{{item.deskripsi}}</td> 
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
    <div
    class="modal fade"
    id="addAnggota"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addAnggotaLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addAnggotaLabel">Tambahkan Anggota</h5>
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
            <div class="mb-3">
              <label for="image" class="form-label">Image</label>
              <input
                type="file"
                class="form-control"
                id="image"
                @change="handleFileUpload"
              />
            </div>
            <div class="mb-3">
              <label for="nama" class="form-label">Nama</label>
              <input
                type="text"
                class="form-control"
                id="nama"
                v-model="dataAnggota.nama"
                                placeholder="Masukkan nama"
              />
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">Deskripsi</label>
               <textarea
              class="form-control"
              v-model="dataAnggota.deskripsi"
              placeholder="Masukkan deskripsi"
            ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button type="button" class="btn blueButton" @click="tambahAnggota">
            Kirim
          </button>
        </div>
      </div>
    </div>
  </div>

    <!-- Update Trend -->
  <div
    class="modal"
    id="updateAnggota"
    tabindex="-1"
    role="dialog"
    aria-labelledby="updateAnggotaLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateAnggotaLabel">Update Anggota</h5>
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
          <form>
            <div class="mb-3">
              <label for="image" class="form-label">Image</label>
              <input
                type="file"
                class="form-control"
                id="image"
                @change="handleFileUpload"
              />
              <p>{{dataUpdateAnggotas.image}}</p>
            </div>
            <div class="mb-3">
              <label for="nama" class="form-label">Nama</label>
              <input
                type="text"
                class="form-control"
                id="nama"
                v-model="dataUpdateAnggotas.nama"
                placeholder="Masukkan nama"
              />
            </div>
            <div class="mb-3">
              <label for="deskripsi" class="form-label">Deskripsi</label>
               <textarea
              class="form-control"
              v-model="dataUpdateAnggotas.deskripsi"
              placeholder="Masukkan deskripsi"
            ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
           <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                Batal
              </button>
          <button type="button" class="btn btn-primary" @click="updateAnggota">
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
      newBenefit: "",
      dataAnggota: {
        image:null,
        judul:"",
        desripsi:""
      },
      dataUpdateAnggotas: {
        image:"",
        judul:"",
        desripsi:""
      },
      anggotas: [],
      dataBenefit:"",
      idTrend:"",
      user_id: "",
      ready: false,
      remainingTime: "Loading"
    };
  },
  methods: {
    setDataAnggota(id, nama, image, deskripsi ){
        this.idTrend = id;
        this.dataUpdateAnggotas.nama = nama;
        this.dataUpdateAnggotas.deskripsi = deskripsi;
        this.dataUpdateAnggotas.image = image;
    },
    async updateAnggota() {
      try {
        const formData = new FormData();
        formData.append("image", this.dataAnggota.image);
        formData.append("nama", this.dataUpdateAnggotas.nama);
        formData.append("deskripsi", this.dataUpdateAnggotas.deskripsi);
        const response = await axios.post(
          `https://backend-sblf.lumirainternational.com/api/auth/update-anggota/${this.idTrend}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.updateAnggota = ""; // Clear input field after successful submission
        this.fetchAnggota() // Reload the misi data after adding a new one
        this.showAlert('Success', 'Anggota berhasil diupdate', 'success');
      } catch (error) {
        console.error(error); // Handle error if any
               this.showAlert('Oops...', 'Terjadi kesalahan saat mengupdate anggota', 'error');
       
      }
    },
        async tambahAnggota() {
      try {
         const formData = new FormData();
        formData.append("image", this.dataAnggota.image);
        formData.append("nama", this.dataAnggota.nama);
        formData.append("deskripsi", this.dataAnggota.deskripsi);
        const response = await axios.post(
          "https://backend-sblf.lumirainternational.com/api/auth/create-anggota",
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
          }
        );
        console.log(response.data); // Handle response from server
        this.dataAnggota = {
          image :null,
          judul : "",
        } 
        this.dataAnggota.image = null;
        this.fetchAnggota() // Reload the about data after adding a new one
        this.showAlert('Berhasil!','Data anggota berhasil ditambahkan.','success');
        
      } catch (error) {
        console.error(error); // Handle error if any
                this.showAlert('Opps...','Terjadi kesalahan saat menambahkan data anggota.','error');
      }
    },
    async deleteAnggota(id) {
      try {
        const response = await axios.delete(
          `https://backend-sblf.lumirainternational.com/api/auth/delete-anggota/${id}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.fetchAnggota() // Reload the misi data after adding a new one
        this.showAlert('Success', 'Anggota berhasil didelete', 'success');
      } catch (error) {
        console.error(error); // Handle error if any
               this.showAlert('Oops...', 'Terjadi kesalahan saat mendelete anggota', 'error');
       
      }
    },
    async fetchAnggota() {
        this.ready = false;
      try {
        const response = await axios.get(
          "https://backend-sblf.lumirainternational.com/api/auth/list-anggota",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
          }
        );
        this.anggotas = response.data.data; // Update the anggotas with data from the server
        this.ready = true;
      } catch (error) {
        console.error(error); // Handle error if any
        this.showAlert('Opps...','Terjadi kesalahan saat mengambil data anggota.','error');
      }
    },
    showAlert(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon, // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        $("#addAnggota").modal("hide");
        $("#updateAnggota").modal("hide");
      });
    },
    konfirmasi(idTrend, trend) {
      Swal.fire({
        title: `Apakah Anda yakin ingin menghapus anggota ${trend}?`,
        text: "Anggota akan dihapus jika anda menekan tombol Hapus.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#061387",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteAnggota(idTrend)    
        }
      });
    },
    handleFileUpload(event) {
      // Menggunakan FormData untuk mengirim file
      this.dataAnggota.image = event.target.files[0];
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
        this.fetchAnggota()
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
