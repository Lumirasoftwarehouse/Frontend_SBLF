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
        <i class="bi bi-info-circle text-primary"></i>
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
        <i class="bi bi-eye text-primary"></i>
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
        <i class="bi bi-briefcase text-primary"></i>
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
        <i class="bi bi-gift text-primary"></i>
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
        <i class="bi bi-graph-up text-primary"></i>
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
        <i class="bi bi-chat-left-quote text-primary"></i>
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
    <!-- Nav Item - Register -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-register"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-person text-primary"></i>
        <span>Register</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
  </ul>
  <!-- End of Sidebar -->
</template>
