<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-light sidebar sidebar-dark accordion"
    id="accordionSidebar"
    :class="{ toggled: sidebarToggled }"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#"
    >
      <div class="sidebar-brand-icon mt-2">
        <img src="/img/logo.png" alt="logo" width="50" />
      </div>
      <div class="sidebar-brand-text ms-3">
        <span class="text-primary">SBLF</span>
      </div>
    </a>

    <!-- Heading -->
    <div class="sidebar-heading mt-5 text-primary">Menu</div>
    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-dashboard"
        active-class="font-weight-bold active-link"
      >
        <i class="bi bi-speedometer2 text-primary"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Nav Item - About -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-about"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-bar-chart-line text-primary"></i>
        <span>About SBLF</span>
      </router-link>
    </li>

    <!-- Nav Item - Visi Misi -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-visi-misi"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-bar-chart-line text-primary"></i>
        <span>Visi Misi</span>
      </router-link>
    </li>
    <!-- Nav Item - Opportunity -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-opportunity"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-bar-chart-line text-primary"></i>
        <span>Opportunity</span>
      </router-link>
    </li>
    <!-- Nav Item - Benefit -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-benefit"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-bar-chart-line text-primary"></i>
        <span>Benefit Program</span>
      </router-link>
    </li>

    <!-- Nav Item - Trend -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-trend"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-bar-chart-line text-primary"></i>
        <span>Global Trends</span>
      </router-link>
    </li>

    <!-- Nav Item - Quote -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-quote"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-chat-left-text text-primary"></i>
        <span>Quote</span>
      </router-link>
    </li>

    <!-- Nav Item - Orientation Value -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-value"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-compass text-primary"></i>
        <span>Orientation Value</span>
      </router-link>
    </li>
    <!-- Nav Item - Client Partner -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-client"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-people text-primary"></i>
        <span>Client Partner</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  data() {
    return {
      sidebarToggled: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarToggled = !this.sidebarToggled;
    },
  },
};
</script>

<style>
@media (max-width: 576px) {
  /* Gaya CSS untuk menyembunyikan sidebar saat sidebarToggled bernilai false */
  .sidebar {
    display: none;
  }
}
/* Gaya CSS untuk menampilkan sidebar saat sidebarToggled bernilai true */
.toggle-sidebar {
  display: block !important;
  /* Tambahkan gaya CSS lain yang Anda inginkan untuk tampilan sidebar yang ditampilkan */
}
.nav-link.active-link,
.nav-link > i {
  font-weight: bold;
  color: #061387 !important;
}

.nav-link.active-link::before {
  content: "";
  display: block;
  width: 50%;
  height: 3px;
  background-color: #061387;
  position: absolute;
  bottom: 0;
}
</style>
