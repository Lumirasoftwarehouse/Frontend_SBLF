<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary navbar-light navbarCustom fixed-top"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../../public/img/logo.png" alt="sblf" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="navbarClass" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              class="nav-link menu"
              :to="{ name: 'landing-page' }"
              v-bind:class="{ active: activeLink === 'home' }"
              @click="setActive('home')"
              >HOME</router-link
            >
            
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link menu"
              :to="{ name: 'about-us' }"
              v-bind:class="{ active: activeLink === 'about' }"
              @click="setActive('about')"
              >ABOUT US</router-link
            >
          </li>
          <li class="nav-item">
             <router-link
              class="nav-link menu"
              :to="{ name: 'global-trend' }"
              v-bind:class="{ active: activeLink === 'trends' }"
              @click="setActive('trends')"
              >GLOBAL TRENDS</router-link
            >
          </li>
          <li class="nav-item">
             <router-link
              class="nav-link menu"
              :to="{ name: 'orientation-value' }"
              v-bind:class="{ active: activeLink === 'values' }"
              @click="setActive('values')"
              >ORIENTATION VALUES</router-link
            >
          </li>
          <li class="nav-item">
             <router-link
              class="nav-link menu"
              :to="{ name: 'obip' }"
              v-bind:class="{ active: activeLink === 'obip' }"
              @click="setActive('obip')"
              >OBIP</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="btn"
              :to="{ name: 'register' }"
              v-bind:class="{ active: activeLink === 'register' }"
              @click="setActive('register')"
              style="
                  background: linear-gradient(to right, #2a3798, #0995dd);
                  color: white;
                "
              >REGISTER</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(['activeLink']),
    navbarClass() {
      return {
        collapse: !this.isNavbarOpen,
        "navbar-collapse": true,
      };
    }
  },
  methods: {
    ...mapMutations(['setActiveLink']),
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    setActive(link) {
      // Memanggil mutasi setActiveLink dari store Vuex
      this.setActiveLink(link);
    },
  },
};
</script>


<style scoped>
.menu {
  color: #182848 !important; /* warna biru tua */
}

.nav-link.active {
  color: #0995dd !important; /* warna biru muda */
  text-decoration: none;
}

.nav-link.active::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #2a3798; /* garis bawah biru tua */
}

.navbarCustom {
  background-color: #ffffff;
}

.navbar-nav .nav-item .dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  z-index: 1;
}

.navbar-nav .nav-item:hover .dropdown-menu {
  display: block;
}

.dropdown-menu .dropdown-item {
  color: #212529;
  padding: 0.5rem 1rem;
  clear: both;
  font-weight: 400;
  text-decoration: none;
  display: block;
  width: 100%;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #7e7f80;
}

@media only screen and (max-width: 600px) {
  img {
    width: 50px;
  }
}
</style>
