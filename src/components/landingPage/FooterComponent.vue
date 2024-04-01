<template>
  <footer class="text-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="mb-4">Contact</h2>
          <ul class="list-unstyled">
            <li><i class="bi bi-instagram"></i> <a href="https://www.instagram.com/sblf.id/" class="text-light" target="_blank">sblf.id</a></li>
            <li><i class="bi bi-globe"></i> <a href="http://www.sblf.id.com/" class="text-light" target="_blank">www.sblf.id.com</a></li>
            <li><i class="bi bi-envelope"></i> <a href="mailto:sblf.id@gmail.com" class="text-light">sblf.id@gmail.com</a></li>
            <li><i class="bi bi-geo-alt"></i> Bandung, Indonesia</li>
          </ul>
        </div>
        <div class="col-md-6 text-md-end">
          <p>&copy; Strategic Business Leaders Forum - 2024</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      shouldShowImage: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      this.shouldShowImage = scrollTop > 0;
    },
  },
};
</script>

<style scoped>
footer{
  background-color: #000064
}

.contact {
  font-size: 24px;
  font-weight: bold;
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  z-index: 1000;
  cursor: pointer;
}
</style>
