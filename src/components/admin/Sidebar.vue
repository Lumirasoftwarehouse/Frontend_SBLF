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

  <!-- Beranda -->
  <li class="nav-item">
    <a
      class="nav-link collapsed text-primary"
      href="#"
      data-toggle="collapse"
      data-target="#collapsePagesBeranda"
      aria-expanded="true"
      aria-controls="collapsePagesBeranda"
    >
      <i class="fas fa-home text-primary"></i>
      <span>Beranda</span>
    </a>
    <div
      id="collapsePagesBeranda"
      class="collapse"
      aria-labelledby="headingPages"
      data-parent="#accordionSidebar"
    >
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Menu Beranda</h6>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-opportunity' }"
          >Opportunity</router-link>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-benefit' }"
          >Benefit Program</router-link>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-quote' }"
          >Quote</router-link>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-client' }"
          >Client Partner</router-link>
      </div>
    </div>
  </li>

  <!-- Tentang Kami -->
  <li class="nav-item">
    <a
      class="nav-link collapsed text-primary"
      href="#"
      data-toggle="collapse"
      data-target="#collapsePagesAbout"
      aria-expanded="true"
      aria-controls="collapsePagesAbout"
    >
      <i class="fas fa-users text-primary"></i>
      <span>Tentang Kami</span>
    </a>
    <div
      id="collapsePagesAbout"
      class="collapse"
      aria-labelledby="headingPages"
      data-parent="#accordionSidebar"
    >
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Menu Tentang Kami</h6>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-about' }"
          >About Us</router-link>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-visi-misi' }"
          >Visi Misi</router-link>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-trend' }"
          >Global Trends</router-link>
        <router-link
          class="dropdown-item"
          :to="{ name: 'admin-value' }"
          >Orientation Value</router-link>
      </div>
    </div>
  </li>

  <!-- Program -->
  <li class="nav-item">
    <a
      class="nav-link collapsed text-primary"
      href="#"
      data-toggle="collapse"
      data-target="#collapsePagesProgram"
      aria-expanded="true"
      aria-controls="collapsePagesProgram"
    >
      <i class="fas fa-cogs text-primary"></i>
      <span>Program</span>
    </a>
    <div
      id="collapsePagesProgram"
      class="collapse"
      aria-labelledby="headingPages"
      data-parent="#accordionSidebar"
    >
      <div class="bg-white py-2 collapse-inner rounded">
        <h6 class="collapse-header">Menu Program</h6>
        <router-link
          class="dropdown-item"
          :to="{ name: 'obip' }"
          v-bind:class="{ active: activeLink === 'obip' }"
          @click="setActive('obip')"
          >SBIP</router-link>
        <router-link
          class="dropdown-item"
          :to="{ name: 'obip' }"
          v-bind:class="{ active: activeLink === 'obip' }"
          @click="setActive('obip')"
          >BOLIP</router-link>
      </div>
    </div>
  </li>

  <!-- Service -->
  <li class="nav-item">
    <router-link
      class="nav-link text-primary"
      to="/admin-service"
      active-class="font-weight-bold text-primary active-link"
    >
      <i class="bi bi-gear-wide-connected text-primary"></i>
      <span>Service</span>
    </router-link>
  </li>

  <!-- Anggota -->
  <li class="nav-item">
    <router-link
      class="nav-link text-primary"
      to="/admin-members"
      active-class="font-weight-bold text-primary active-link"
    >
      <i class="bi bi-people text-primary"></i>
      <span>Anggota</span>
    </router-link>
  </li>

  <!-- Pengurus -->
  <li class="nav-item">
    <router-link
      class="nav-link text-primary"
      to="/admin-executives"
      active-class="font-weight-bold text-primary active-link"
    >
      <i class="bi bi-person-circle text-primary"></i>
      <span>Pengurus</span>
    </router-link>
  </li>

  <!-- Register -->
  <li class="nav-item">
    <router-link
      class="nav-link text-primary"
      to="/admin-register"
      active-class="font-weight-bold text-primary active-link"
    >
      <i class="bi bi-person-plus text-primary"></i>
      <span>Register</span>
    </router-link>
  </li>

  <!-- Divider -->
  <hr class="sidebar-divider d-none d-md-block" />
</ul>
<!-- End of Sidebar -->

</template>
